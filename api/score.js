import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { username, email, score } = req.body;

    if (!username || !email || typeof score !== 'number') {
        return res.status(400).json({ error: 'Champs manquants ou invalides' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        // Ajouter le nouveau score à la collection
        await db.collection('scores').insertOne({
            username,
            email,
            score,
            date: new Date() // Ajouter la date actuelle pour le tri
        });

        // Récupérer le top 5 des meilleurs scores
        const topScores = await db.collection('scores')
            .find()
            .sort({ score: -1, date: 1 }) // Trier par score décroissant et date croissante (en cas d'égalité)
            .limit(5)
            .toArray();

        // Supprimer les scores en dehors du top 5
        const topScoreIds = topScores.map(score => score._id); // Conserver uniquement les IDs du top 5
        await db.collection('scores').deleteMany({
            _id: { $nin: topScoreIds }
        });

        res.status(200).json({ message: 'Score enregistré avec succès', topScores });
    } catch (err) {
        console.error("Erreur lors de l'enregistrement du score :", err);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}
