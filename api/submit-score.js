import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, score } = req.body;

    if (!username || typeof score !== 'number') {
        return res.status(400).json({ error: 'Champs manquants ou invalides' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        // Ajouter le score dans la base de données
        const scoresCollection = db.collection('scores');

        // Récupérer le top 5 des scores actuels
        const currentTopScores = await scoresCollection
            .find()
            .sort({ score: -1, date: 1 }) // Trier par score décroissant, puis date croissante
            .limit(5)
            .toArray();

        // Vérifier si le nouveau score est suffisamment élevé pour entrer dans le top 5
        if (currentTopScores.length < 5 || score > currentTopScores[currentTopScores.length - 1].score) {
            // Ajouter le nouveau score
            const newScore = {
                username,
                score,
                date: new Date() // Stocker la date du score
            }; 

            await scoresCollection.insertOne(newScore);

            // Supprimer le 6ème score s'il existe
            const allScores = await scoresCollection
                .find()
                .sort({ score: -1, date: 1 }) // Trier par score décroissant, puis date croissante
                .toArray();

            if (allScores.length > 5) {
                const lowestScore = allScores[5]; // Le 6ème score après tri
                await scoresCollection.deleteOne({ _id: lowestScore._id });
            }

            res.status(200).json({ message: 'Score enregistré avec succès', newTopScores: allScores.slice(0, 5) });
        } else {
            res.status(200).json({ message: 'Score trop bas pour entrer dans le top 5' });
        }
    } catch (err) {
        console.error('Erreur lors de l\'enregistrement du score :', err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
