router.get("/api/topScores", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const scoresCollection = db.collection("scores");

        // Récupérer les 10 meilleurs scores
        const topScores = await scoresCollection
            .find({})
            .sort({ score: -1 })
            .limit(10)
            .toArray();

        res.status(200).json(topScores);
    } catch (error) {
        console.error("Erreur lors de la récupération des scores :", error);
        res.status(500).json({ message: "Erreur serveur." });
    }
});

module.exports = router;
