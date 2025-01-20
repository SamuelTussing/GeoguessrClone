// Création de la salle avec l'ajout de l'hôte
const createRoom = async (req, res) => {
    if (req.method === "POST") {
        const { rounds, duration, map, playerName } = req.body;

        const roomCode = generateRoomCode(); // Générez ou attribuez un code de salle unique
        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();
            const db = client.db("multiplayerApp");
            const roomsCollection = db.collection("rooms");

            // Créez la salle avec un joueur (l'hôte)
            const newRoom = {
                roomCode,
                rounds,
                duration,
                map,
                players: [playerName], // Ajoutez l'hôte dans la liste des joueurs
                status: "open",
                isActive: true,
                createdAt: new Date(),
            };

            // Insérez la salle dans la base de données
            await roomsCollection.insertOne(newRoom);

            // Retourner le code de la salle à l'utilisateur
            res.status(200).json({ roomCode });
        } catch (error) {
            console.error("Erreur lors de la création de la salle :", error);
            res.status(500).json({ error: "Erreur serveur" });
        } finally {
            await client.close();
        }
    }
};
