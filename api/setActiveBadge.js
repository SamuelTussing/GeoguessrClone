import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb"; // Vérifie le chemin correct

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        const { userId, activeBadge } = req.body; // Récupère l'ID utilisateur et le badge choisi
        console.log("Requête reçue pour userId :", userId, "avec le badge :", activeBadge);

        if (!userId || !activeBadge) {
            console.error("ID utilisateur ou badge manquant");
            return res.status(400).json({ message: "ID utilisateur et badge requis" });
        }

        if (!ObjectId.isValid(userId)) {
            console.error("ID utilisateur invalide :", userId);
            return res.status(400).json({ message: "ID utilisateur invalide" });
        }

        const result = await db.collection("users").updateOne(
            { _id: new ObjectId(userId) },
            { $set: { activeBadge: activeBadge } }
        );

        if (result.matchedCount === 0) {
            console.error("Utilisateur non trouvé :", userId);
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        console.log("✅ Badge actif mis à jour :", activeBadge);
        return res.status(200).json({ message: "Badge mis à jour avec succès", activeBadge });

    } catch (error) {
        console.error("🔥 Erreur lors de la mise à jour du badge actif :", error);
        return res.status(500).json({ message: "Erreur serveur", error: error.toString() });
    }
}
