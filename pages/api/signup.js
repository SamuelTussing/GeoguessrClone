import bcrypt from 'bcryptjs';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Utilisation du répertoire temporaire de Vercel pour stocker le fichier users.json
const USERS_FILE = path.join('/tmp', 'users.json');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    // Validation des champs
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email invalide' });
    }
    if (password.length < 8) {
        return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 8 caractères.' });
    }

    try {
        // Charger les utilisateurs existants
        let users = [];
        try {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        } catch (err) {
            if (err.code !== 'ENOENT') {  // Si le fichier n'existe pas encore
                console.error("Erreur lors de la lecture du fichier:", err);
                throw err;
            }
            console.log("Fichier users.json non trouvé, initialisation d'une liste vide.");
        }

        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ error: 'Échec de l\'enregistrement, veuillez réessayer.' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Ajouter l'utilisateur au tableau
        users.push({ id: uuidv4(), username, email, password: hashedPassword });

        // Sauvegarder dans le fichier temporaire
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
        console.log("Nouvel utilisateur enregistré");

        return res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (err) {
        console.error('Erreur interne du serveur:', err);
        return res.status(500).json({ error: 'Erreur interne du serveur', details: err.message });
    }
}
