let map, panorama, polyline;
let playerMarker, actualMarker;
let actualLocation;
let scoreBanner = document.getElementById('score-banner');
let nameplace = document.getElementById('nameplace');
let result = document.getElementById('result');
let resultElement = document.getElementById('result');
let okButton = document.getElementById('ok-button');
let continueButton = document.getElementById('continue-button');
let newGameButton = document.getElementById('new-game-button');
let totalScore = 0;
let attempts = 0;
const maxAttempts = 5;
let playerName = '';
let currentRound = 1;
let timerInterval;
const roundTimeLimit = 60;
let gameMode = 'classique'; // Par défaut, mode classique
const compass = document.getElementById('compass');

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        disableDefaultUI: true,
        rotateControl: true,
        rotateControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    });

    // Initialize the Street View panorama
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'), {
            position: { lat: 0, lng: 0 },
            pov: { heading: 165, pitch: 0 },
            zoom: 1
        });

    // Update compass on Street View heading change
    panorama.addListener('pov_changed', () => {
        updateCompass(panorama.getPov().heading);
    });

    // Hide the street view and map initially
    document.getElementById('street-view').style.display = 'none';
    document.getElementById('map-container').style.display = 'none';

    // Initialisation du jeu lorsque le bouton "Lancer une partie" est cliqué
    document.getElementById('start-button').addEventListener('click', () => {
        playerName = document.getElementById('player-input').value.trim();
        if (playerName === '') {
            alert('Veuillez entrer votre pseudo.');
            return;
        }
        const locationType = document.getElementById('location-select').value;
        document.getElementById('start-screen').style.display = 'none';
        startNewRound(locationType);
    });

    // Event listener pour cliquer sur la carte et placer le marqueur du joueur
    map.addListener('click', (event) => {
        placePlayerMarker(event.latLng);
    });

    // Gestion des boutons de mode de jeu
    document.getElementById('classique-mode-button').addEventListener('click', () => {
        gameMode = 'classique';
        document.getElementById('mode-title').innerText = 'MODE DE JEU : SOLO CLASSIQUE';
        document.getElementById('start-screen').style.display = 'flex';
        document.getElementById('location-select').style.display = 'block';
        document.getElementById('player-input').style.display = 'block';
        document.getElementById('start-button').style.display = 'block';
    });

    document.getElementById('chrono-mode-button').addEventListener('click', () => {
        gameMode = 'chrono';
        document.getElementById('mode-title').innerText = 'MODE DE JEU : SOLO CHRONO';
        document.getElementById('start-screen').style.display = 'flex';
        document.getElementById('location-select').style.display = 'block';
        document.getElementById('player-input').style.display = 'block';
        document.getElementById('start-button').style.display = 'block';
    });
}

function updateCompass(heading) {
    compass.style.transform = `rotate(${heading}deg)`;
}

// OK button event
okButton.addEventListener('click', () => {
    if (playerMarker) {
        clearInterval(timerInterval); // Arrêter le chronomètre en mode chrono
        calculateScore(playerMarker.getPosition());
        placeActualMarker(actualLocation);
        drawLine(playerMarker.getPosition(), actualLocation);
        okButton.style.display = 'none';
        continueButton.style.display = 'block';
        document.getElementById('map-container').style.width = '50%';
        document.getElementById('map-container').style.height = '75%';
    } else {
        alert('Veuillez placer un pin sur la carte.');
    }
});

function clearMap() {
    if (playerMarker) {
        playerMarker.setMap(null); // Supprime le marqueur du joueur de la carte
        playerMarker = null;
    }
    if (actualMarker) {
        actualMarker.setMap(null); // Supprime le marqueur de l'emplacement réel de la carte
        actualMarker = null;
    }
    if (polyline) {
        polyline.setMap(null); // Supprime la polyline de la carte
        polyline = null;
    }
    map.setCenter({ lat: 0, lng: 0 });
    map.setZoom(2);
}

