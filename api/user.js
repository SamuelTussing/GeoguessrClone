import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";

// 🔐 Middleware auth simple (adaptable JWT)
function authMiddleware(req, res) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Token manquant" });
        return false;
    }

    if (token !== "votre_token_securise") {
        res.status(403).json({ message: "Token invalide" });
        return false;
    }

    return true;
}

export default async function handler(req, res) {
    // 🔐 Auth
    if (!authMiddleware(req, res)) return;

    try {
        const client = await clientPromise;
        const db = client.db("geoguessr_clone");

        /* ===========================
           🔹 GET REQUESTS
        ============================ */
        if (req.method === "GET") {
            const { userId, action } = req.query;

            if (!userId) {
                return res.status(400).json({ message: "ID utilisateur requis" });
            }

            if (!ObjectId.isValid(userId)) {
                return res.status(400).json({ message: "ID utilisateur invalide" });
            }

            const user = await db.collection("users").findOne(
                { _id: new ObjectId(userId) },
                { projection: { password: 0 } }
            );

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            switch (action) {
                case "info":
                    return res.status(200).json(user);

                case "badges":
                    return res.status(200).json({
                        badges: user.badges || {},
                        experience: user.experience || 0,
                        level: user.level || 1,
                        username: user.username || "Imposteur",
                        campagneLevel: user.campagneLevel || 1
                    });

                case "activeBadge":
                    return res.status(200).json({
                        activeBadge: user.activeBadge || null
                    });

                default:
                    return res.status(400).json({
                        message: "Action invalide",
                        actionsDisponibles: ["info", "badges", "activeBadge"]
                    });
            }
        }

        /* ===========================
           🔹 POST REQUESTS
        ============================ */
        if (req.method === "POST") {
            const { action, userId, newLevel, activeBadge } = req.body;

            if (!userId || !ObjectId.isValid(userId)) {
                return res.status(400).json({ message: "ID utilisateur invalide" });
            }

            // 🔼 Augmenter le niveau de campagne
            if (action === "increaseCampagneLevel") {
                if (!newLevel) {
                    return res.status(400).json({ message: "Nouveau niveau manquant" });
                }

                await db.collection("users").updateOne(
                    { _id: new ObjectId(userId) },
                    { $set: { campagneLevel: newLevel } }
                );

                return res.status(200).json({
                    message: "Niveau campagne mis à jour",
                    campagneLevel: newLevel
                });
            }

            // 🏅 Définir le badge actif
            if (action === "setActiveBadge") {
                if (!activeBadge) {
                    return res.status(400).json({ message: "Badge manquant" });
                }

                await db.collection("users").updateOne(
                    { _id: new ObjectId(userId) },
                    { $set: { activeBadge: activeBadge } }
                );

                return res.status(200).json({
                    message: "Badge actif mis à jour",
                    activeBadge
                });
            }

            return res.status(400).json({
                message: "Action POST invalide",
                actionsDisponibles: ["increaseCampagneLevel", "setActiveBadge"]
            });
        }

        /* ===========================
           🔹 MÉTHODE NON AUTORISÉE
        ============================ */
        return res.status(405).json({ message: "Méthode non autorisée" });

    } catch (error) {
        console.error("Erreur API user :", error);
        return res.status(500).json({
            message: "Erreur serveur",
            error: error.toString()
        });
    }
}
