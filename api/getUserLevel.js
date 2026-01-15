const express = require("express");
import clientPromise from "../lib/mongodb";
const mongoose = require("mongoose");
const router = express.Router();
const User = require("./models/User");

// Middleware d'authentification (identique à getUserInfo)
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token d'authentification manquant." });
    }

    // À remplacer par ta vraie logique JWT
    if (token !== "votre_token_securise") {
        return res.status(403).json({ message: "Token invalide." });
    }

    next();
}

// 📌 Route pour récupérer le niveau de campagne
router.get("/api/getUserLevel/:userId", authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;

        // Validation de l'ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "ID utilisateur invalide." });
        }

        // Récupération UNIQUEMENT du niveau campagne
        const user = await User.findById(userId).select("campagneLevel level experience");

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.json({
            campagneLevel: user.campagneLevel
        });
    } catch (error) {
        console.error("Erreur lors de la récupération du niveau campagne :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
});

module.exports = router;
