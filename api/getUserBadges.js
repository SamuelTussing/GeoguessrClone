import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Supposons que l'ID utilisateur soit stocké dans `req.query.userId`
            const { userId } = req.query;

            if (!userId) {
                return res.status(400).json({ message: "ID utilisateur requis" });
            }

            // 🔹 Récupération des données utilisateur
            const user = await db.collection("user").findOne({ _id: userId });

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            // 🔹 Extraction des badges
            const userBadges = user.badges || {};

            res.status(200).json({ badges: userBadges });
        } catch (error) {
            console.error("Erreur lors de la récupération des badges :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
