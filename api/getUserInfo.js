const express = require("express");
const router = express.Router();
const User = require("./models/User"); // Modèle utilisateur

// Route pour récupérer les informations utilisateur
router.get("/api/getUserInfo/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        // Vérifiez que l'ID est un ObjectId valide
        if (!userId || userId.length !== 24) {
            return res.status(400).json({ message: "ID utilisateur invalide." });
        }
        console.log(userId)

        // Recherchez l'utilisateur dans la base de données
        const user = await User.findById(userId).select("-password"); // Exclut le mot de passe
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.json(user);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
});

module.exports = router;
