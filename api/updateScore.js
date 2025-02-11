import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { userId, score, locationSelect, badges, activeBadge } = req.body;

            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            const objectId = new ObjectId(userId);

             // Convertir userId en ObjectId
            const user = await db.collection("users").findOne({ _id: ObjectId });
            if (!user) {
                console.error("Utilisateur introuvable avec l'ID :", userId);
                return res.status(404).json({ message: "Utilisateur introuvable" });
            }
            console.log("Utilisateur trouvé :", user.username);
    

            // Mise à jour des badges
            let updateBadges = {};
            if (badges && badges.length > 0) {
                badges.forEach(badge => {
                    updateBadges[`badges.${badge}`] = true;
                });
            }

            // Calculer les nouveaux niveaux et expérience
            const oldLevel = user.level || 1;
            const newExperience = (user.experience || 0) + score;
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour le score et les badges
            await db.collection("users").updateOne(
                { _id: new ObjectId(userId) },
                { 
                    $set: {
                        updateBadges,
                        experience:newExperience,
                        level: newLevel,
                        lastscore: score,
                    },
                    $push: { scores: { activeBadge, location: locationSelect, score } },// Ajouter le score, la localisation et le badge associé dans l'historique des scores
                }
            );

            //MISE A JOUR DES HIGHSCORES

            //Insere nouveau scores dans tableau scores
            const insertResult = await db.collection("scores").insertOne({
                userId: userId,
                username: user.username,
                level : oldLevel,
                score,
                activeBadge,
                location: locationSelect, // Stocker la localisation avec le score
            });

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
    
            console.log("Score inséré :", insertResult);

            console.log("Badges mis à jour :", updateBadges); // DEBUG

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
