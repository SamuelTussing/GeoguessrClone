document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log("Formulaire intercepté !");

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorDiv = document.getElementById('login-error');

    // Validation des champs
    if (!email || !password) {
        errorDiv.textContent = "Tous les champs sont requis.";
        errorDiv.style.display = 'block';
        return;
    }

    try {
        // Envoyer une requête POST à l'API login
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erreur lors de la connexion');
        }

        const result = await response.json();
        console.log('Connexion réussie:', result);

        // Stocker le token dans sessionStorage ou localStorage
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('username', result.username);

        // Rediriger vers home.html
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        errorDiv.textContent = error.message || "Une erreur est survenue.";
        errorDiv.style.display = 'block';
    }
});