function clearMapStrasbourg() {
    if (playerMarker) {
        playerMarker.setMap(null); // Supprime le marqueur du joueur de la carte
        playerMarker = null;
    }
    if (actualMarker) {
        actualMarker.setMap(null); // Supprime le marqueur de l'emplacement réel de la carte
        actualMarker = null;
    }
    if (polyline) {
        polyline.setMap(null); // Supprime la polyline de la carte
        polyline = null;
    }
    // Centrer la carte sur Strasbourg
    map.setCenter({ lat: 48.573405, lng: 7.752111 }); // Coordonnées de Strasbourg
    map.setZoom(13); // Zoom adapté pour Strasbourg
}
function clearMapNorthAmerica() {
    if (playerMarker) {
        playerMarker.setMap(null); // Supprime le marqueur du joueur de la carte
        playerMarker = null;
    }
    if (actualMarker) {
        actualMarker.setMap(null); // Supprime le marqueur de l'emplacement réel de la carte
        actualMarker = null;
    }
    if (polyline) {
        polyline.setMap(null); // Supprime la polyline de la carte
        polyline = null;
    }
     // Centrer la carte sur les États-Unis
     map.setCenter({ lat: 37.0902, lng: -95.7129 }); // Coordonnées approximatives du centre des États-Unis
     map.setZoom(4); // Zoom adapté pour afficher la majorité du territoire des États-Unis
 }

// Sélectionnez l'élément map-container
const mapContainer = document.getElementById('map-container');

// Ajoutez un écouteur d'événement pour le survol de la souris
mapContainer.addEventListener('mouseover', () => {
    mapContainer.classList.add('mapHover');
});

// Ajoutez un écouteur d'événement pour la sortie de la souris
mapContainer.addEventListener('mouseout', () => {
    mapContainer.classList.remove('mapHover');
});

// Continue button event
continueButton.addEventListener('click', () => {
    clearMap(); // Appel de la fonction pour effacer les marqueurs et la polyline
    if (attempts < maxAttempts) {
        startNewRound(document.getElementById('location-select').value);
    } else {
        endGame();
    }
});

// New game button event
newGameButton.addEventListener('click', () => {
    resetGame();
    document.getElementById('result').style.display = 'none';
    result.textContent = `Total Score: 0`;
});

function startNewRound(locationType) {
    // Réinitialisation selon le mode de jeu
    if (locationType === 'Strasbourg') {
        clearMapStrasbourg(); // Réinitialise et centre sur Strasbourg
    } else if (locationType === 'north-america') {
        clearMapNorthAmerica(); // Réinitialise et centre sur les États-Unis
    }   else {
        clearMap(); // Réinitialise la carte de manière classique
    }
    updateHeader();
    updateFooter();
    document.getElementById('street-view').style.display = 'block';
    document.getElementById('highscores').style.display = 'none';
    document.getElementById('map-container').style.display = 'block';
    okButton.style.display = 'block';
    continueButton.style.display = 'none';
    scoreBanner.style.display = 'none';
    nameplace.style.display = 'none';
    document.getElementById('map-container').style.width = '15%';
    document.getElementById('map-container').style.height = '15%';
    getRandomStreetViewLocation(locationType);
    if (gameMode === 'chrono') {
        startTimer(); // Démarrer le chronomètre si en mode chrono
    }
    currentRound++;
    if (playerMarker) {
        playerMarker.setMap(null); // Supprimer le marqueur du joueur de la carte
        playerMarker = null; // Réinitialiser le marqueur du joueur pour la nouvelle manche
    }
    if (actualMarker) {
        actualMarker.setMap(null); // Supprimer le marqueur de l'emplacement réel de la carte
        actualMarker = null; // Réinitialiser le marqueur réel pour la nouvelle manche
    }
    if (polyline) {
        polyline.setMap(null); // Supprimer la polyline de la carte
        polyline = null; // Réinitialiser la polyline pour la nouvelle manche
    }
}

function placePlayerMarker(location) {
    if (playerMarker) {
        playerMarker.setMap(null);
    }
    playerMarker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Votre choix'
    });
}

function placeActualMarker(location) {
    actualMarker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Emplacement réel'
    });
}

function drawLine(startLocation, endLocation) {
    polyline = new google.maps.Polyline({
        path: [startLocation, endLocation],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });
}


function endGame() {
    // Afficher les résultats dans le footer
    result.textContent = `Jeu terminé ! Votre score total est de : ${totalScore}`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('continue-button').style.display = 'none';
    scoreBanner.style.display = 'none';
    nameplace.style.display = 'none';
    saveHighScore(playerName, totalScore);
    //displayHighScores();
    resetGame();
    updateFooter();
}

