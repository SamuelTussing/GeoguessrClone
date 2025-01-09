import Cors from 'cors';

// Initialiser le middleware CORS
const cors = Cors({
    origin: 'https://geoguessr-clone.vercel.app', // Remplacez par l'URL de votre frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Autorisez uniquement les méthodes nécessaires
    credentials: true, // Permet l'envoi des cookies ou des en-têtes d'authentification
});

// Fonction utilitaire pour exécuter le middleware
export function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default cors;
