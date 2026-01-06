import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb"; // Assure-toi que le chemin est bon

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        const { userId } = req.query;
        console.log("Requête reçue pour l'userId :", userId);

        if (!userId) {
            console.error("ID utilisateur manquant");
            return res.status(400).json({ message: "ID utilisateur requis" });
        }

        if (!ObjectId.isValid(userId)) {
            console.error("ID utilisateur invalide :", userId);
            return res.status(400).json({ message: "ID utilisateur invalide" });
        }

        const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });

        if (!user) {
            console.error("Utilisateur non trouvé :", userId);
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        console.log("Badge actif trouvé :", user.activeBadge);
        return res.status(200).json({ activeBadge: user.activeBadge || null });
    } catch (error) {
        console.error("Erreur lors de la récupération du badge actif :", error);
        return res.status(500).json({ message: "Erreur serveur", error: error.toString() });
    }
}
