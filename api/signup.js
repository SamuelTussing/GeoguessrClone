import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone"); // Nom de la base de données

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
        });

        // Générer un token JWT
        const token = jwt.sign(
            { userId: result.insertedId, email },
            "secret_key", // Remplace par une clé sécurisée dans les variables d'environnement
            { expiresIn: "1h" }
        );

        // Retourner la réponse avec le token et l'ID utilisateur
        res.status(201).json({
            message: 'Utilisateur enregistré avec succès',
            userId: result.insertedId,
            token,
        });
    } catch (err) {
        console.error("Erreur lors de l'inscription :", err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
