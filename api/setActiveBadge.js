app.post("/api/setActiveBadge", async (req, res) => {
    const { userId, activeBadge } = req.body;

    try {
        await User.updateOne({ _id: userId }, { $set: { activeBadge } });

        res.json({ message: "Badge mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});
