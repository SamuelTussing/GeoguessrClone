const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');  // Ajout de jsonwebtoken

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const USERS_FILE = path.join(__dirname, 'users.json');
const HIGHSCORES_FILE = path.join(__dirname, 'highscores.json');

// Route POST pour l'inscription
app.post('/connexion', async (req, res) => {
    const { username, email, password } = req.body;

    // Validation des champs
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        let users = [];

        // Vérifiez si le fichier existe et chargez les utilisateurs
        if (await fs.access(USERS_FILE).then(() => true).catch(() => false)) {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        }

        // Vérifiez si l'utilisateur existe déjà
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        // Ajouter le nouvel utilisateur
        users.push({ username, email, password: hashedPassword });
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));

        // Générer un token
        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });  // Ajoutez un secret dans le fichier .env

        res.status(201).json({ message: 'Utilisateur enregistré avec succès', token });
    } catch (err) {
        console.error('Erreur lors de l\'inscription:', err);
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
});

// Route POST pour la connexion
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validation des champs
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe sont requis' });
    }

    try {
        // Charger les utilisateurs depuis le fichier
        const data = await fs.readFile(USERS_FILE, 'utf8');
        const users = JSON.parse(data);

        // Trouver l'utilisateur correspondant à l'email
        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        // Vérifiez le mot de passe haché
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Mot de passe incorrect' });
        }

        // Générer un token
        const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        res.json({ message: 'Connexion réussie', user: { email: user.email, username: user.username }, token });
    } catch (err) {
        console.error('Erreur lors de la connexion:', err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
