let currentCountryIndex = -1;
let score = 0;
let selectedRegion = 'world'; // Par défaut


function startFlagGame() {
    document.getElementById('game-choice').style.display = 'none';
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('flag-game').style.display = 'flex';
    score = 0;
    updateScore1();
    getNextFlag();
}

function getNextFlag() {
    const filteredCountries = selectedRegion === 'world'
        ? countries
        : countries.filter(country => country.continent === selectedRegion);

    console.log(filteredCountries); // Debug: affichez les pays filtrés dans la console

    if (filteredCountries.length === 0) {
        alert('Aucun pays à afficher pour cette région.');
        return;
    }

    currentCountryIndex = Math.floor(Math.random() * filteredCountries.length);
    const country = filteredCountries[currentCountryIndex];

    const flagUrl = `https://flagsapi.com/${country.code}/flat/64.png`;
    const flagImage = document.getElementById('country-flag');

    flagImage.src = flagUrl;

    flagImage.onload = () => {
        document.querySelectorAll('.country-button').forEach((button, index) => {
            button.style.backgroundColor = ''; // Réinitialiser les couleurs
            const randomCountries = getRandomCountries(country.name, filteredCountries);
            button.innerText = randomCountries[index].name;
            button.setAttribute('data-country', randomCountries[index].code);
        });
        document.getElementById('next-button').style.display = 'none'; // Masquer le bouton suivant
    };

    flagImage.onerror = () => {
        getNextFlag(); // Essayer un autre pays si l'image ne charge pas
    };
}

function getRandomCountries(correctCountryName, filteredCountries) {
    const options = [...filteredCountries.filter(c => c.name !== correctCountryName)];
    const randomOptions = [filteredCountries.find(c => c.name === correctCountryName)];

    while (randomOptions.length < 4) {
        const randomIndex = Math.floor(Math.random() * options.length);
        randomOptions.push(options[randomIndex]);
        options.splice(randomIndex, 1);
    }

    return shuffle(randomOptions);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.querySelectorAll('.country-button').forEach(button => {
    button.onclick = () => {
        const correctCountryName = countries[currentCountryIndex].name;
        const clickedCountryName = button.innerText;
        const resultSpan = document.getElementById('resultat');

        if (clickedCountryName === correctCountryName) {
            button.style.backgroundColor = 'green';
            resultSpan.innerText = `Bonne réponse ! Vous avez marqué ${scorePerCorrectAnswer} points.`;
            score += scorePerCorrectAnswer;
            updateScore1();
            document.getElementById('next-button').style.display = 'block'; // Afficher le bouton suivant
        } else {
            button.style.backgroundColor = 'red';
            resultSpan.innerText = `Mauvaise réponse. La bonne réponse est ${correctCountryName}.`;
            document.getElementById('next-button').style.display = 'block'; // Afficher le bouton suivant
            document.querySelectorAll('.country-button').forEach(b => {
                if (b.innerText === correctCountryName) {
                    b.style.backgroundColor = 'green'; // Mettre en surbrillance le bouton correct
                }
            });
        }
    };
});

document.getElementById('next-button').onclick = () => {
    document.getElementById('resultat').innerText = ''; // Effacer le message de résultat
    getNextFlag(); // Charger le prochain drapeau
};

document.getElementById('flags-mode-button').onclick = () => {
    document.getElementById('mode-title').innerText = 'MODE DE JEU : DRAPEAU';
    document.getElementById('region-select').style.display = 'block';
    document.getElementById('location-select').style.display = 'none';
    document.getElementById('player-input').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
};

document.getElementById('start-flag-game-button').onclick = () => {
    selectedRegion = document.getElementById('region').value;
    console.log(selectedRegion); // Debug: vérifiez la région sélectionnée
    startFlagGame();
};

function updateScore1() {
    document.getElementById('score-drapeau').innerText = `Score : ${score}`;
}
