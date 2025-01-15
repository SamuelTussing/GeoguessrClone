import { Server } from "socket.io";

const rooms = {}; // Stockage des informations sur les salles et les joueurs

export default function handler(req, res) {
    if (!res.socket.server.io) {
        console.log("Initialisation de Socket.IO...");
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            console.log(`Un joueur connecté avec l'ID : ${socket.id}`);

            // Lorsqu'un joueur rejoint une salle
            socket.on('joinRoom', (roomCode, playerId) => {
                // Créer la salle si elle n'existe pas encore
                if (!rooms[roomCode]) {
                    rooms[roomCode] = {
                        players: []
                    };
                }

                // Ajouter le joueur à la salle
                rooms[roomCode].players.push({ id: socket.id, playerId });
                socket.join(roomCode);

                console.log(`${playerId} a rejoint la salle ${roomCode}`);
                io.to(roomCode).emit('playerJoined', rooms[roomCode].players.map(p => p.playerId)); // Diffuser la liste mise à jour des joueurs
            });

            // Lorsqu'un hôte décide de fermer la salle
            socket.on('closeRoom', (roomCode) => {
                console.log(`La salle ${roomCode} est fermée.`);

                if (!rooms[roomCode]) {
                    console.error(`Impossible de fermer la salle ${roomCode} : elle n'existe pas.`);
                    return;
                }

                // Déconnecter tous les joueurs de la salle
                const roomSockets = io.sockets.adapter.rooms.get(roomCode);
                if (roomSockets) {
                    roomSockets.forEach(socketId => {
                        const socketPlayer = io.sockets.sockets.get(socketId);
                        if (socketPlayer) {
                            socketPlayer.leave(roomCode); // Déconnecte le joueur de la salle
                            socketPlayer.emit('roomClosed'); // Notifie le joueur que la salle est fermée
                        }
                    });
                }

                // Supprimer la salle du serveur
                delete rooms[roomCode];

                // Diffuser que la salle est fermée
                io.to(roomCode).emit('roomClosed');
            });

            // Lorsqu'un joueur se déconnecte
            socket.on('disconnect', () => {
                console.log(`Un joueur s'est déconnecté avec l'ID : ${socket.id}`);

                // Retirer le joueur de toutes les salles où il se trouvait
                for (const roomCode in rooms) {
                    rooms[roomCode].players = rooms[roomCode].players.filter(p => p.id !== socket.id);

                    // Si la salle est vide après la déconnexion, on peut la supprimer
                    if (rooms[roomCode].players.length === 0) {
                        delete rooms[roomCode];
                        console.log(`La salle ${roomCode} a été supprimée car elle est vide.`);
                    } else {
                        // Mettre à jour la liste des joueurs restants dans la salle
                        io.to(roomCode).emit('playerJoined', rooms[roomCode].players.map(p => p.playerId));
                    }
                }
            });
        });
    } else {
        console.log("Socket.IO est déjà initialisé.");
    }

    res.end();
}
