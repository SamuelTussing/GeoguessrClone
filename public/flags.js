const locationsflag = [
    { pays: 'Afghanistan', drapeau: "./flags/Afghanistan.webp" },
    { pays: 'Brésil', drapeau: "./flags/Bresil.webp" },
    { pays: 'Japon', drapeau: "./flags/Japon.webp" },
    { pays: 'Canada', drapeau: "./flags/Canada.webp" },
    { pays: 'Angleterre', drapeau: "./flags/Angleterre.webp" },
    { pays: 'Angola', drapeau: "./flags/Angola.webp" },
    { pays: 'Arabie-Saoudite', drapeau: "./flags/Arabie-Saoudite.webp" },
    { pays: 'Argentine', drapeau: "./flags/Argentine.webp" },
    { pays: 'Arménie', drapeau: "./flags/Armenie.webp" },
    { pays: 'Australie', drapeau: "./flags/Australie.webp" },
    { pays: 'Azerbaïdjan', drapeau: "./flags/Azerbaidjan.webp" },
    { pays: 'Bahamas', drapeau: "./flags/Bahamas.webp" },
    { pays: 'Bangladesh', drapeau: "./flags/Bangladesh.webp" },
    { pays: 'Bénin', drapeau: "./flags/Benin.webp" },
    { pays: 'Bolivie', drapeau: "./flags/Bolivie.webp" },
    { pays: 'Botswana', drapeau: "./flags/Botswana.webp" },
    { pays: 'Burkina-Faso', drapeau: "./flags/Burkina-Faso.webp" },
    { pays: 'Cambodge', drapeau: "./flags/Cambodge.webp" },
    { pays: 'Cameroun', drapeau: "./flags/Cameroun.webp" },
    { pays: 'Chili', drapeau: "./flags/Chili.webp" },
    { pays: 'Chine', drapeau: "./flags/Chine.webp" },
    { pays: 'Chypre', drapeau: "./flags/Chypre.webp" },
    { pays: 'Colombie', drapeau: "./flags/Colombie.webp" },
    { pays: 'Corée-du-Nord', drapeau: "./flags/Coree-du-Nord.webp" },
    { pays: 'Corée-du-Sud', drapeau: "./flags/Coree-du-Sud.webp" },
    { pays: 'Costa-Rica', drapeau: "./flags/Costa-Rica.webp" },
    { pays: 'Côte-d’Ivoire', drapeau: "./flags/Cote-dIvoire.webp" },
    { pays: 'Cuba', drapeau: "./flags/Cuba.webp" },
    { pays: 'Djibouti', drapeau: "./flags/Djibouti.webp" },
    { pays: 'Écosse', drapeau: "./flags/Ecosse.webp" },
    { pays: 'Égypte', drapeau: "./flags/Egypte.webp" },
    { pays: 'Émirats Arabes Unis', drapeau: "./flags/Emirats-Arabes-Unis.webp" },
    { pays: 'États-Unis', drapeau: "./flags/Etats-Unis.webp" },
    { pays: 'Éthiopie', drapeau: "./flags/Ethiopie.webp" },
    { pays: 'Ghana', drapeau: "./flags/Ghana.webp" },
    { pays: 'Guatemala', drapeau: "./flags/Guatemala.webp" },
    { pays: 'Guinée', drapeau: "./flags/Guinee.webp" },
    { pays: 'Honduras', drapeau: "./flags/Honduras.webp" },
    { pays: 'Hong-Kong', drapeau: "./flags/Hong-Kong.webp" },
    { pays: 'Inde', drapeau: "./flags/Inde.webp" },
    { pays: 'Indonésie', drapeau: "./flags/Indonesie.webp" },
    { pays: 'Irak', drapeau: "./flags/Irak.webp" },
    { pays: 'Iran', drapeau: "./flags/Iran.webp" },
    { pays: 'Islande', drapeau: "./flags/Islande.webp" },
    { pays: 'Israël', drapeau: "./flags/Israel.webp" },
    { pays: 'Jamaïque', drapeau: "./flags/Jamaique.webp" },
    { pays: 'Japon', drapeau: "./flags/Japon.webp" },
    { pays: 'Kenya', drapeau: "./flags/Kenya.webp" },
    { pays: 'Liban', drapeau: "./flags/Liban.webp" },
    { pays: 'Libye', drapeau: "./flags/Libye.webp" },
    { pays: 'Madagascar', drapeau: "./flags/Madagascar.webp" },
    { pays: 'Malaisie', drapeau: "./flags/Malaisie.webp" },
    { pays: 'Maroc', drapeau: "./flags/Maroc.webp" },
    { pays: 'Mexique', drapeau: "./flags/Mexique.webp" },
    { pays: 'Moldavie', drapeau: "./flags/Moldavie.webp" },
    { pays: 'Monaco', drapeau: "./flags/Monaco.webp" },
    { pays: 'Mongolie', drapeau: "./flags/Mongolie.webp" },
    { pays: 'Nepal', drapeau: "./flags/Nepal.webp" },
    { pays: 'Norvège', drapeau: "./flags/Norvege.webp" },
    { pays: 'Nouvelle-Zélande', drapeau: "./flags/Nouvelle-Zelande.webp" },
    { pays: 'Pakistan', drapeau: "./flags/Pakistan.webp" },
    { pays: 'Pérou', drapeau: "./flags/Perou.webp" },
    { pays: 'Philippines', drapeau: "./flags/Philippines.webp" },
    { pays: 'Royaume-Uni', drapeau: "./flags/Royaume-Uni.webp" },
    { pays: 'Russie', drapeau: "./flags/Russie.webp" },
    { pays: 'Sénégal', drapeau: "./flags/Senegal.webp" },
    { pays: 'Serbie', drapeau: "./flags/Serbie.webp" },
    { pays: 'Singapour', drapeau: "./flags/Singapour.webp" },
    { pays: 'Suisse', drapeau: "./flags/Suisse.webp" },
    { pays: 'Syrie', drapeau: "./flags/Syrie.webp" },
    { pays: 'Thaïlande', drapeau: "./flags/Thailand.webp" },
    { pays: 'Tunisie', drapeau: "./flags/Tunisie.webp" },
    { pays: 'Turquie', drapeau: "./flags/Turquie.webp" },
    { pays: 'Ukraine', drapeau: "./flags/Ukraine.webp" },
    { pays: 'Uruguay', drapeau: "./flags/Uruguay.webp" },
    { pays: 'Vatican', drapeau: "./flags/Vatican.webp" },
    { pays: 'Yémen', drapeau: "./flags/Yemen.webp" },
    { pays: 'Zimbabwe', drapeau: "./flags/Zimbabwe.webp" }
];


