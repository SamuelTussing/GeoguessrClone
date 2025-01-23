import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Récupérer le top 10 des scores
            const scores = await db
                .collection("scores")
                .find({})
                .sort({ score: -1 }) // Tri par score décroissant
                .limit(10)
                .toArray();

            res.status(200).json(scores);
        } catch (error) {
            console.error("Erreur lors de la récupération des scores :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
console.log("Connexion à MongoDB...");
console.log("Base de données : geoguessr_clone");
console.log("Collection : scores");