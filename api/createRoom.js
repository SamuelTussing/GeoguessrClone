const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { rounds, duration, map } = req.body; // Informations pour la partie

    // Validation des entrées
    if (
        !rounds || typeof rounds !== "number" || rounds <= 0 ||
        !duration || typeof duration !== "number" || duration <= 0 ||
        !map || typeof map !== "string"
    ) {
        return res.status(400).json({ error: "Données invalides pour la création de la salle" });
    }

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db("geoguessr_clone");
        const roomsCollection = db.collection("rooms");

        let roomCode;

        // Assurez-vous que le code de la salle est unique
        do {
            roomCode = Math.floor(100000 + Math.random() * 900000).toString();
        } while (await roomsCollection.findOne({ roomCode }));

        // Crée une nouvelle salle
        const newRoom = {
            roomCode,
            rounds,
            duration,
            map,
            players: [], // Liste des joueurs (sera mise à jour lors du join)
            status: "open", // État initial de la salle
            isActive: true, // Utilisé pour vérifier si la salle est disponible
            createdAt: new Date(),
        };

        await roomsCollection.insertOne(newRoom);

        res.status(200).json({ roomCode }); // Retourne l'ID de la salle
    } catch (error) {
        console.error("Erreur lors de la création de la salle :", error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.close();
    }
};
