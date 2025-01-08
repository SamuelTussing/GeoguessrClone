import clientPromise from '../lib/mondodb';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        // Récupérer le top 5 des meilleurs scores
        const topScores = await db.collection('scores')
            .find()
            .sort({ score: -1, date: 1 }) // Trier par score décroissant, puis date croissante
            .limit(5)
            .toArray();

        res.status(200).json(topScores);
    } catch (err) {
        console.error("Erreur lors de la récupération des scores :", err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
