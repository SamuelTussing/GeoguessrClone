import jwt from "jsonwebtoken";

export const authenticate = (handler) => async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Accès non autorisé. Aucun token fourni." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret_key");
    req.user = decoded; // Ajouter les données du token à la requête
    return handler(req, res); // Passer au handler de la route
  } catch (error) {
    console.error("Erreur lors de la validation du token :", error);
    return res.status(401).json({ message: "Token invalide." });
  }
};
