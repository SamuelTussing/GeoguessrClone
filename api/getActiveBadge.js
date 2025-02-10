import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb"; // Assure-toi que le chemin est correct

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Récupérer l'ID utilisateur depuis la requête
            const { userId } = req.query;

            if (!userId) {
                return res.status(400).json({ message: "ID utilisateur requis" });
            }

            // Vérifier si l'ID utilisateur est valide (format MongoDB ObjectId)
            if (!ObjectId.isValid(userId)) {
                return res.status(400).json({ message: "ID utilisateur invalide" });
            }

            // Récupération des données utilisateur à partir de l'ID converti en ObjectId
            const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            // Vérifier si l'utilisateur a un badge actif
            const activeBadge = user.activeBadge || "5";

            return res.status(200).json({ activeBadge });
        } catch (error) {
            console.error("Erreur lors de la récupération du badge actif :", error);
            return res.status(500).json({ message: "Erreur serveur" });
        }
    } else {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }
}
