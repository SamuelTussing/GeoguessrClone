import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId, score } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Convertir userId en ObjectId
            const objectId = new ObjectId(userId);

            // Récupérer l'utilisateur actuel
            const user = await db.collection("users").findOne({ _id: objectId });
            if (!user) {
                return res.status(404).json({ message: "Utilisateur introuvable" });
            }

            // Calculer les nouveaux niveaux et expérience
            const oldLevel = user.level || 1; // Niveau par défaut si non défini
            const newExperience = (user.experience || 0) + score; // Expérience par défaut si non définie
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour l'utilisateur dans la collection `users`
            await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: {
                        experience: newExperience,
                        level: newLevel,
                        lastscore: score,
                    },
                    $push: { scores: score }, // Ajout du score dans la liste des scores
                }
            );

            // Vérifier si le score fait partie des 10 meilleurs scores
            const topScores = await db.collection("scores").find({}) 
                .sort({ score: -1 }) // Tri par score décroissant
                .limit(10) // Limite aux 10 meilleurs scores
                .toArray();

            // Si moins de 10 scores ou le score est supérieur au plus bas des 10 meilleurs
            const lowestTopScore = topScores[topScores.length - 1]?.score || 0;
            if (topScores.length < 10 || score > lowestTopScore) {
                // Vérifier si l'utilisateur a déjà un score dans la collection `scores`
                const existingScore = await db.collection("scores").findOne({ userId: objectId });

                if (existingScore) {
                    // Mettre à jour si le nouveau score est supérieur
                    if (existingScore.score < score) {
                        await db.collection("scores").updateOne(
                            { userId: objectId },
                            { $set: { score, username: user.username } }
                        );
                    }
                } else {
                    // Ajouter un nouveau score si l'utilisateur n'en a pas
                    await db.collection("scores").insertOne({
                        userId: objectId,
                        username: user.username,
                        score,
                    });
                }

                // Supprimer les scores en trop si on dépasse 10 scores
                const updatedTopScores = await db.collection("scores")
                    .find({})
                    .sort({ score: -1 })
                    .limit(10)
                    .toArray();

                const scoreIdsToKeep = updatedTopScores.map((s) => s._id);
                await db.collection("scores").deleteMany({
                    _id: { $nin: scoreIdsToKeep },
                });
            }

            res.status(200).json({
                message: "Score mis à jour avec succès",
                oldLevel,
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
