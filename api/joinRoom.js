const joinRoom = async (req, res) => {
    if (req.method === "POST") {
        const { roomCode, playerName } = req.body;

        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();
            const db = client.db("multiplayerApp");
            const roomsCollection = db.collection("rooms");

            // Trouver la salle par son code
            const room = await roomsCollection.findOne({ roomCode });

            if (!room) {
                return res.status(404).json({ error: "Salle introuvable" });
            }

            // Vérifier si le joueur est déjà dans la salle
            if (room.players.includes(playerName)) {
                return res.status(400).json({ error: "Le joueur est déjà dans la salle" });
            }

            // Ajouter le joueur à la liste des joueurs
            await roomsCollection.updateOne(
                { roomCode },
                { $push: { players: playerName } } // Ajouter le joueur à la liste
            );

            // Renvoyer la liste des joueurs mise à jour
            const updatedRoom = await roomsCollection.findOne({ roomCode });
            res.status(200).json({ players: updatedRoom.players });
        } catch (error) {
            console.error("Erreur lors de la jonction de la salle :", error);
            res.status(500).json({ error: "Erreur serveur" });
        } finally {
            await client.close();
        }
    }
};
