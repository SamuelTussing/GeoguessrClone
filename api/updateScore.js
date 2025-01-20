import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId, score } = req.body;

        if (!userId || typeof score !== "number") {
            return res.status(400).json({ message: "Données invalides : userId ou score manquant ou mal formaté" });
        }

        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Vérifier si le userId est un ObjectId valide
            if (!ObjectId.isValid(userId)) {
                return res.status(400).json({ message: "userId invalide" });
            }

            const objectId = new ObjectId(userId);

            // Récupérer l'utilisateur actuel
            const user = await db.collection("users").findOne({ _id: objectId });
            if (!user) {
                console.error("Utilisateur introuvable :", userId);
                return res.status(404).json({ message: "Utilisateur introuvable" });
            }

            // Calculer les nouveaux niveaux et expérience
            const oldLevel = user.level || 1; // Niveau par défaut si non défini
            const newExperience = (user.experience || 0) + score; // Expérience par défaut si non définie
            const newLevel = Math.floor(newExperience / 50000) + 1;

            // Mettre à jour l'utilisateur dans la collection `users`
            await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: {
                        experience: newExperience,
                        level: newLevel,
                        lastscore: score,
                    },
                    $push: { scores: score }, // Ajout du score dans la liste des scores
                }
            );

            // Vérifier si le score fait partie des 10 meilleurs scores
            const topScores = await db.collection("scores")
                .find({})
                .sort({ score: -1 }) // Tri par score décroissant
                .limit(10)
                .toArray();

            const lowestTopScore = topScores[topScores.length - 1]?.score || 0;

            if (topScores.length < 10 || score > lowestTopScore) {
                const existingScore = await db.collection("scores").findOne({ userId });

                if (existingScore) {
                    // Mettre à jour si le nouveau score est supérieur
                    if (existingScore.score < score) {
                        await db.collection("scores").updateOne(
                            { userId },
                            { $set: { score, username: user.username } }
                        );
                    }
                } else {
                    // Ajouter un nouveau score si l'utilisateur n'en a pas
                    await db.collection("scores").insertOne({
                        userId,
                        username: user.username,
                        score,
                    });
                }

                // Supprimer les scores en trop si on dépasse 10 scores
                const updatedTopScores = await db.collection("scores")
                    .find({})
                    .sort({ score: -1 })
                    .limit(10)
                    .toArray();

                const scoreIdsToKeep = updatedTopScores.map((s) => s._id);
                await db.collection("scores").deleteMany({
                    _id: { $nin: scoreIdsToKeep },
                });
            }

            return res.status(200).json({
                message: "Score mis à jour avec succès",
                oldLevel,
                newLevel,
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            return res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    } else {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }
}