function resetGame() {
    document.getElementById('street-view').style.display = 'none';
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('timer-display').style.display = 'none';
    document.getElementById('ok-button').style.display = 'none';
    document.getElementById('highscores').style.display = 'block';
    totalScore = 0;
    attempts = 0;
    currentRound = 1;
    playerName = '';
}

function saveHighScore(name, score) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ name, score });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5); // Garder uniquement le top 5
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highscoreList = document.getElementById('highscore-list');
    highscoreList.innerHTML = '';
    highScores.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        highscoreList.appendChild(listItem);
    });
}

let currentPlaceName = ""; // Variable globale pour le nom du lieu

function getRandomStreetViewLocation(locationType) {
    const svService = new google.maps.StreetViewService();

    if (locationType === 'world') {
        // Générer des coordonnées aléatoires dans le monde entier
        const randomLat = Math.random() * 180 - 90; // Latitude entre -90 et 90
        const randomLng = Math.random() * 360 - 180; // Longitude entre -180 et 180
        const latLng = new google.maps.LatLng(randomLat, randomLng);

        // Utiliser l'API pour trouver un panorama dans un rayon de 50 km
        svService.getPanorama({ location: latLng, radius: 50000 }, (data, status) => {
            if (status === 'OK' && data && data.location) {
                if (data.location.pano && data.links.length > 0) {
                    actualLocation = data.location.latLng;
                    panorama.setPosition(actualLocation);
                    currentRound++; // Mise à jour du compteur de round
                } else {
                    getRandomStreetViewLocation('world'); // Réessayer
                }
            } else {
                getRandomStreetViewLocation('world'); // Réessayer
            }
        });
    } else if (locationType === 'north-america') {
        // Générer des coordonnées aléatoires en Amérique du Nord
        const randomLatLng = getRandomNorthAmericaCoordinates();
        const latLng = new google.maps.LatLng(randomLatLng.lat, randomLatLng.lng);

        // Utiliser l'API pour trouver un panorama dans un rayon de 50 km
        svService.getPanorama(
            {
                location: latLng,
                radius: 50000, // Rayon de recherche
                source: google.maps.StreetViewSource.OUTDOOR, // Seulement les panoramas pris par Google
            },
            (data, status) => {
                if (status === 'OK' && data && data.location) {
                    if (data.location.pano && data.links.length > 0) {
                        actualLocation = data.location.latLng; // Localisation trouvée
                        panorama.setPosition(actualLocation); // Afficher dans Street View
                        //currentRound++; // Mise à jour du compteur de round
                    } else {
                        getRandomStreetViewLocation('north-america'); // Réessayer si échec
                    }
                } else {
                    getRandomStreetViewLocation('north-america'); // Réessayer si échec
                }
            }
        );
    } else {
        // Autres cas, garder la logique existante
        let filteredLocations;
        let radiusInKm = 1; // Par défaut, le rayon est de 1 km.

        switch (locationType) {
            case 'europe':
                filteredLocations = locations.filter(location => location.continent === 'Europe');
                break;
            case 'Strasbourg':
                filteredLocations = locations.filter(location => location.ville === 'Strasbourg');
                radiusInKm = 0; // Rayon 0 pour Strasbourg
                break;
            case 'famous':
                filteredLocations = locations.filter(location => location.mode === 'famous');
                radiusInKm = 0.05; // Rayon 0 pour famous
                break;
            case 'south-america':
                filteredLocations = locations.filter(location => location.continent === 'Amérique Centrale/Sud');
                break;
            case 'africa':
                filteredLocations = locations.filter(location => location.continent === 'Africa');
                break;
            case 'asia-oceania':
                filteredLocations = locations.filter(location => location.continent === 'Asia' || location.continent === 'Australia' || location.continent === 'Oceania');
                break;
            default:
                filteredLocations = locations;
                break;
        }

        const randomIndex = Math.floor(Math.random() * filteredLocations.length);
        const selectedLocation = filteredLocations[randomIndex];

        const randomLocation = getRandomLocationWithinRadius(selectedLocation.lat, selectedLocation.lng, radiusInKm);

        const latLng = new google.maps.LatLng(randomLocation.lat, randomLocation.lng);
        svService.getPanorama({ location: latLng, radius: 50000 }, processSVData);
    }
}

