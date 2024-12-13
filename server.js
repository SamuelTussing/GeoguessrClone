const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
// Définir le port (par exemple 3000 ou depuis une variable d'environnement)
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const USERS_FILE = path.join(__dirname, 'users.json');
const HIGHSCORES_FILE = path.join(__dirname, 'highscores.json');


// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API pour obtenir la clé Google Maps
app.get('/api/google-maps-key', (req, res) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'La clé API est manquante.' });
  }

  res.status(200).json({ key: apiKey });
});





// Route POST pour l'inscription
const bcrypt = require('bcrypt');

// Route pour l'inscription
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        let users = [];

        if (await fs.access(USERS_FILE).then(() => true).catch(() => false)) {
            const data = await fs.readFile(USERS_FILE, 'utf8');
            users = JSON.parse(data);
        }

        if (users.find(user => user.email === email)) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }

        users.push({ username, email, password: hashedPassword });
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));

        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    }
});

// Route pour la connexion
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe sont requis' });
    }

    let users = [];
    try {
        // Vérifiez si le fichier existe
        await fs.access(USERS_FILE);
        // Lire le fichier JSON
        const data = await fs.readFile(USERS_FILE, 'utf8');
        users = JSON.parse(data); // Charger les utilisateurs
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Fichier utilisateur introuvable.');
            return res.status(404).json({ error: 'Aucun utilisateur enregistré.' });
        }
        console.error('Erreur lors de la lecture des utilisateurs:', err);
        return res.status(500).json({ error: 'Erreur interne du serveur' });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ error: 'Utilisateur non trouvé' });
    }

    if (user.password !== password) {
        return res.status(400).json({ error: 'Mot de passe incorrect' });
    }

    res.json({ message: 'Connexion réussie', user: { email: user.email, username: user.username } });
});



// Chemin du fichier JSON
const highScoresFilePath = path.join(__dirname, 'highscores.json');

// Fonction pour lire les scores depuis le fichier JSON
const readHighScores = async () => {
    try {
        const data = await fs.readFile(highScoresFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return [];
    }
};

// Fonction pour sauvegarder les scores dans le fichier JSON
const saveHighScores = async (highScores) => {
    try {
        await fs.writeFile(highScoresFilePath, JSON.stringify(highScores, null, 2));
    } catch (err) {
        console.error('Erreur lors de l\'écriture du fichier:', err);
    }
};

// Route pour sauvegarder un score
app.post('/save-score', (req, res) => {
    const { name, score, locationType } = req.body;

    // Lire les scores actuels
    let highScores = readHighScores();

    // Ajouter le nouveau score
    highScores.push({ name, score, locationType });

    // Trier les scores (du plus élevé au plus bas)
    highScores.sort((a, b) => b.score - a.score);

    // Ne conserver que les 5 meilleurs scores
    if (highScores.length > 5) {
        highScores = highScores.slice(0, 5);
    }

    // Sauvegarder les scores dans le fichier
    saveHighScores(highScores);

    // Répondre avec les scores mis à jour
    res.json({ highScores });
});

// Route pour récupérer les scores
app.get('/high-scores', (req, res) => {
    const highScores = readHighScores(); // Lire les scores depuis le fichier
    res.json(highScores);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});