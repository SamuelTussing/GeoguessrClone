const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { roomCode } = req.query;

    // Vérification si roomCode est bien présent
    if (!roomCode) {
        return res.status(400).json({ error: "Le code de la salle est manquant" });
    }

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        console.log("Tentative de connexion à la salle avec roomCode :", roomCode);

        await client.connect();
        const db = client.db("multiplayerApp");
        const roomsCollection = db.collection("rooms");

        // Recherche de la salle en base de données
        const room = await roomsCollection.findOne({ roomCode });

        if (!room) {
            return res.status(404).json({ error: "Salle introuvable" });
        }

        // Envoi de la salle et de la liste des joueurs au client
        res.status(200).json(room);
    } catch (error) {
        console.error("Erreur lors de la récupération de la salle :", error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.close();
    }
};
