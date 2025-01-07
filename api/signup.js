import fs from 'fs/promises';
import bcrypt from 'bcryptjs'; // Remplacez bcrypt par bcryptjs
import path from 'path';

const USERS_FILE = path.join('/tmp', 'users.json'); // Utilisez /tmp pour le stockage temporaire sur Vercel

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        // Charger les utilisateurs existants
        let users = [];
        try {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error("Erreur lors de la lecture du fichier:", err);
                throw err;
            }
            console.log("Fichier users.json non trouvé, initialisation d'une liste vide.");
        }

        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Ajouter l'utilisateur au tableau
        users.push({ username, email, password: hashedPassword });

        // Sauvegarder dans le fichier temporaire
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));


        res.status(201).json({ message: 'Utilisateur enregistré avec succès'});
    } catch (err) {
        console.error('Erreur lors de l\'inscription:', err);
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
}
