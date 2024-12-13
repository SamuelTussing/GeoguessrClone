import bcrypt from 'bcryptjs';
import fs from 'fs/promises';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'users.json'); // Fichier JSON

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        console.log("Méthode HTTP non autorisée");
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        console.log("Champs manquants:", { username, email, password });
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    try {
        console.log("Données reçues pour inscription:", { username, email, password });

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Mot de passe haché:", hashedPassword);

        // Charger les utilisateurs existants
        let users = [];
        try {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
            console.log("Utilisateurs existants chargés:", users);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error("Erreur lors de la lecture du fichier:", err);
                return res.status(500).json({ error: 'Erreur lors de la lecture du fichier des utilisateurs' });
            }
            console.log("Fichier users.json non trouvé, initialisation d'une liste vide.");
        }

        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.email === email)) {
            console.log("Email déjà utilisé:", email);
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        // Ajouter le nouvel utilisateur
        users.push({ username, email, password: hashedPassword });
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
        console.log("Nouvel utilisateur enregistré avec succès:", { username, email });

        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (err) {
        console.error("Erreur interne du serveur:", err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
