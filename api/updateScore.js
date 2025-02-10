import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { userId, score, locationSelect, badges, activeBadge } = req.body;

            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Convertir userId en ObjectId
            const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            // Mise à jour des badges
            let updateBadges = {};
            if (badges && badges.length > 0) {
                badges.forEach(badge => {
                    updateBadges[`badges.${badge}`] = true;
                });
            }

            // Mettre à jour le score et les badges
            await db.collection("users").updateOne(
                { _id: new ObjectId(userId) },
                { 
                    $set: updateBadges,
                    $push: { scores: { activeBadge, location: locationSelect, score } },
                    $max: { lastscore: score }
                }
            );

            console.log("Badges mis à jour :", updateBadges); // DEBUG

            res.status(200).json({ message: "Score et badges mis à jour" });

        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
