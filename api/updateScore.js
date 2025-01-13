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

            // Calculer l'expérience gagnée
            const experienceGained = Math.floor(score / 100);

            // Mettre à jour `lastscore`, ajouter le score à l'historique et incrémenter l'expérience
            const result = await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: { lastscore: score },
                    $inc: { experience: experienceGained },
                    $push: { scores: score },
                }
            );

            // Optionnel : Mise à jour du niveau si nécessaire
            const user = await db.collection("users").findOne({ _id: objectId });
            const newLevel = Math.floor(user.experience / 1000) + 1; // Exemple : 1000 XP par niveau
            if (newLevel !== user.level) {
                await db.collection("users").updateOne(
                    { _id: objectId },
                    { $set: { level: newLevel } }
                );
            }

            // Réponse réussie
            res.status(200).json({ message: "Score et expérience mis à jour avec succès" });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
