const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(process.cwd(), 'users.json');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
        let users = [];
        if (await fs.access(USERS_FILE).then(() => true).catch(() => false)) {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        }

        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, email, password: hashedPassword });

        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
        res.status(201).json({ message: 'Inscription réussie' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
