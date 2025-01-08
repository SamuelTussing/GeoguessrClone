import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Récupère l'URI MongoDB depuis les variables d'environnement
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Veuillez configurer la variable d\'environnement MONGODB_URI');
}

if (process.env.NODE_ENV === 'development') {
    // En développement, utiliser une connexion MongoClient partagée pour éviter de nombreuses connexions
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // En production, utiliser une nouvelle connexion MongoClient pour chaque requête
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
