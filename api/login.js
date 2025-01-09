import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email, password } = req.body;
  
      try {
        const client = await clientPromise;
        const db = client.db("gameApp");
        const user = await db.collection("users").findOne({ email });
  
        if (!user) {
          return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
  
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          return res.status(401).json({ message: "Mot de passe incorrect" });
        }
  
        // Générer un token JWT
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          "secret_key", // Remplace par une clé sécurisée dans les variables d'environnement
          { expiresIn: "1h" }
        );
  
        res.status(200).json({
          userId: user._id,
          username: user.username,
          email: user.email,
          token,
        });
      } catch (error) {
        console.error("Erreur lors de l'authentification :", error);
        res.status(500).json({ message: "Erreur serveur" });
      }
    } else {
      res.status(405).json({ message: "Méthode non autorisée" });
    }
  }
