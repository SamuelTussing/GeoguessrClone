import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        // Rechercher l'utilisateur dans la base de données
        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        // Vérifier le mot de passe
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Mot de passe incorrect' });
        }

        // Générer un token JWT
        const token = jwt.sign(
            { email: user.email, username: user.username },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Connexion réussie', token });
    } catch (err) {
        console.error("Erreur lors de la connexion :", err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
