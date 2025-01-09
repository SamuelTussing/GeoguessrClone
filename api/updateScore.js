import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, score } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("gameApp");

      // Mettre à jour l'utilisateur avec le nouveau score
      const result = await db.collection("users").updateOne(
        { _id: userId }, // Filtrer par _id
        { $set: { lastScore: score }, $push: { scores: score } } // Mettre à jour le score
      );

      res.status(200).json({ message: "Score mis à jour avec succès", result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du score", error });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
