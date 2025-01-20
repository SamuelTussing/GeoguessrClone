import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    const { userId, score } = req.body;

    // Validation des données d'entrée
    if (!userId || typeof score !== "number") {
        console.error("Requête invalide : userId ou score manquant/incorrect", { userId, score });
        return res.status(400).json({ message: "Données manquantes ou invalides" });
    }

    // Vérification si `userId` est un ObjectId valide
    if (!ObjectId.isValid(userId)) {
        console.error("userId invalide :", userId);
        return res.status(400).json({ message: "userId invalide" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        const objectId = new ObjectId(userId);

        // Récupérer l'utilisateur actuel
        const user = await db.collection("users").findOne({ _id: objectId });
        if (!user) {
            console.error("Utilisateur introuvable avec l'ID :", userId);
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }

        // Calcul des niveaux et de l'expérience
        const oldLevel = user.level || 1;
        const newExperience = (user.experience || 0) + score;
        const newLevel = Math.floor(newExperience / 50000) + 1;

        // Mettre à jour les informations utilisateur
        const userUpdateResult = await db.collection("users").updateOne(
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

        if (userUpdateResult.modifiedCount === 0) {
            console.warn("Aucune mise à jour effectuée pour l'utilisateur :", userId);
        }

        // Vérifier ou ajouter un score dans la collection `scores`
        const existingScore = await db.collection("scores").findOne({ userId });
        if (existingScore) {
            // Mettre à jour si le nouveau score est supérieur
            if (existingScore.score < score) {
                await db.collection("scores").updateOne(
                    { userId },
                    { $set: { score, username: user.username } }
                );
            }
        } else {
            // Ajouter un nouveau score si l'utilisateur n'en a pas
            await db.collection("scores").insertOne({
                userId,
                username: user.username,
                score,
            });
        }

        // Récupérer les 10 meilleurs scores triés par score décroissant
        const topScores = await db.collection("scores")
            .find({})
            .sort({ score: -1 })
            .limit(10)
            .toArray();

        // Supprimer les scores excédentaires si plus de 10
        const scoreIdsToKeep = topScores.map((s) => s._id);
        const deleteResult = await db.collection("scores").deleteMany({
            _id: { $nin: scoreIdsToKeep },
        });

        if (deleteResult.deletedCount > 0) {
            console.log(`Scores supprimés : ${deleteResult.deletedCount}`);
        }

        // Réponse réussie
        return res.status(200).json({
            message: "Score mis à jour avec succès",
            oldLevel,
            newLevel,
        });
    } catch (error) {
        console.error("Erreur lors de la mise à jour du score :", error.message, error);
        return res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
}
