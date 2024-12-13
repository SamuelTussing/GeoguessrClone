const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');
const USERS_FILE = path.join(process.cwd(), 'users.json'); // Fichier JSON stocké à la racine du projet
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Charger les utilisateurs existants
        let users = [];
        if (await fs.access(USERS_FILE).then(() => true).catch(() => false)) {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        }
        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }
        // Ajouter le nouvel utilisateur
        users.push({ username, email, password: hashedPassword });
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
}