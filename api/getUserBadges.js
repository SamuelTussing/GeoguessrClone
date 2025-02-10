const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Modèle Mongoose

router.get("/getUserBadges", async (req, res) => {
    try {
        const userId = req.user._id; // Assure-toi que l'utilisateur est authentifié
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "Utilisateur non trouvé" });
        }

        res.json({ badges: user.badges });
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

module.exports = router;
