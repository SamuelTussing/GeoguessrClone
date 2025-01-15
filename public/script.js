let map, panorama, polyline;
//import axios from 'axios';
let playerMarker, actualMarker;
let actualLocation;
let scoreBanner = document.getElementById('score-banner');
let closeHighscores = document.getElementById('arrow');
let OpenHighscore = document.getElementById('classement-button');
let highscoresContainer = document.querySelector('.classementcontainer');
let streetViewElement = document.getElementById('street-view');
let nameplace = document.getElementById('nameplace');
let result = document.getElementById('result');
let resultElement = document.getElementById('result');
let okButton = document.getElementById('ok-button');
let continueButton = document.getElementById('continue-button');
let newGameButton = document.getElementById('new-game-button');
let totalScore = 0;
let attempts = 0;
const maxAttempts = 5;
const username = localStorage.getItem('username');
const level = localStorage.getItem('level');
let currentRound = 0;
let locationType
const audioPlayer = document.getElementById('audioPlayer');
const compass = document.getElementById('compass');
let chronoMode = "infini"; // Par défaut
let timer; // Référence au timer
const timerElement = document.getElementById("timer"); // L'élément HTML pour afficher le chrono
const preparationtimer = document.getElementById("timer2"); // L'élément HTML pour afficher le chrono
// Variables pour suivre les choix de l'utilisateur
let chronoSelection = "infini"; // Par défaut, c'est le chrono infini
let modeDeplacement = "mouvement"; // Par défaut, c'est le mode mouvement (persomarche)
let roundTimeLimit = 10; // Temps limite du round (par défaut infini)
let timerInterval; // Intervalle pour le compte à rebours
let timeLeft = roundTimeLimit; // Initialiser globalement avec la limite de temps
let preCountdown = 5;

// Remplacer ceci par votre vraie clé API
const googleMapsApiKey = 'AIzaSyAUPG5ygE36Pd45w23U157bjffFqJ0Obcg'; // Remplacez par la clé exacte obtenue depuis Google Cloud Console

