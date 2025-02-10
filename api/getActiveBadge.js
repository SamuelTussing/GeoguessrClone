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

        res.json({ activeBadge: user.activeBadge });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}
};
