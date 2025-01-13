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
            const oldLevel = user.level;
            const newExperience = user.experience + score;
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour la base de données
            await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: {
                        experience: newExperience,
                        level: newLevel,
                        lastscore: score,
                    },
                    $push: { scores: score },
                }
            );

            // Réponse avec les infos nécessaires
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
