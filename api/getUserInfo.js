const express = require("express");
const router = express.Router();
const User = require("./models/User"); // Modèle utilisateur dans MongoDB
const jwt = require("jsonwebtoken");

// Middleware d'authentification
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Accès non autorisé." });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token invalide." });
        req.user = user;
        next();
    });
}

// Route pour récupérer les informations utilisateur
router.get("/api/getUserInfo/:userId", authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select("-password"); // Exclure le mot de passe
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }
        res.json(user);
    } catch (error) {
        console.error("Erreur lors de la récupération des informations utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
});

module.exports = router;
