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

            // Mettre à jour la base de données pour l'utilisateur
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

            // Gérer la collection des scores pour les high scores
            const existingScore = await db.collection("scores").findOne({ userId });

            if (existingScore) {
                // Si un score existe déjà pour cet utilisateur, on ne le met à jour que si le nouveau score est supérieur
                if (existingScore.score < score) {
                    await db.collection("scores").updateOne(
                        { userId },
                        { $set: { score, username: user.username } }
                    );
                }
            } else {
                // Si aucun score n'existe pour cet utilisateur, insérer un nouveau record
                await db.collection("scores").insertOne({
                    userId,
                    username: user.username,
                    score,
                });
            }

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
