document.getElementById('signup-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('signup-username').value.trim(); // Récupérer le nom d'utilisateur
    const email = document.getElementById('signup-email').value.trim(); // Récupérer l'email
    const password = document.getElementById('signup-password').value.trim(); // Récupérer le mot de passe
    const errorDiv = document.getElementById('signup-error'); // Div pour afficher les erreurs

    // Validation des champs
    if (!username || !email || !password) {
        errorDiv.textContent = "Tous les champs sont requis.";
        errorDiv.style.display = 'block';
        return;
    }

    try {
        // Données à envoyer au serveur pour l'inscription
        const signupData = { username, email, password };

        console.log('Données pour l\'inscription:', signupData);

        // URL pour la production sur Vercel
        const response = await fetch('http://localhost:3000/connexion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData), // signupData est utilisé ici
        });

        if (!response.ok) {
            const errorText = await response.text(); // Lire le texte brut de la réponse en cas d'erreur
            console.error("Erreur côté serveur:", errorText);
            throw new Error(errorText || 'Erreur lors de l\'inscription');
        }

        // Inscription réussie
        const result = await response.json();
        console.log('Inscription réussie:', result);

        // Rediriger vers une autre page après succès
        window.location.href = 'home.html';
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        errorDiv.textContent = error.message || "Une erreur est survenue lors de l'inscription.";
        errorDiv.style.display = 'block';
    }
});