let scoreflag = 0;
let answered = false;
let round = 0;
const totalRounds = 10;
let FlagtimeLeft = 90; // Temps initial (en secondes)
let Flagtimer; // Timer pour gérer le décompte du temps

const flagImage = document.getElementById("country-flag");
const countryButtons = document.querySelectorAll(".country-button");
const resultatSpan = document.getElementById("resultat");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score-drapeau");
const messageDiv = document.getElementById("message");
const EndButton = document.getElementById("FinFlag");
const timerDisplay = document.getElementById("timerflag"); // Affichage du minuteur

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function loadNewFlag() {
    if (round >= totalRounds) {
        endGameFlag();
        return;
    }

    answered = false;
    round++;
    const randomIndex = Math.floor(Math.random() * locationsflag.length); // Choisir un pays au hasard
    const currentCountry = locationsflag[randomIndex];
    flagImage.src = currentCountry.drapeau;
    flagImage.alt = `Drapeau de ${currentCountry.pays}`;

    let options = locationsflag.filter(option => option.pays !== currentCountry.pays);
    options = shuffleArray(options).slice(0, 3);
    options.push(currentCountry);
    options = shuffleArray(options);

    countryButtons.forEach((button, index) => {
        button.textContent = options[index].pays;
        button.onclick = () => {
            if (!answered) {
                checkAnswer(options[index].pays, currentCountry.pays);
                answered = true;
            }
        };
    });

    nextButton.style.display = "none";
    resultatSpan.textContent = "";
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        resultatSpan.textContent = "Correct !";
        resultatSpan.style.color = "green";
        scoreflag += 100; // Ajoute 100 points pour une bonne réponse
    } else {
        resultatSpan.textContent = `Faux ! C'était ${correct}.`;
        resultatSpan.style.color = "red";
        scoreflag -= 50; // Retire 50 points pour une mauvaise réponse
    }
    scoreDisplay.textContent = `Score : ${scoreflag}`;
    nextButton.style.display = "block";
}

