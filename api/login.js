import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '../lib/mongodb';
import cors, { runMiddleware } from '../lib/middleware/corsMiddleware';

export default async function handler(req, res) {
    // Appliquer le middleware CORS
    await runMiddleware(req, res, cors);

    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Méthode non autorisée" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Champs email et mot de passe requis" });
    }

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        // Vérifier si l'utilisateur existe
        const user = await db.collection("users").findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        // Vérifier si le mot de passe correspond
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        // Générer un token JWT
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "secret_key", // Remplacez par une variable d'environnement sécurisée
            { expiresIn: "1h" }
        );

        // Retourner la réponse avec les informations utilisateur et le token
        res.status(200).json({
            message: "Connexion réussie",
            userId: user._id,
            username: user.username,
            email: user.email,
            level: user.level,
            experience: user.experience,
            token,
        });
    } catch (error) {
        window.location.href = 'index.html';
        console.error("Erreur lors de l'authentification :", error);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
}
