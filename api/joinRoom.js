const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { roomCode, playerName } = req.body; // Informations pour rejoindre une salle
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db("geoguessr_clone");
        const roomsCollection = db.collection("rooms");

        // Cherche la salle par roomCode
        const room = await roomsCollection.findOne({ roomCode });

        if (!room) {
            return res.status(404).json({ error: "Salle introuvable" });
        }

        if (room.players.length >= 2) {
            return res.status(400).json({ error: "La salle est pleine" });
        }

        // Ajoute le joueur à la salle
        room.players.push({ name: playerName, score: 0 });

        await roomsCollection.updateOne(
            { roomCode },
            { $set: { players: room.players } }
        );

        res.status(200).json({ message: "Rejoint avec succès", players: room.players });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.close();
    }
};
