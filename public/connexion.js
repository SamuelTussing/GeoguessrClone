document.getElementById('signup-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const errorDiv = document.getElementById('signup-error');

    if (!username || !email || !password) {
        errorDiv.textContent = "Tous les champs sont requis.";
        errorDiv.style.display = 'block';
        return;
    }

    try {
        const response = await fetch('https://geoguessr-clone-five.vercel.app/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData),
        });
    
        if (!response.ok) {
            const errorText = await response.text(); // Lire le texte brut en cas d'erreur
            throw new Error(errorText || 'Erreur lors de l\'inscription');
        }
    
        const result = await response.json();
        console.log('Inscription réussie:', result);
        window.location.href = 'home.html';
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
        errorDiv.textContent = error.message || "Une erreur est survenue lors de l'inscription.";
        errorDiv.style.display = 'block';
    }
    
});