// Charger directement le script Google Maps
const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&libraries=geometry`;
googleMapsScript.async = true;
googleMapsScript.defer = true;
document.body.appendChild(googleMapsScript);


function getLocationType() {
    const selectElement = document.getElementById('location-select');
    locationType = selectElement.value;
    console.log("Location type sélectionné : ", locationType);
}

function initMap() {
    console.log('Google Maps a été chargé avec succès !');
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
    window.initMap = initMap;

    document.getElementById('clear-storage-button').addEventListener('click', () => {
        if (confirm("Êtes-vous sûr de vouloir vider tous les scores enregistrés ?")) {
            localStorage.clear();
            displayHighScores(); // Met à jour la liste des scores affichés (la vide)
            alert("Le classement a été réinitialisé !");
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
    // Récupérer le nom du joueur depuis le localStorage

    // Maintenant, vous pouvez utiliser playerName et passer à la suite
    getLocationType();
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
        document.getElementById('result').style.display = 'none';
        document.getElementById('mode-title').innerText = 'MODE DE JEU : SOLO CLASSIQUE';
        document.getElementById('start-screen').style.display = 'flex';
        document.getElementById('location-select').style.display = 'block';
        document.getElementById('start-button').style.display = 'block';
    
        // Ajoutez un message pour indiquer que la carte est en cours de chargement
        if (!map) {
            console.warn("La carte n’est pas encore initialisée.");
        }
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
        audioPlayer.play(); // Joue le son
    }
});

function clearMap() {
    if (!map) {
        console.log('La carte n’est pas initialisée, création en cours...');
        map = new google.maps.Map(document.getElementById('map-container'), {
            center: { lat: 0, lng: 0 },
            zoom: 2,
        });
    }
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
    if (!map) {
        console.log('La carte n’est pas initialisée, création en cours...');
        map = new google.maps.Map(document.getElementById('map-container'), {
            center: { lat: 0, lng: 0 },
            zoom: 2,
        });
    }
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
    if (!map) {
        console.log('La carte n’est pas initialisée, création en cours...');
        map = new google.maps.Map(document.getElementById('map-container'), {
            center: { lat: 0, lng: 0 },
            zoom: 2,
        });
    }
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
    document.getElementById('street-view').style.display = 'block';
    document.getElementById('map-container').style.display = 'block';
    okButton.style.display = 'block';
    continueButton.style.display = 'none';
    scoreBanner.style.display = 'none';
    nameplace.style.display = 'none';
    document.getElementById('map-container').style.width = '15%';
    document.getElementById('map-container').style.height = '30%';
    getRandomStreetViewLocation(locationType);

    
    // Ajouter un timer de pré-compte à rebours (par exemple, 5 secondes)
    preparationtimer.classList.remove("hidden");
    preparationtimer.textContent = `Préparation... ${preCountdown}s`; // Affiche le pré-compte à rebours


    try {
        const preCountdownInterval = setInterval(() => {
            preCountdown -= 1;
            console.log(preCountdown); 
            preparationtimer.textContent = `Préparation... ${preCountdown}s`;
    
            if (preCountdown <= 1) {
                clearInterval(preCountdownInterval); 
                preparationtimer.classList.add("hidden");  
                startMainTimer(); 
            }
        }, 1000);
    } catch (error) {
        console.error("Erreur dans le pré-compte à rebours :", error);
    }



  //GESTION DES MARQUEURS DE CARTES
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

// Fonction pour démarrer le chronomètre principal
function startMainTimer() {
    let timeLeft = roundTimeLimit;
    if (roundTimeLimit === Infinity) {
        updateTimerDisplay(Infinity); // Affiche ∞ si pas de limite de temps
        return;
    }

    // Mettre à jour l'affichage initial du chrono
    updateTimerDisplay(timeLeft);
    streetViewElement.classList.remove('blur');

    // Chronomètre principal
    const timerInterval = setInterval(() => {
        timeLeft -= 1;
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Arrêter le chrono
            console.log("Le temps est écoulé !");
            audioPlayer.play(); // Joue le son
            streetViewElement.classList.add('blur'); // Ajouter le flou
        }
    }, 1000); // Décrémenter chaque seconde
}

// Fonction pour mettre à jour l'affichage du chrono
function updateTimerDisplay(timeLeft = roundTimeLimit) {
    if (roundTimeLimit === Infinity) {
      timerElement.textContent = "∞"; // Affiche l'infini si le chrono est infini
    } else {
      timerElement.textContent = `${timeLeft} s`; // Affiche le temps restant en secondes
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

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner l'image par son ID
    const logoImage = document.getElementById('logo');

    // Ajouter un événement 'click' sur l'image
    logoImage.addEventListener('click', function() {
        // Appeler la fonction endGame() quand l'image est cliquée
        endGame();
    });
});


async function endGame() {
    const locationType = document.getElementById("location-select").value;
    result.textContent = `Jeu terminé ! Votre score total est de : ${totalScore}`;
    document.getElementById("result").style.display = "block";
    document.getElementById("continue-button").style.display = "none";
    scoreBanner.style.display = "none";
    nameplace.style.display = "none";

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");

    if (!userId || !token) {
        console.error("Utilisateur non authentifié. Impossible d'enregistrer le score.");
        return;
    }

    const score = totalScore;

    try {
        const response = await fetch("/api/updateScore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, score }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Score enregistré avec succès :", data);

            const { oldLevel, newLevel } = data;

            // Mettre à jour le localStorage avec le nouveau niveau
            localStorage.setItem("level", newLevel);

            // Si le joueur passe un niveau, afficher l'animation
            if (newLevel > oldLevel) {
                showLevelUpAnimation(oldLevel, newLevel);
            }
        } else {
            console.error("Erreur lors de l'enregistrement du score :", data.message);
        }
    } catch (error) {
        console.error("Erreur réseau :", error);
    }

    fetchTopScores();

    // Réinitialiser le jeu
    resetGame();
}


function resetGame() {
    document.getElementById('street-view').style.display = 'none';
    document.getElementById('map-container').style.display = 'none';
    document.getElementById('timer-display').style.display = 'none';
    document.getElementById('ok-button').style.display = 'none';
    totalScore = 0;
    attempts = 0;
    currentRound = 0;
}


let currentPlaceName = ""; // Variable globale pour le nom du lieu



async function fetchTopScores() {
    try {
        const response = await fetch("/api/topScores");
        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des scores : ${response.statusText}`);
        }

        const topScores = await response.json();
        const dataContainer = document.getElementById("dataContainer");

        // Vide le container avant d'ajouter de nouveaux scores
        dataContainer.innerHTML = "";

        // Ajouter les scores dans la liste
        topScores.forEach((user, index) => {
            const position = index + 1;
            const username = user.username;
            const score = user.score;

            const listItem = document.createElement("div");
            listItem.classList.add("classement-item");

            // Ajouter une classe spécifique basée sur l'index + 1
            listItem.classList.add(`position-${position}`);

            // Ajouter une image pour la première position (index 0)
            if (index === 0) {
                const crownImg = document.createElement("img");
                crownImg.src = "./couronne.png";  // Assurez-vous du bon chemin ici
                crownImg.alt = "Couronne";
                crownImg.width = 30; // Taille de l'image

                // Gestionnaire d'erreur de chargement
                crownImg.onerror = function () {
                    console.error("Erreur de chargement de l'image couronne.png");
                };

                // Ajouter l'image au début du div
                listItem.appendChild(crownImg);
            }

            // Ajouter le texte du classement
            listItem.textContent = `${position}ᵉ ${username} - ${score} points`;

            dataContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des scores :", error);
        const dataContainer = document.getElementById("dataContainer");
        dataContainer.innerHTML = `<p class="error">Impossible de récupérer les scores. Veuillez réessayer plus tard.</p>`;
    }
}






