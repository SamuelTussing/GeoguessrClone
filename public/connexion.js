const form = document.getElementById('signupForm');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorDiv = document.getElementById('signup-error');
        const audioPlayer = document.getElementById('audioPlayer');

        if (!username || !email || !password) {
            errorDiv.textContent = "Tous les champs sont requis.";
            errorDiv.style.display = 'block';
            audioPlayer.play();
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Erreur lors de l'inscription");
            }

            const result = await response.json();

            localStorage.setItem('userId', result.userId);
            localStorage.setItem('authToken', result.token);
            localStorage.setItem('username', result.username);

            window.location.href = 'home.html';
        } catch (error) {
            errorDiv.textContent = error.message;
            errorDiv.style.display = 'block';
        }
    });
}
