import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb"; // Importer ObjectId pour convertir userId en ObjectId

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId, score, username } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Convertir userId en ObjectId
            const objectId = new ObjectId(userId);

            // Mettre à jour le champ `lastscore` et ajouter le score à l'historique
            await db.collection("users").updateOne(
                { _id: objectId },
                {
                    $set: { lastscore: score }, // Mettre à jour le dernier score
                    $push: { scores: score }, // Ajouter le score à l'historique
                }
            );

            // Récupérer le top 10 des scores actuels dans la collection `scores`
            const scoresCollection = db.collection("scores");
            const topScores = await scoresCollection
                .find({})
                .sort({ score: -1 }) // Tri par score décroissant
                .limit(10)
                .toArray();

            // Vérifier si le score actuel peut entrer dans le top 10
            if (
                topScores.length < 10 || // Moins de 10 scores dans le classement
                score > topScores[topScores.length - 1].score // Score actuel supérieur au plus bas du top 10
            ) {
                // Ajouter le nouveau score dans la collection `scores`
                await scoresCollection.insertOne({
                    userId: objectId,
                    username: username || "Anonyme", // Utiliser "Anonyme" si le username est absent
                    score,
                    createdAt: new Date(),
                });

                // Nettoyer les scores hors top 10 (si nécessaire)
                const updatedTopScores = await scoresCollection
                    .find({})
                    .sort({ score: -1 })
                    .limit(10)
                    .toArray();

                const lowestTopScore = updatedTopScores[updatedTopScores.length - 1].score;

                // Supprimer les scores inférieurs au plus bas du top 10
                await scoresCollection.deleteMany({ score: { $lt: lowestTopScore } });
            }

            // Réponse réussie
            res.status(200).json({ message: "Score mis à jour avec succès" });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du score :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
