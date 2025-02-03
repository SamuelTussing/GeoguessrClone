import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Récupérer les 5 meilleurs scores triés par score décroissant
            const topScores = await db.collection("FlagScore")
                .find({})
                .sort({ score: -1 })
                .limit(5)
                .toArray();

            // Si des scores sont trouvés
            if (topScores.length > 0) {
                return res.status(200).json(topScores);
            } else {
                return res.status(404).json({ message: "Aucun score trouvé" });
            }

        } catch (error) {
            console.error("Erreur lors de la récupération des scores :", error.message, error);
            return res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    } else {
        // Méthode non autorisée si ce n'est pas une requête GET
        return res.status(405).json({ message: "Méthode non autorisée" });
    }
}
