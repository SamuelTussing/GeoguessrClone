const express = require("express");
const router = express.Router();
const User = require("./models/User"); // Remplace par ton modèle d'utilisateur

// Route pour récupérer le top 10 des scores
router.get("/api/topScores", async (req, res) => {
    try {
        const topScores = await User.find({})
            .sort({ score: -1 }) // Tri décroissant par score
            .limit(10) // Limiter à 10 résultats
            .select("username score"); // Sélectionner uniquement les champs nécessaires

        res.status(200).json(topScores);
    } catch (error) {
        console.error("Erreur lors de la récupération des scores :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;
