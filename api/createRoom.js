const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { rounds, duration, map } = req.body; // Informations pour la partie
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db("geoguessr_clone");
        const roomsCollection = db.collection("rooms");

        // Génère un identifiant unique pour la salle (code à 6 chiffres)
        const roomCode = Math.floor(100000 + Math.random() * 900000).toString();

        // Crée une nouvelle salle
        const newRoom = {
            roomCode,
            rounds,
            duration,
            map,
            players: [], // Liste des joueurs (sera mise à jour lors du join)
            isActive: true,
            createdAt: new Date(),
        };

        await roomsCollection.insertOne(newRoom);

        res.status(200).json({ roomCode }); // Retourne l'ID de la salle
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.close();
    }
};
