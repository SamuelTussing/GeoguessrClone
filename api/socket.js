import { Server } from "socket.io";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ message: "WebSocket API" });
        return;
    }

    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
        console.log(`Un joueur connecté avec l'ID : ${socket.id}`);

        // Lorsqu'un joueur rejoint une salle
        socket.on('joinRoom', ({ roomCode, playerId }) => {
            socket.join(roomCode);  // Le joueur rejoint la salle spécifiée
            console.log(`${playerId} a rejoint la salle ${roomCode}`);
            
            // Notifier tous les joueurs dans la salle
            io.to(roomCode).emit('playerJoined', playerId);
        });

        // Lorsque l'hôte lance la partie
        socket.on('startGame', (roomCode) => {
            console.log(`La partie commence dans la salle ${roomCode}`);

            // Notifier tous les joueurs que la partie commence
            io.to(roomCode).emit('gameStarted');
        });

        // Lorsqu'un joueur se déconnecte
        socket.on('disconnect', () => {
            console.log(`Un joueur s'est déconnecté avec l'ID : ${socket.id}`);
        });
    });

    // Indiquer que la connexion a été établie avec succès
    res.end();
}