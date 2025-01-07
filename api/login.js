import fs from 'fs/promises';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';

const USERS_FILE = path.join('/tmp', 'users.json');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe sont requis' });
    }

    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        const users = JSON.parse(data);

        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Mot de passe incorrect' });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.json({ message: 'Connexion réussie', user: { email: user.email, username: user.username }, token });
    } catch (err) {
        console.error('Erreur lors de la connexion:', err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
