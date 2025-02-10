import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

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

            // Extraction des badges, expérience et niveau
            const userBadges = user.badges || {};
            const userExperience = user.experience || 0; // Valeur par défaut 0 si expérience non définie
            const userLevel = user.level || 1; // Valeur par défaut 1 si niveau non défini
            const username = user.username || "Imposteur";

            // Retourner les badges, expérience et niveau de l'utilisateur
            res.status(200).json({
                badges: userBadges,
                experience: userExperience,
                level: userLevel,
                username: user.username
            });
        } catch (error) {
            console.error("Erreur lors de la récupération des badges, expérience et niveau :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
