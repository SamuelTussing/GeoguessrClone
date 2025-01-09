import clientPromise from "../lib/mongodb";
import { authenticate } from "../lib/middleware/authMiddleware";

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { userId, score } = req.body;
  
      try {
        const client = await clientPromise;
        const db = client.db("gameApp");
  
        // Mettre à jour le document : ajouter les champs `lastScore` et `scores` s'ils n'existent pas
        const result = await db.collection("users").updateOne(
          { _id: userId }, // Filtrer par _id
          {
            $set: { lastScore: score }, // Mettre à jour le dernier score
            $push: { scores: score },  // Ajouter le score à l'historique
          },
          { upsert: true } // Crée le document s'il n'existe pas
        );
  
        // Réponse réussie
        res.status(200).json({ message: "Score mis à jour avec succès", result });
      } catch (error) {
        console.error("Erreur lors de la mise à jour du score :", error);
        res.status(500).json({ message: "Erreur serveur", error });
      }
    } else {
      res.status(405).json({ message: "Méthode non autorisée" });
    }
  }