async function endGameFlag() {

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("authToken");
    // Bonus ou pénalité en fonction du temps restant
    if (FlagtimeLeft > 90) {
        scoreflag -= (FlagtimeLeft - 90) * 5; // Retirer 5 points par seconde supplémentaire
    } else {
        scoreflag += FlagtimeLeft * 10; // Ajouter 10 points par seconde restante
    }

    messageDiv.textContent = `Partie terminée ! Score final : ${scoreflag} (${FlagtimeLeft} secondes restantes)`;
    messageDiv.style.fontSize = "1.5em";
    messageDiv.style.fontWeight = "bold";
    flagImage.style.display = "none";
    document.getElementById("country-options").style.display = "none";
    nextButton.style.display = "none";
    document.getElementById("FinFlag").style.display = "flex";
    document.getElementById("timerflag").style.display = "none";
    document.getElementById("resultat").style.display = "none";
    if (!userId || !token) {
        console.error("Utilisateur non authentifié. Impossible d'enregistrer le score.");
        return;
    }

//ENREGISTREMENT DU SCORE
    try {
        const response = await fetch("/api/FlagScore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, score: scoreflag}), // Utilisation de selectedLocation
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Score enregistré avec succès :", data);

            const { oldLevel, newLevel } = data;
            localStorage.setItem("level", newLevel);

            if (newLevel > oldLevel) {
                showLevelUpAnimation(oldLevel, newLevel);
            }
        } else {
            console.error("Erreur lors de l'enregistrement du score :", data.message);
        }
    } catch (error) {
        console.error("Erreur réseau :", error);
    }

    FetchFlagScore;
}


async function FetchFlagScore() {
    try {
        const response = await fetch("/api/FlagScore");

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des scores : ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des scores :", error);
    }
}

function startFlagTimer() {
    Flagtimer = setInterval(() => {
        FlagtimeLeft--;
        timerDisplay.textContent = `Temps restant: ${FlagtimeLeft}s`;

        if (FlagtimeLeft <= 0) {
            clearInterval(Flagtimer);
            endGameFlag(); // Si le temps est écoulé, finir la partie
        }
    }, 1000);
    document.getElementById("FinFlag").style.display = "none";
}

nextButton.addEventListener("click", () => {
    loadNewFlag();
});

document.getElementById("flags-mode-button").addEventListener("click", () => {
    document.getElementById("flag-game").style.display = "flex";
    document.getElementById("timerflag").style.display = "block";
    document.getElementById("resultat").style.display = "block";
    flagImage.style.display = "block";
    document.getElementById("country-options").style.display = "flex";
    messageDiv.textContent = "";
    round = 0;
    scoreflag = 0;
    scoreDisplay.textContent = `Score : ${scoreflag}`;
    FlagtimeLeft = 90; // Réinitialiser le temps à 90 secondes
    timerDisplay.textContent = `Temps restant: ${FlagtimeLeft}s`; // Afficher le temps restant initial
    clearInterval(Flagtimer); // Arrêter tout ancien minuteur
    startFlagTimer(); // Démarrer un nouveau minuteur
    loadNewFlag();
});

document.getElementById("FinFlag").addEventListener("click", () => {
    document.getElementById("FinFlag").style.display = "none";
    document.getElementById("flag-game").style.display = "none";
    clearInterval(Flagtimer);
});