const { MongoClient } = require("mongodb");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Méthode non autorisée" });
    }

    const { roomCode, playerName } = req.body; // Informations nécessaires pour rejoindre une salle
    if (!roomCode || !playerName) {
        return res.status(400).json({ error: "Code de salle ou nom du joueur manquant" });
    }

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const db = client.db("geoguessr_clone"); // Utilisation de la base de données correcte
        const roomsCollection = db.collection("rooms");

        // Cherche la salle par roomCode
        const room = await roomsCollection.findOne({ roomCode });

        if (!room) {
            return res.status(404).json({ error: "Salle introuvable" });
        }

        if (room.status === "closed") {
            return res.status(400).json({ error: "La salle est fermée" });
        }

        if (room.players.length >= 2) { // Limite le nombre de joueurs à 2 pour l'exemple
            return res.status(400).json({ error: "La salle est pleine" });
        }

        // Vérifie si le joueur est déjà dans la salle
        const isPlayerInRoom = room.players.some(player => player.name === playerName);
        if (isPlayerInRoom) {
            return res.status(400).json({ error: "Vous êtes déjà dans cette salle" });
        }

        // Ajoute le joueur à la liste des joueurs dans la salle
        const updatedPlayers = [...room.players, { name: playerName, score: 0 }];
        await roomsCollection.updateOne(
            { roomCode },
            { $set: { players: updatedPlayers } }
        );

        // Envoie une réponse avec la liste complète des joueurs
        res.status(200).json({
            message: "Rejoint avec succès",
            players: updatedPlayers // Liste mise à jour des joueurs, y compris l'hôte
        });
    } catch (error) {
        console.error("Erreur lors de la tentative de rejoindre une salle :", error);
        res.status(500).json({ error: "Erreur serveur" });
    } finally {
        await client.close();
    }
};