function getRandomNorthAmericaCoordinates() {
    // Définir des zones urbaines importantes avec leurs coordonnées approximatives
    const urbanAreas = [
        { lat: 34.052235, lng: -118.243683, name: "Los Angeles" }, // Los Angeles
        { lat: 40.712776, lng: -74.005974, name: "New York City" }, // New York City
        { lat: 41.878113, lng: -87.629799, name: "Chicago" }, // Chicago
        { lat: 29.760427, lng: -95.369804, name: "Houston" }, // Houston
        { lat: 33.448376, lng: -112.074036, name: "Phoenix" }, // Phoenix
        { lat: 39.739235, lng: -104.990250, name: "Denver" }, // Denver
        { lat: 25.761681, lng: -80.191788, name: "Miami" }, // Miami
        { lat: 47.606209, lng: -122.332069, name: "Seattle" }, // Seattle
        { lat: 32.715736, lng: -117.161087, name: "San Diego" }, // San Diego
        { lat: 38.907192, lng: -77.036873, name: "Washington, D.C." }, // Washington, D.C.
        { name: "Boston, MA", lat: 42.3601, lng: -71.0589 },
        { name: "Dallas, TX", lat: 32.7767, lng: -96.7970 },
        { name: "Atlanta, GA", lat: 33.7490, lng: -84.3880 },
        { name: "Las Vegas, NV", lat: 36.1699, lng: -115.1398 },
        { name: "San Francisco, CA", lat: 37.7749, lng: -122.4194 },
        { name: "Orlando, FL", lat: 28.5383, lng: -81.3792 },
        { name: "Minneapolis, MN", lat: 44.9778, lng: -93.2650 },
        { name: "Tampa, FL", lat: 27.9506, lng: -82.4572 },
        { name: "Portland, OR", lat: 45.5152, lng: -122.6784 },
        { name: "Detroit, MI", lat: 42.3314, lng: -83.0458 },
        { name: "Indianapolis, IN", lat: 39.7684, lng: -86.1581 },
        { name: "Charlotte, NC", lat: 35.2271, lng: -80.8431 },
        { name: "Cleveland, OH", lat: 41.4993, lng: -81.6944 },
        { name: "Nashville, TN", lat: 36.1627, lng: -86.7816 },
        { name: "St. Louis, MO", lat: 38.6270, lng: -90.1994 },
        { name: "Phoenix, AZ", lat: 33.4484, lng: -112.0740 },
        { name: "Salt Lake City, UT", lat: 40.7608, lng: -111.8910 },
        { name: "Cincinnati, OH", lat: 39.1031, lng: -84.5120 },
        { name: "Kansas City, MO", lat: 39.0997, lng: -94.5786 },
        { name: "Columbus, OH", lat: 39.9612, lng: -82.9988 }
    ];

    // Probabilité de choisir une zone urbaine (ex. 70% pour urbain, 30% pour aléatoire)
    const urbanBias = 0.7;

    let targetLocation;

    if (Math.random() < urbanBias) {
        // Choisir un point aléatoire dans une zone urbaine
        const city = urbanAreas[Math.floor(Math.random() * urbanAreas.length)];
        const radius = 0.5; // Rayon de déviation en degrés (environ 50 km)

        const latOffset = (Math.random() - 0.5) * radius * 2;
        const lngOffset = (Math.random() - 0.5) * radius * 2;

        targetLocation = { lat: city.lat + latOffset, lng: city.lng + lngOffset };
    } else {
        // Générer des coordonnées aléatoires pour les zones rurales
        const minLat = 24.396308; // Point le plus au sud (Floride)
        const maxLat = 49.384358; // Point le plus au nord des États-Unis continentaux
        const minLng = -125.000000; // Point le plus à l'ouest (Californie)
        const maxLng = -66.934570; // Point le plus à l'est (Maine)

        const lat = Math.random() * (maxLat - minLat) + minLat;
        const lng = Math.random() * (maxLng - minLng) + minLng;

        targetLocation = { lat, lng };
    }

    // Utiliser l'API Street View pour garantir que les images proviennent des voitures Google
    const svService = new google.maps.StreetViewService();
    const latLng = new google.maps.LatLng(targetLocation.lat, targetLocation.lng);

    svService.getPanorama(
        {
            location: latLng,
            radius: 50000, // Rayon de recherche de 50 km
            source: google.maps.StreetViewSource.OUTDOOR // Limite aux images capturées par les voitures Google
        },
        (data, status) => {
            if (status === google.maps.StreetViewStatus.OK && data && data.location) {
                // Vérifier si une image valide est trouvée
                if (data.location.pano && data.links.length > 0) {
                    actualLocation = data.location.latLng; // Définir la localisation réelle
                    panorama.setPosition(actualLocation); // Afficher dans Street View
                } else {
                    // Reessayer si ce n'est pas une localisation valide
                    getRandomNorthAmericaCoordinates();
                }
            } else {
                // Si aucun panorama trouvé, réessayer
                getRandomNorthAmericaCoordinates();
            }
        }
    );
    currentRound++; // Mise à jour du compteur de round
}


