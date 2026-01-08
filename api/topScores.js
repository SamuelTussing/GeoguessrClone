import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db("geoguessr_clone");

            // Liste des localisations à récupérer
            const locations = [
                "world", "Strasbourg", "France", "europe", "north-america",
                "famous", "Capitales","Australie"
            ];

            let topScoresByLocation = {};

            for (const location of locations) {
                const scores = await db
                    .collection("scores")
                    .find({ location: location }) // Filtrer par localisation
                    .sort({ score: -1 }) // Trier par score décroissant
                    .limit(5) // Limiter à 5 résultats seulement
                    .toArray();

                topScoresByLocation[location] = scores; // Stocker dans l'objet
            }

            res.status(200).json(topScoresByLocation);
        } catch (error) {
            console.error("Erreur lors de la récupération des scores :", error);
            res.status(500).json({ message: "Erreur serveur", error });
        }
    } else {
        res.status(405).json({ message: "Méthode non autorisée" });
    }
}
