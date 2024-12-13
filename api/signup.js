import bcrypt from 'bcrypt';
import fs from 'fs/promises';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'public', 'users.json'); // Utilisation du dossier public pour Vercel

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Charger les utilisateurs existants
        let users = [];
        try {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        } catch (err) {
            // Si le fichier n'existe pas, initialisez une liste vide
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        // Vérifier si l'email est déjà utilisé
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        // Ajouter le nouvel utilisateur
        users.push({ username, email, password: hashedPassword });

        // Sauvegarder les utilisateurs
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));

        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
