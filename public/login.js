document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const email = document.getElementById('login-email').value.trim(); // Récupérer l'email
            const password = document.getElementById('login-password').value.trim(); // Récupérer le mot de passe
            const errorDiv = document.getElementById('login-error'); // Div pour afficher les erreurs

            // Validation des champs
            if (!email || !password) {
                errorDiv.textContent = "Veuillez remplir tous les champs.";
                errorDiv.style.display = 'block';
                return;
            }

            try {
                // Données à envoyer au serveur pour la connexion
                const loginData = { email, password };

                // Envoi de la requête POST pour la connexion
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(loginData),
                });

                // Vérifiez le type de réponse
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const result = await response.json();

                    if (!response.ok) {
                        // Si la réponse n'est pas OK, afficher l'erreur
                        throw new Error(result.error || "Erreur lors de la connexion");
                    }

                    // Connexion réussie
                    console.log('Connexion réussie:', result);
                    
                    // Récupérer le nom du joueur (username)
                    const playerName = result.username;

                    // Stocker le nom du joueur dans une variable globale ou session
                    // Par exemple, vous pouvez stocker ce nom dans le localStorage
                    localStorage.setItem('playerName', playerName);                    

                    // Rediriger vers home.html
                    window.location.href = 'home.html';
                } else {
                    // Si la réponse n'est pas au format JSON, loguer l'erreur
                    throw new Error("Réponse invalide du serveur. Attendu JSON, reçu HTML.");
                }

            } catch (error) {
                console.error(error);
                errorDiv.textContent = error.message || "Une erreur est survenue lors de la connexion.";
                errorDiv.style.display = 'block';
            }
        });
    } else {
        console.error('Formulaire de connexion non trouvé');
    }
});
