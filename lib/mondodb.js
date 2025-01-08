import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
    throw new Error("Veuillez définir 'MONGODB_URI' dans les variables d'environnement");
}

if (process.env.NODE_ENV === "development") {
    // Utiliser un client global en développement
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // Utiliser un client par déploiement en production
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
