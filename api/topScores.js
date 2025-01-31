import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Récupération des scores groupés par localisation
            const pipeline = [
                { $sort: { score: -1 } }, // Trie par score décroissant
                {
                    $group: {
                        _id: "$location",
                        topScores: { $push: { username: "$username", score: "$score" } }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        topScores: { $slice: ["$topScores", 5] } // Prend les 5 meilleurs par localisation
                    }
                }
            ];

            const scoresByLocation = await db.collection("scores").aggregate(pipeline).toArray();

            res.status(200).json(scoresByLocation);
        } catch (error) {
            console.error("Erreur lors de la récupération des scores :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}