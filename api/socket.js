import { Server } from "socket.io";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ message: "WebSocket API" });
        return;
    }

    // Créez une instance de Socket.IO
    const io = new Server(res.socket.server, {
        path: '/api/socket', // C'est ici que vous définissez le chemin pour votre serveur WebSocket
    });

    io.on('connection', (socket) => {
        console.log(`Un joueur connecté avec l'ID : ${socket.id}`);

        // Exemple de gestion de l'événement "joinRoom"
        socket.on('joinRoom', ({ roomCode, playerId }) => {
            socket.join(roomCode);  // Le joueur rejoint la salle
            console.log(`${playerId} a rejoint la salle ${roomCode}`);
            
            // Vous pouvez aussi notifier tous les joueurs de la salle que quelqu'un a rejoint
            io.to(roomCode).emit('playerJoined', playerId);
        });

        // Exemple de gestion de l'événement "startGame"
        socket.on('startGame', (roomCode) => {
            console.log(`La partie commence dans la salle ${roomCode}`);
            io.to(roomCode).emit('gameStarted');  // Émet à tous les joueurs que la partie commence
        });

        socket.on('disconnect', () => {
            console.log(`Un joueur s'est déconnecté avec l'ID : ${socket.id}`);
        });
    });

    res.end(); // Terminer la réponse pour la connexion
}
