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

        // Envoi de la requête POST pour l'inscription
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Erreur lors de l\'inscription');
        }

        // Inscription réussie
        const result = await response.json();
        console.log('Inscription réussie:', result);

        // Rediriger vers la page de connexion après inscription
        window.location.href = 'home.html'; // Redirection vers login.html après inscription réussie

    } catch (error) {
        console.error(error);
        errorDiv.textContent = error.message || "Une erreur est survenue lors de l'inscription.";
        errorDiv.style.display = 'block';
    }
});