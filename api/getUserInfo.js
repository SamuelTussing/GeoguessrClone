const express = require("express");
const mongoose = require("mongoose"); // Nécessaire pour valider l'ObjectId
const router = express.Router();
const User = require("./models/User"); // Modèle utilisateur

// Route pour récupérer les informations utilisateur
router.get("/api/getUserInfo/:userId", async (req, res) => {
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
