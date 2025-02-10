app.get("/api/getActiveBadge", async (req, res) => {
    const { userId } = req.query;

    try {
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ activeBadge: user.activeBadge });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});
