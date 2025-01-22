import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    const { userId, score, locationType } = req.body;

    // Validation des données d'entrée
    if (!userId || typeof score !== "number" || !locationType) {
        console.error("Requête invalide : userId, score ou locationType manquant/incorrect", { userId, score, locationType });
        return res.status(400).json({ message: "Données manquantes ou invalides" });
    }

    if (!ObjectId.isValid(userId)) {
        console.error("userId invalide :", userId);
        return res.status(400).json({ message: "userId invalide" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        const objectId = new ObjectId(userId);

        // Récupérer les informations du joueur
        const user = await db.collection("users").findOne({ _id: objectId });
        if (!user) {
            console.error("Utilisateur introuvable avec l'ID :", userId);
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }

        // Calculer les nouveaux niveaux et expérience
        const oldLevel = user.level || 1;
        const newExperience = (user.experience || 0) + score;
        const newLevel = Math.floor(newExperience / 50000) + 1;

        // Mettre à jour les informations de l'utilisateur
        await db.collection("users").updateOne(
            { _id: objectId },
            {
                $set: {
                    experience: newExperience,
                    level: newLevel,
                    lastscore: score,
                },
                $push: { scores: { score, locationType } }, // Ajouter le score avec le locationType dans l'historique des scores
            }
        );

        // Ajouter le score dans la collection `scores` avec le locationType
        await db.collection("scores").insertOne({
            userId: userId,
            username: user.username,
            score,
            locationType,
        });

        // Récupérer les 10 meilleurs scores triés par score décroissant pour le locationType
        const topScores = await db.collection("scores")
            .find({ locationType }) // Filtrer par locationType
            .sort({ score: -1 })
            .limit(10)
            .toArray();

        // Supprimer les scores excédentaires pour ce locationType
        const scoreIdsToKeep = topScores.map((s) => s._id);
        const deleteResult = await db.collection("scores").deleteMany({
            locationType,
            _id: { $nin: scoreIdsToKeep },
        });

        if (deleteResult.deletedCount > 0) {
            console.log(`Scores supprimés pour ${locationType} : ${deleteResult.deletedCount}`);
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
