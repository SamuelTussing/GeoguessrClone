import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { userId, score, locationSelect, badges, activeBadge } = req.body;

            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            const objectId = new ObjectId(userId);

            // Récupérer l'utilisateur
            const user = await db.collection("users").findOne({ _id: objectId });
            if (!user) {
                console.error("Utilisateur introuvable avec l'ID :", userId);
                return res.status(404).json({ message: "Utilisateur introuvable" });
            }
            console.log("Utilisateur trouvé :", user.username);

            // Préparer la mise à jour des badges
            let badgeUpdates = {};
            if (badges && badges.length > 0) {
                badges.forEach(badge => {
                    if (!user.badges || user.badges[badge] !== true) {
                        badgeUpdates[`badges.${badge}`] = true; // Activer le badge si non déjà activé
                    }
                });
            }

            // Calculer le niveau et l'expérience
            const oldLevel = user.level || 1;
            const newExperience = (user.experience || 0) + score;
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour l'utilisateur
            await db.collection("users").updateOne(
                { _id: objectId },
                { 
                    $set: {
                        experience: newExperience,
                        level: newLevel,
                        lastscore: score,
                        ...badgeUpdates, // Mise à jour des badges débloqués
                    },
                    $push: { scores: { activeBadge, location: locationSelect, score } }, // Ajout du score à l'historique
                }
            );

            // Ajouter le score dans la collection "scores"
            const insertResult = await db.collection("scores").insertOne({
                userId: userId,
                username: user.username,
                level: oldLevel,
                score,
                activeBadge,
                location: locationSelect, 
            });

            // Récupérer et trier les meilleurs scores
            const topScores = await db.collection("scores")
                .find({})
                .sort({ score: -1 })
                .limit(200)
                .toArray();

            console.log("Top scores :", topScores);

            // Supprimer les scores excédentaires
            const scoreIdsToKeep = topScores.map((s) => s._id);
            const deleteResult = await db.collection("scores").deleteMany({
                _id: { $nin: scoreIdsToKeep },
            });

            if (deleteResult.deletedCount > 0) {
                console.log(`Scores supprimés : ${deleteResult.deletedCount}`);
            }

            console.log("Score inséré :", insertResult);
            console.log("Badges mis à jour :", badgeUpdates);

            res.status(200).json({ 
                message: "Score et badges mis à jour",
                oldLevel,
                newLevel
            });

        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}