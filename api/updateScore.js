import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId, score, username } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Convertir userId en ObjectId
            const objectId = new ObjectId(userId);

            // Récupérer les données de l'utilisateur
            const user = await db.collection("users").findOne({ _id: objectId });
            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            // Ajouter le score à l'expérience
            const newExperience = user.experience + score;

            // Calculer le nouveau niveau
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour l'utilisateur dans la base de données
            await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: {
                        experience: newExperience,
                        level: newLevel,
                        lastscore: score,
                    },
                    $push: { scores: score }, // Ajouter le score à l'historique
                }
            );

            // Récupérer le top 10 des scores actuels
            const scoresCollection = db.collection("scores");
            const topScores = await scoresCollection
                .find({})
                .sort({ score: -1 })
                .limit(10)
                .toArray();

            // Vérifier si le score peut entrer dans le top 10
            if (
                topScores.length < 10 ||
                score > topScores[topScores.length - 1].score
            ) {
                // Ajouter le score avec le `username` au classement
                await scoresCollection.insertOne({
                    userId: objectId,
                    username: username || "Anonyme", // Utiliser le username reçu
                    score,
                    createdAt: new Date(),
                });

                // Nettoyer les scores hors top 10
                const updatedTopScores = await scoresCollection
                    .find({})
                    .sort({ score: -1 })
                    .limit(10)
                    .toArray();

                const lowestTopScore =
                    updatedTopScores[updatedTopScores.length - 1].score;

                // Supprimer les scores inférieurs au plus bas du top 10
                await scoresCollection.deleteMany({ score: { $lt: lowestTopScore } });
            }

            // Réponse réussie
            res.status(200).json({
                message: "Score et expérience mis à jour avec succès",
                newExperience,
                newLevel,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
