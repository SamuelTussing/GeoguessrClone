import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId, score } = req.body;

        if (!userId || typeof score !== "number") {
            return res.status(400).json({ message: "Données manquantes ou invalides" });
        }

        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Récupérer l'utilisateur actuel dans la collection `users`
            const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
            if (!user) {
                return res.status(404).json({ message: "Utilisateur introuvable" });
            }

            // Calculer les nouveaux niveaux et expérience
            const oldLevel = user.level || 1;
            const newExperience = (user.experience || 0) + score;
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour l'utilisateur dans la collection `users`
            await db.collection("users").updateOne(
                { _id: new ObjectId(userId) },
                {
                    $set: {
                        experience: newExperience,
                        level: newLevel,
                        lastscore: score,
                    },
                    $push: { scores: score },
                }
            );

            // Gestion des scores dans la collection `scores`
            const existingScore = await db.collection("scores").findOne({ userId: userId });

            if (existingScore) {
                // Mettre à jour le score uniquement s'il est supérieur au précédent
                if (existingScore.score < score) {
                    await db.collection("scores").updateOne(
                        { userId: userId },
                        { $set: { score, username: user.username } }
                    );
                }
            } else {
                // Ajouter un nouveau score si l'utilisateur n'en a pas encore
                await db.collection("scores").insertOne({
                    userId: userId,
                    username: user.username,
                    score,
                });
            }

            // Récupérer les 10 meilleurs scores triés par ordre décroissant
            const topScores = await db.collection("scores")
                .find({})
                .sort({ score: -1 })
                .limit(10)
                .toArray();

            // Supprimer les scores excédentaires si la liste dépasse 10
            const scoreIdsToKeep = topScores.map((s) => s._id);
            await db.collection("scores").deleteMany({
                _id: { $nin: scoreIdsToKeep },
            });

            // Réponse réussie
            res.status(200).json({
                message: "Score mis à jour avec succès",
                oldLevel,
                newLevel,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}