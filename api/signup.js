import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../lib/mongodb';
import cors, { runMiddleware } from '../lib/middleware/corsMiddleware';

export default async function handler(req, res) {
    // Exécuter le middleware CORS
    await runMiddleware(req, res, cors);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

// Ajouter l'utilisateur dans la base de données
const result = await db.collection('users').insertOne({
    username,
    email,
    password: hashedPassword,
    createdAt: new Date(),
    betaTester: false,
    experience: 0, // Initialise à 0
    level: 1, // Niveau initial
    lastscore: 0, // Score initial
    scores: [], // Liste des meilleurs scores (vide au début)

    // Initialisation des badges : tous à false par défaut
    badges: {
        BetaTesteur: false,
        Choucroute: false,
        Halsacien: false,
        Globetrotter: false,
        Conqueror: false,
        Croissant: false,
        Marine: false,
        Voyageur: false,
        Blietzkrieg: false,
        Aigle: false,
        CowBoy: false,
        Pionnier: false,
        Archeologue: false,
        Reporter: false,
        DucdeAgass: false,
        RoutardPro: false,
        5:false,
        10:false,
        20:false,
        30:false,
        40:false,
        50:false,
        60:false,
        70:false,
        80:false,
        90:false,
        100:false
    }
});

        // Générer un token JWT
        const token = jwt.sign(
            { userId: result.insertedId, email },
            process.env.JWT_SECRET || "secret_key",
            { expiresIn: "1h" }
        );

        res.status(201).json({
            message: 'Utilisateur enregistré avec succès',
            userId: result.insertedId,
            username,
            experience,
            level,
            token,
        });
    } catch (err) {
        console.error("Erreur lors de l'inscription :", err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