function getRandomStreetViewLocation(locationType) {
    const svService = new google.maps.StreetViewService();

    if (locationType === 'world') {
        // Générer des coordonnées aléatoires dans le monde entier
        const randomLat = Math.random() * 180 - 90; // Latitude entre -90 et 90
        const randomLng = Math.random() * 360 - 180; // Longitude entre -180 et 180
        const latLng = new google.maps.LatLng(randomLat, randomLng);

        // Utiliser l'API pour trouver un panorama dans un rayon de 50 km
        svService.getPanorama({ location: latLng, radius: 50000,  }, (data, status) => {
            if (status === 'OK' && data && data.location) {
                if (data.location.pano && data.links.length > 0) {
                    actualLocation = data.location.latLng;
                    panorama.setPosition(actualLocation);
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
            case 'Capitales':
                filteredLocations = locations.filter(location => location.mode === 'Capitales');
                radiusInKm = .2;
                break;
            case 'Strasbourg':
                filteredLocations = locations.filter(location => location.ville === 'Strasbourg');
                radiusInKm = 0; // Rayon 0 pour Strasbourg
                break;
            case 'France':
                filteredLocations = locations.filter(location => location.pays === 'France');
                radiusInKm = 2;
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
        svService.getPanorama({ location: latLng, radius: 50000, source: google.maps.StreetViewSource.OUTDOOR }, processSVData);
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
    const username = localStorage.getItem("username") || "Anonyme";
    const level = localStorage.getItem("level") || "0"; // Récupérer le niveau depuis localStorage

    document.getElementById("player-name").textContent = `Niv.${level} Joueur: ${username}`;
    document.getElementById("round-info").textContent = `Manche: ${currentRound}/${maxAttempts}`;
    document.getElementById("current-score").textContent = `Score Actuel: ${totalScore}`;
}




  closeHighscores.addEventListener('click',()=>{
    highscoresContainer.classList.add('hidden');
  });

  OpenHighscore.addEventListener('click', () => {
    highscoresContainer.classList.remove('hidden');
    fetchTopScores(); // Récupère les scores à chaque ouverture
  });

// Fonction pour démarrer un timer
function startTimer(duration, callback) {
    clearInterval(timer); // Reset any existing timer
    let remainingTime = duration;

    const timerDiv = document.getElementById("timer"); // Get the timer div
    timerDiv.textContent = `Temps restant : ${remainingTime}s`; // Initialize the display

    timer = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            timerDiv.textContent = `Temps restant : ${remainingTime}s`; // Update the display
        } else {
            clearInterval(timer); // Stop the timer
            timerDiv.textContent = "Temps écoulé !"; // Indicate the timer has ended
            callback(); // Execute the callback for when time is up
        }
    }, 1000); // Decrement every second
}



  function activateChrono(mode) {
    // Met à jour la variable globale pour le chrono
    chronoMode = mode;

    // Réinitialise tous les styles pour désactiver les autres options
    document.querySelectorAll(".chronodiv").forEach(div => div.classList.remove("active"));
    document.getElementById(`chronodiv-${mode}`).classList.add("active");

    // Si le chrono est infini, arrête le timer (si en cours)
    if (mode === "infini") {
        clearInterval(timer);
        timer = null;
    }
}




// Sélectionner tous les éléments de type chronodiv et chronodiv déplacement
const chronoDivs = document.querySelectorAll(".chronoContainer .chronodiv");
const modeDeplacementDivs = document.querySelectorAll(".chronoContainer div[data-mode]"); // Sélectionner les divs de mode de déplacement
const startButton = document.getElementById("start-button");
const reglesElement = document.getElementById("regles");
// Fonction pour désactiver tous les chronodiv
function resetChronoSelection() {
  chronoDivs.forEach(chrono => {
    chrono.classList.remove("active"); // Enlever la classe active de tous les chronos
  });
}

// Fonction pour désactiver tous les modes de déplacement
function resetModeDeplacementSelection() {
  modeDeplacementDivs.forEach(mode => {
    mode.classList.remove("active"); // Enlever la classe active de tous les modes de déplacement
  });
}

// Fonction pour activer un chrono et mettre à jour les variables
// Fonction pour activer un chrono et mettre à jour les variables
function activateChrono(chronoType) {
    resetChronoSelection(); // Désactive tous les chronos
  
    // Activer l'élément cliqué
    const selectedChrono = document.querySelector(`#chronodiv-${chronoType}`);
    if (selectedChrono) {
      selectedChrono.classList.add("active"); // Ajouter la classe active à l'élément
    }
  
    // Mettre à jour la variable de sélection
    chronoSelection = chronoType;
  
    // Mettre à jour roundTimeLimit en fonction du chrono sélectionné
    switch (chronoType) {
      case "infini":
        roundTimeLimit = Infinity;
        break;
      case "1s":
        roundTimeLimit = 1;
        break;
      case "10s":
        roundTimeLimit = 10;
        break;
      case "30s":
        roundTimeLimit = 30;
        break;
      default:
        console.error("Chrono non valide :", chronoType);
        return;
    }
    console.log("Mode de chrono activé :", chronoType, "Limite de temps :", roundTimeLimit);
  
    // Mettre à jour l'affichage du chrono immédiatement
    updateTimerDisplay();
  }

// Fonction pour activer un mode de déplacement et mettre à jour les variables
function activateModeDeplacement(mode) {
  resetModeDeplacementSelection(); // Désactive tous les modes de déplacement

  // Activer le mode de déplacement cliqué
  const selectedMode = document.querySelector(`#chronodiv-${mode}`);
  if (selectedMode) {
    selectedMode.classList.add("active"); // Ajouter la classe active à l'élément
  }

  // Mettre à jour la variable de mode de déplacement
  modeDeplacement = mode;


}

// Ajouter des écouteurs d'événements pour les icônes de chrono
document.getElementById("chronodiv-infini").addEventListener("click", () => activateChrono("infini"));
document.getElementById("chronodiv-1s").addEventListener("click", () => activateChrono("1s"));
document.getElementById("chronodiv-10s").addEventListener("click", () => activateChrono("10s"));
document.getElementById("chronodiv-30s").addEventListener("click", () => activateChrono("30s"));

// Ajouter des écouteurs d'événements pour les icônes de mode de déplacement
document.getElementById("chronodiv-fixe").addEventListener("click", () => activateModeDeplacement("fixe"));
document.getElementById("chronodiv-mouvement").addEventListener("click", () => activateModeDeplacement("mouvement"));

// Bouton pour démarrer un round
startButton.addEventListener("click", startNewRound);

// Initialiser avec les sélections par défaut
activateChrono("infini"); // Activer chrono infini par défaut
activateModeDeplacement("mouvement"); // Mode de déplacement mouvement par défaut



async function login(username, password) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Stocke le userId et le token dans localStorage
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("token", data.token);
        console.log("Utilisateur connecté :", data.username);
      } else {
        console.error("Erreur de connexion :", data.message);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  }
  
  function showLevelUpAnimation(oldLevel, newLevel) {
    const levelUpContainer = document.getElementById("levelupcontainer");
    const oldLevelSpan = document.getElementById("oldlevel");
    const newLevelSpan = document.getElementById("newlevel");
    const nextButton = document.getElementById("Nextbutton");

    // Mettre à jour dynamiquement les niveaux
    oldLevelSpan.textContent = `Niv.${oldLevel}`;
    newLevelSpan.textContent = `Niv.${newLevel}`;

    // Afficher la div
    levelUpContainer.style.display = "flex";

    // Ajouter un événement au bouton "Suivant"
    nextButton.addEventListener("click", () => {
        levelUpContainer.style.display = "none";
    });
}

//GESTION MODE MULTI

const multiContainer = document.getElementById("multicontainer");
const multiplayerMode = document.getElementById("chrono-mode-button");
const multiMenu = document.getElementById("multimenu");
const joinmultiform = document.getElementById("joinmulti-form");
const roundNumber = document.getElementById("roundnumber");
const closemulti = document.getElementById("arrowbackmulti");
const hostButton = document.getElementById("hostbutton");
const joinButton = document.getElementById("joinbutton");
const roundPlusButton = document.getElementById("plus");
const roundMoinsButton = document.getElementById("moins");
const hostcontainer = document.getElementById("hostcontainer");
const lancermulti = document.getElementById("Feu");

const timePlusButton = document.getElementById("tempsplus");
const timeMoinsButton = document.getElementById("tempsmoins");
const roundTimer = document.getElementById("roundtimer");
let roundsToPlay = 5;
let roundTime = 50;

multiplayerMode.addEventListener("click", () =>{
    multiContainer.style.display = 'flex';
    multiMenu.style.display = 'flex';
    joinmultiform.style.display = 'none';
    audioPlayer.play(); // Joue le son
    hostcontainer.style.display = 'none';

});

closemulti.addEventListener("click",()=>{
    multiContainer.style.display = 'none';
})

joinButton.addEventListener("click",()=>{
    multiMenu.style.display = 'none';
    joinmultiform.style.display = 'flex';
})

hostButton.addEventListener("click",()=>{
    multiMenu.style.display = 'none';
    joinmultiform.style.display = 'none';
    hostcontainer.style.display = 'flex';

})

roundMoinsButton.addEventListener("click", () => {
    if (roundsToPlay <= 1) { // Vérifie si roundsToPlay est déjà au minimum
        roundsToPlay = 1;   // Reste à 0
    } else {
        roundsToPlay--;     // Diminue de 1
    }
    roundNumber.textContent = `${roundsToPlay}`; // Met à jour le contenu de la div
    console.log("moins")
    console.log("Valeur actuelle de roundsToPlay :", roundsToPlay);
});

roundPlusButton.addEventListener("click", () => {
    if (roundsToPlay >= 10) { // Vérifie si roundsToPlay est déjà au maximum
        roundsToPlay = 10;   // Reste à 10
    } else {
        roundsToPlay++;      // Augmente de 1
    }
    roundNumber.textContent = `${roundsToPlay}`;
});

timeMoinsButton.addEventListener("click", () => {
    if (roundTime <= 10) { 
        roundTime = 5; // Fixe à 5 si roundTime est inférieur ou égal à 10
    } else {
        roundTime -= 10; // Diminue roundTime de 10
    }
    roundTimer.textContent = `${roundTime}`; // Met à jour le contenu de la div
});

timePlusButton.addEventListener("click", () => {
    if (roundTime >= 90) { // Vérifie si roundsToPlay est déjà au maximum
        roundTime = 90;   // Reste à 10
    } else {
        roundTime += 10;      
    }
    roundTimer.textContent = `${roundTime}`;
});



//HEBERGEMENT
document.getElementById("hostroom").addEventListener("click", async () => {
    const rounds = parseInt(document.getElementById("roundnumber").textContent);
    const duration = parseInt(document.getElementById("roundtimer").textContent);
    const map = document.getElementById("location-select").value;

    try {
        const response = await axios.post('/api/createRoom', { rounds, duration, map });
        console.log(response); // Ajoutez ceci pour examiner la réponse
        alert(`Partie créée avec succès ! Code de la salle : ${response.data.roomCode}`);
    } catch (error) {
        console.error(error); // Ajoutez ceci pour voir l'erreur complète
        alert(`Erreur lors de la création de la salle : ${error.response?.data?.error || 'Erreur inconnue'}`);
    }
});

lancermulti.addEventListener("click",()=>{
    startNewRound(locationType)
})

//REJOINDRE
document.getElementById("joinroom").addEventListener("click", async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const roomCode = document.getElementById("roomcode").value;
    const playerName = prompt("Entrez votre nom :");

    try {
        const response = await axios.post('/api/joinRoom', { roomCode, playerName });
        alert(`Rejoint avec succès la salle ${roomCode}`);
        console.log("Joueurs dans la salle :", response.data.players);
    } catch (error) {
        alert(`Erreur : ${error.response.data.error}`);
    }
});


//DETAILS DE PARTIE
const getRoomDetails = async (roomCode) => {
    try {
        const response = await axios.get(`/api/getRoom?roomCode=${roomCode}`);
        console.log("Détails de la salle :", response.data);
    } catch (error) {
        console.error("Erreur lors de la récupération de la salle :", error);
    }
};