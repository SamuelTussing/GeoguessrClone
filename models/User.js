const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Peut être hashé
    score: { type: Number, default: 0 }, // Champ pour stocker le score
}, { timestamps: true }); // Ajoute automatiquement les champs createdAt et updatedAt

const User = mongoose.model("User", userSchema);

module.exports = User;
