const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');


const USERS_FILE = path.join(process.cwd(), 'users.json');

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

        res.json({ message: 'Connexion réussie', user: { email: user.email, username: user.username } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}