function calculateScore(playerLocation) {
    const distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(playerLocation, actualLocation);
    let roundScore;

    if (distanceInMeters <= 5) {
        roundScore = 5000; // Score maximum si la distance est de 5 m ou moins
    } else if (distanceInMeters <= 2000) {
        roundScore = Math.max(0, 5000 - Math.floor(distanceInMeters - 5)); // -1 point par mètre jusqu'à 2000 m
    } else {
        const distanceInKm = distanceInMeters / 1000;
        roundScore = Math.max(0, 5000 - 1995 - Math.floor(distanceInKm - 2)); // -1 point par kilomètre au-delà de 2000 m
    }

    totalScore += roundScore;
    attempts++;

    // Choisir le format d'affichage de la distance
    const distanceText = distanceInMeters < 1000
        ? `${distanceInMeters.toFixed(0)} m`
        : `${(distanceInMeters / 1000).toFixed(2)} km`;

    // Mettre à jour l'interface utilisateur avec le score et la distance
    scoreBanner.textContent = `Score: ${roundScore} (Distance: ${distanceText})`;
    scoreBanner.style.display = 'block';
    nameplace.style.display = 'block';

    // Utiliser currentPlaceName pour le texte
    if (currentPlaceName) {
        nameplace.textContent = currentPlaceName; // Afficher le nom du lieu si défini
    } else {
        nameplace.textContent = ""; // Sinon, laisser 'nameplace' vide
    }

    resultElement.textContent = `Total Score: ${totalScore}`;
}




function getRandomLocationWithinRadius(lat, lng, radiusInKm) {
    // Convert radius from km to degrees
    const radiusInDegrees = radiusInKm / 111; // Approximation: 1 degree = 111 km

    const randomLat = lat + (Math.random() * radiusInDegrees * 2 - radiusInDegrees);
    const randomLng = lng + (Math.random() * radiusInDegrees * 2 - radiusInDegrees);

    return { lat: randomLat, lng: randomLng };
}

function processSVData(data, status) {
    if (status === 'OK') {
        actualLocation = data.location.latLng;
        panorama.setPosition(actualLocation);
    } else {
        // Si aucun panorama trouvé, essayer une nouvelle localisation
        getRandomStreetViewLocation(document.getElementById('location-select').value);
    }
}

function updateHeader() {
    document.getElementById('player-name').textContent = `Joueur: ${playerName}`;
    document.getElementById('round-info').textContent = `Manche: ${currentRound}/${maxAttempts}`;
    document.getElementById('current-score').textContent = `Score Actuel: ${totalScore}`;
}

function updateFooter() {
    if (gameMode === 'chrono') {
        document.getElementById('timer-display').style.display = 'block';
    } else {
        document.getElementById('timer-display').style.display = 'none';
    }
    // Masquer le chronomètre après la fin des 5 manches
    if (attempts >= maxAttempts) {
        document.getElementById('timer-display').style.display = 'none';
    }
}

function startTimer() {
    let timeLeft = roundTimeLimit;
    document.getElementById('timer-display').textContent = `Temps restant: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').textContent = `Temps restant: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Temps écoulé ! Le round est terminé.');
            calculateScore(null); // Aucun marqueur joueur n'a été placé
            placeActualMarker(actualLocation);
            drawLine(null, actualLocation);
            okButton.style.display = 'none';
            continueButton.style.display = 'block';
            document.getElementById('map-container').style.width = '50%';
            document.getElementById('map-container').style.height = '75%';
        }
    }, 1000);
}

window.initMap = initMap;