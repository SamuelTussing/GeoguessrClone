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

            // Mettre à jour le champ `lastscore` et ajouter le score à l'historique
            await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: { lastscore: score },
                    $push: { scores: score },
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
            res.status(200).json({ message: "Score mis à jour avec succès" });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}