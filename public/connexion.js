document.getElementById('signupForm').addEventListener('submit', async function (e) { 
    e.preventDefault(); // Empêche le comportement par défaut (rechargement de la page)

    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const errorDiv = document.getElementById('signup-error');
    const audioPlayer = document.getElementById('audioPlayer');

    // Validation des champs
    if (!username || !email || !password) {
        errorDiv.textContent = "Tous les champs sont requis.";
        errorDiv.style.display = 'block';
        audioPlayer.play(); // Joue le son
        return;
    }

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });

        // Vérifie si la réponse est OK
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erreur API reçue :", errorData);
            throw new Error(errorData.error || 'Erreur lors de l\'inscription');
        }

        const result = await response.json();
        console.log('Inscription réussie:', result);

        // Stocker les informations utilisateur dans le localStorage
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('username', result.username);

        // Rediriger vers la page d'accueil
        window.location.href = 'home.html';
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        errorDiv.textContent = error.message || "Une erreur est survenue.";
        errorDiv.style.display = 'block';
    }
});
