const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { roomCode } = req.query;
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db("multiplayerApp");
        const roomsCollection = db.collection("rooms");

        const room = await roomsCollection.findOne({ roomCode });

        if (!room) {
            return res.status(404).json({ error: "Salle introuvable" });
        }

        res.status(200).json(room);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.close();
    }
};