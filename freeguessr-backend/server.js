const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const saltRounds = 10;
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à MongoDB Atlas
const uri = 'mongodb+srv://samueltussiing_db_user:zE6Igl74a71ioJ4f@cluster0.u6lrhiw.mongodb.net/?appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Error connecting to MongoDB Atlas:', error));

// Schéma et modèle Mongoose
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    score: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

// Routes

// Enregistrement d'un utilisateur
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
    }
});

// Connexion d'un utilisateur
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }

        res.status(200).json({ message: 'Connexion réussie', user });
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la connexion', error });
    }
});

// Enregistrement des scores
app.post('/submit-score', async (req, res) => {
    const { userId, score } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }

        user.score = score;
        await user.save();
        res.status(200).json({ message: 'Score enregistré avec succès', user });
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de l\'enregistrement du score', error });
    }
});

// Récupération des meilleurs scores
app.get('/highscores', async (req, res) => {
    try {
        const highScores = await User.find().sort({ score: -1 }).limit(5);
        res.status(200).json(highScores);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la récupération des meilleurs scores', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
