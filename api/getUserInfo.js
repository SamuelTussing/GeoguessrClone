const express = require("express");
import clientPromise from "../lib/mongodb";
const mongoose = require("mongoose"); // Nécessaire pour valider l'ObjectId
const router = express.Router();
const User = require("./models/User"); // Modèle utilisateur

// Middleware pour valider le token d'authentification (exemple simplifié)
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Récupérer le token
    if (!token) {
        return res.status(401).json({ message: "Token d'authentification manquant." });
    }

    // Exemple : validation du token (vous devez remplacer ceci par votre propre logique)
    if (token !== "votre_token_securise") {
        return res.status(403).json({ message: "Token invalide." });
    }

    next(); // Passer au middleware suivant
}

// Route pour récupérer les informations utilisateur
router.get("/api/getUserInfo/:userId", authMiddleware, async (req, res) => {
    try {
        const userId = req.params.userId;

        // Validation de l'ID utilisateur
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "ID utilisateur invalide." });
        }

        // Rechercher l'utilisateur dans la base de données
        const user = await User.findById(userId).select("-password"); // Exclure le mot de passe
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        // Renvoyer les informations utilisateur
        res.json(user);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
});

module.exports = router;
