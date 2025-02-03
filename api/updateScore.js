import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    // Extraction des données depuis le corps de la requête
    const { userId, score, locationSelect } = req.body; // Inclure la localisation dans les données

    console.log("Données reçues :", { userId, score, locationSelect }); // Log pour déboguer les données reçues

    // Validation des données d'entrée
    if (!userId || typeof score !== "number" || !locationSelect) {
        console.error("Requête invalide : userId, score ou location manquant/incorrect", { userId, score, locationSelect });
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

        console.log("Utilisateur trouvé :", user.username);

        // Calculer les nouveaux niveaux et expérience
        const oldLevel = user.level || 1;
        const newExperience = (user.experience || 0) + score;
        const newLevel = Math.floor(newExperience / 50000) + 1;

        // Mise à jour des informations de l'utilisateur
        const updateResult = await db.collection("users").updateOne(
            { _id: objectId },
            {
                $set: {
                    experience: newExperience,
                    level: newLevel,
                    lastscore: score,
                },
                $push: { scores: { score, locationSelect } }, // Ajouter le score et la localisation dans l'historique des scores
            }
        );

        console.log("Mise à jour utilisateur :", updateResult);

        // Ajouter le score et la localisation dans la collection `scores`
        const insertResult = await db.collection("scores").insertOne({
            userId: userId,
            username: user.username,
            score,
            location: locationSelect, // Stocker la localisation avec le score
        });

        console.log("Score inséré :", insertResult);

        // Récupérer les 200 meilleurs scores triés par score décroissant
        const topScores = await db.collection("scores")
            .find({})
            .sort({ score: -1 })
            .limit(200)
            .toArray();

        console.log("Top scores :", topScores);

        // Supprimer les scores excédentaires s'il y a plus de 10 scores
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
