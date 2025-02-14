let map, panorama, polyline;
//import axios from 'axios';
let playerMarker, actualMarker;
let actualLocation;
let scoreBanner = document.getElementById('score-banner');
let roundStartTime; 
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
let badgeButton = document.getElementById('badgeButton');
let arrowbadge = document.getElementById('arrowbadge');
let totalScore = 0;
let attempts = 0;
const maxAttempts = 5;
const username = localStorage.getItem('username');
const ActualLevel = localStorage.getItem('level');
let PlayerXP = 0;
let currentRound = 0;
let locationType
const audioPlayer = document.getElementById('audioPlayer');
const GoogleButton = document.getElementById('googlebutton');
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
const userId = localStorage.getItem("userId");
let distanceKilometrique = 0;
let badgesAcquis = 0;
let badgesTotaux=0;
// Remplacer ceci par votre vraie clé API
const googleMapsApiKey = 'AIzaSyAUPG5ygE36Pd45w23U157bjffFqJ0Obcg'; // Remplacez par la clé exacte obtenue depuis Google Cloud Console

// Charger directement le script Google Maps
const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap&libraries=geometry&loading=async`;
googleMapsScript.async = true;
googleMapsScript.defer = true;
document.body.appendChild(googleMapsScript);




function initMap() {
    loadUserFromAPI()
    console.log('Google Maps a été chargé avec succès !');
    loadActiveBadge();
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
        //showBadgeNotification(["halsacien"]);
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
    streetViewElement.classList.add('blur'); // Ajouter le flou streetview
    roundStartTime = Date.now(); // Enregistre l'heure de début du round
    let preCountdown = 5

    // Réinitialisation selon le mode de jeu
    if (locationType === 'Strasbourg') {
        clearMapStrasbourg(); // Réinitialise et centre sur Strasbourg
        getRandomStreetViewLocation(locationType);
    } else if (locationType === 'north-america') {
        clearMapNorthAmerica(); // Réinitialise et centre sur les États-Unis
        getRandomStreetViewLocation(locationType);
    } else {
        clearMap(); // Réinitialise la carte de manière classique
        getRandomStreetViewLocation(locationType);
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
    preparationtimer.classList.remove("hidden"); //Reveler le compte a rebourd
    preparationtimer.textContent = `Préparation... ${preCountdown}s`; // Affiche le pré-compte à rebours

    const preCountdownInterval = setInterval(() => {
        preCountdown -= 1;
        //console.log(preCountdown);
        preparationtimer.textContent = `Préparation... ${preCountdown}s`;

        if (preCountdown <= 1) {
            clearInterval(preCountdownInterval);
            preparationtimer.classList.add("hidden"); //Cacher le compte a rebourd
            streetViewElement.classList.remove('blur'); // Enlever le flou de streetview
            startMainTimer();
            let preCountdown = 5

        }
    }, 1000);

    // GESTION DES MARQUEURS DE CARTES
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
        document.getElementById("result").style.display = "none";
    });
});

let selectedLocation = "world"; // Valeur par défaut

function getLocationType() {
    const selectElement = document.getElementById('location-select');
    locationType = selectElement.value;
    console.log("Location type sélectionné : ", locationType);
}

function locationsave(locationType) {
    selectedLocation = locationType; // Mettre à jour la variable globale
}

function showBadgeNotification(unlockedBadges) {
    if (!unlockedBadges || unlockedBadges.length === 0) return;

    // Récupération correcte des éléments
    const popupa = document.getElementById("popupbadgemain");
    const popupimg = document.getElementById("popupbadgeimg");
    const popuptitre = document.getElementById("popupbadgetitre"); // Titre du badge
    const popuptext = document.getElementById("popupbadgetxt"); // Texte du badge

    if (!popupa || !popupimg || !popuptitre || !popuptext) {
        console.error("Les éléments du popup de badge sont introuvables !");
        return;
    }

    const badgeSound = new Audio("/ckoi.m4a");

    unlockedBadges.forEach((badge, index) => {
        setTimeout(() => {
            // Met à jour l'image, le titre et le texte du badge
            popupimg.src = `/badge/${badge.charAt(0).toUpperCase() + badge.slice(1).toLowerCase().replace(/ /g, "_")}.png`;
            popuptitre.textContent = "🎖️ Nouveau badge débloqué !";
            popuptext.textContent = badge;

            // Joue le son
            badgeSound.currentTime = 0;
            badgeSound.play().catch(error => console.error("Erreur lors de la lecture du son :", error));

            // Déclenche l'animation
            popupa.classList.remove("activate");
            popupimg.classList.remove("rotation");

            setTimeout(() => {
                popupa.classList.add("activate");
                popupimg.classList.add("rotation");
            }, 10);

            // Masquer après 2.5s
            setTimeout(() => {
                popupa.classList.remove("activate");
                popupimg.classList.remove("rotation");
            }, 2500);

        }, index * 3000);
    });
}

// ✅ DOMContentLoaded uniquement pour l'initialisation
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM chargé !");
});

async function endGame() {
    const locationType = document.getElementById("location-select").value; 
    locationsave(locationType); 

    // Points bonus en fonction du mode de jeu
    const bonusPointsMap = {
        "world": 3000,
        "Strasbourg": 100,
        "France": 1000,
        "europe": 2000,
        "north-america": 2000,
        "famous": 1000,
        "Capitales": 1000,
    };

    const bonusPoints = bonusPointsMap[locationType] || 0;
    const finalScore = totalScore + bonusPoints + chronoBonus;

    result.textContent = `Jeu terminé ! Votre score total est de : ${finalScore} (Bonus : ${bonusPoints} points)`;
    document.getElementById("result").style.display = "block";

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("authToken");

    if (!userId || !token) {
        console.error("Utilisateur non authentifié. Impossible d'enregistrer le score.");
        return;
    }

    // 🔥 Récupération du badge actif
    let activeBadge = null;
    try {
        const badgeResponse = await fetch(`/api/getActiveBadge?userId=${userId}`);
        if (!badgeResponse.ok) throw new Error("Erreur API getActiveBadge");

        const badgeData = await badgeResponse.json();
        activeBadge = badgeData.activeBadge || null; // Assurez-vous que le badge est bien défini

    } catch (error) {
        console.error("Erreur lors du chargement du badge actif :", error);
    }

    // Vérification des badges à débloquer
    const unlockedBadges = checkAndUnlockBadges(finalScore, locationType, chronoSelection);

    try {
        const response = await fetch("/api/updateScore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ userId, score: finalScore, locationSelect: locationType, badges: unlockedBadges, activeBadge: activeBadge }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Score enregistré avec succès :", data);

            const { oldLevel, newLevel, experience } = data;
            localStorage.setItem("level", newLevel);

            PlayerXP = experience;

            if (newLevel > oldLevel) {
                showLevelUpAnimation(oldLevel, newLevel);
            }

            // Affichage des badges débloqués
            if (unlockedBadges.length > 0) {
                showBadgeNotification(unlockedBadges);
            }

        } else {
            console.error("Erreur lors de l'enregistrement du score :", data.message);
        }
    } catch (error) {
        console.error("Erreur réseau :", error);
    }

    scoreBanner.style.display = 'none';
    continueButton.style.display = 'none';

    fetchTopScores();
    resetGame();
}



function checkAndUnlockBadges(finalScore, location, chronoSelection) {
    let unlockedBadges = [];

    const badgeConditions = [
        { name: "5", score: 5, location: "Strasbourg", chrono: "1s" },
        { name: "10", score: 10, location: "Strasbourg", chrono: "1s" },
        { name: "20", score: 20, location: "Strasbourg", chrono: "1s" },
        { name: "30", score: 30, location: "Strasbourg", chrono: "1s" },
        { name: "40", score: 40, location: "Strasbourg", chrono: "1s" },
        { name: "50", score: 50, location: "Strasbourg", chrono: "1s" },
        { name: "60", score: 60, location: "Strasbourg", chrono: "1s" },
        { name: "70", score: 70, location: "Strasbourg", chrono: "1s" },
        { name: "80", score: 80, location: "Strasbourg", chrono: "1s" },
        { name: "90", score: 90, location: "Strasbourg", chrono: "1s" },
        { name: "100", score: 100, location: "Strasbourg", chrono: "1s" },
        { name: "Choucroute", score: 25000, location: "Strasbourg", chrono: "1s" },
        { name: "Halsacien", score: 25000, location: "Strasbourg", chrono:"infini"},
        { name: "Globetrotter", score: 15000, location: "world", chrono:"infini" },
        { name: "Conqueror", score: 20000, location: "world", chrono: "1s" },
        { name: "Croissant", score: 20000, location: "France", chrono:"infini" },
        { name: "Marine", score: 20000, location: "France", chrono: "1s" },
        { name: "Voyageur", score: 20000, location: "europe", chrono:"infini" },
        { name: "Blitzkrieg", score: 15000, location: "europe", chrono: "1s" },
        { name: "Aigle", score: 15000, location: "north-america", chrono: "1s" },
        { name: "CowBoy", score: 15000, location: "north-america", chrono:"infini" },
        { name: "Pionnier", score: 20000, location: "north-america", chrono:"infini" },
        { name: "Archeologue", score: 20000, location: "famous", chrono: "1s" },
        { name: "Reporter", score: 15000, location: "famous", chrono:"infini" },
        { name: "DucdeAgass", score: 15000, location: "Capitales", chrono:"infini" },
        { name: "RoutardPro", score: 20000, location: "Capitales", chrono:"infini" }
    ];

    const badgeExtras=[
        { name: "Rien", score: distanceKilometrique, location: "world", chrono:"1s" },
        {badgeName : "Desir", score: 200000, location: "famous", chrono:"infini"},
        { name: "Accompli", score: 200000, location: "Capitales", chrono:"infini" }
    ]

    badgeConditions.forEach(badge => {
        if (finalScore >= badge.score && location === badge.location) {
            if (!badge.chrono || chronoSelection === badge.chrono) {
                unlockedBadges.push(badge.name);
            }
            if(ActualLevel>=badge.score){
                unlockedBadges.push(badge.name);
            }
        }
    });
    badgeExtras.forEach(badge => {
        if (finalScore >= 57000 && location === badge.location) {
            if (!badge.chrono || chronoSelection === badge.chrono) {
                unlockedBadges.push(badge.name);
            }
        }
        if(badgesAcquis===badgesTotaux){
                unlockedBadges.push("Accompli");
            }
        if(finalScore % 100 === 69){
                unlockedBadges.push("Desir");
            }
        }
    );

    return unlockedBadges;
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

        const topScoresByLocation = await response.json();
        const dataContainer = document.getElementById("dataContainer");

        if (!dataContainer) {
            console.error("Erreur : Impossible de trouver l'élément #dataContainer.");
            return;
        }

        // Vide le container avant d'ajouter de nouveaux scores
        dataContainer.innerHTML = "";

        // Parcourir chaque localisation et afficher son top 5
        Object.entries(topScoresByLocation).forEach(([location, scores, activeBadge]) => {
            // Limiter les scores à 5 meilleurs, même si l'API renvoie plus
            const top5Scores = scores.slice(0, 5);

            const locationSection = document.createElement("div");
            locationSection.classList.add("classement-section");

            const title = document.createElement("h3");
            title.textContent = `${location}`;
            locationSection.appendChild(title);

            const scoreList = document.createElement("div");
            scoreList.classList.add("classement-list");

            if (top5Scores.length === 0) {
                const noData = document.createElement("p");
                noData.textContent = "Aucun score enregistré.";
                scoreList.appendChild(noData);
            } else {
                top5Scores.forEach((user, index) => {
                    const listItem = document.createElement("div");
                    listItem.classList.add("classement-item", `position-${index + 1}`);
                
                    // 🔥 Utiliser le badge actif enregistré avec le score
                    let badgeImgSrc = user.activeBadge ? `./badge/${user.activeBadge}.png` : "./badge/0.png";
                
                    // Ajout de l'image du badge
                    const badgeImg = document.createElement("img");
                    badgeImg.src = badgeImgSrc;
                    badgeImg.alt = `Badge de ${user.username}`;
                    badgeImg.style.height = "50px";
                
                    // Création de l'élément texte avec le nom et le score du joueur
                    const textElement = document.createElement("span");
                    textElement.textContent = `${user.username} - Score: ${user.score}`;
                
                    // Ajout des éléments à la liste
                    listItem.appendChild(badgeImg);
                    listItem.appendChild(textElement);
                    scoreList.appendChild(listItem);
                });
            }

            locationSection.appendChild(scoreList);
            dataContainer.appendChild(locationSection);
        });

    } catch (error) {
        console.error("Erreur lors de la récupération des scores :", error);
    }
}

const urbanAreas = [
    { lat: 47.606209, lng: -122.332069, name: "Seattle, WA" }, // Seattle
    { lat: 45.515232, lng: -122.678385, name: "Portland, OR" }, // Portland
    { lat: 43.615021, lng: -116.202316, name: "Boise, ID" }, // Boise
    { lat: 42.850076, lng: -106.325173, name: "Casper, WY" }, // Casper
    { lat: 46.909797, lng: -98.708436, name: "Jamestown, ND" }, // Jamestown
    { lat: 40.813616, lng: -96.702595, name: "Lincoln, NE" }, // Lincoln
    { lat: 40.760779, lng: -111.891047, name: "Salt Lake City, UT" }, // Salt Lake City
    { lat: 39.529633, lng: -119.813803, name: "Reno, NV" }, // Reno
    { lat: 38.581572, lng: -121.494400, name: "Sacramento, CA" }, // Sacramento
    { lat: 37.774929, lng: -122.419416, name: "San Francisco, CA" }, // San Francisco
    { lat: 37.338208, lng: -121.886329, name: "San José, CA" }, // San José
    { lat: 39.739235, lng: -104.990250, name: "Denver, CO" }, // Denver
    { lat: 33.448376, lng: -112.074036, name: "Phoenix, AZ" }, // Phoenix
    { lat: 34.052235, lng: -118.243683, name: "Los Angeles, CA" }, // Los Angeles
    { lat: 35.084385, lng: -106.650422, name: "Albuquerque, NM" }, // Albuquerque
    { lat: 35.687000, lng: -105.937799, name: "Santa Fe, NM" }, // Santa Fe
    { lat: 35.467560, lng: -97.516428, name: "Oklahoma City, OK" }, // Oklahoma City
    { lat: 32.776664, lng: -96.796988, name: "Dallas, TX" }, // Dallas
    { lat: 39.099727, lng: -94.578567, name: "Kansas City, MO" }, // Kansas City
    { lat: 30.267153, lng: -97.743061, name: "Austin, TX" }, // Austin
    { lat: 35.149532, lng: -90.048980, name: "Memphis, TN" }, // Memphis
    { lat: 32.298757, lng: -90.184810, name: "Jackson, MS" }, // Jackson
    { lat: 29.951065, lng: -90.071533, name: "New Orleans, LA" }, // New Orleans
    { lat: 30.332184, lng: -81.655647, name: "Jacksonville, FL" }, // Jacksonville
    { lat: 38.627003, lng: -90.199404, name: "St. Louis, MO" }, // St. Louis
    { lat: 41.878113, lng: -87.629799, name: "Chicago, IL" }, // Chicago
    { lat: 44.977753, lng: -93.265011, name: "Minneapolis, MN" }, // Minneapolis
    { lat: 43.038902, lng: -87.906471, name: "Milwaukee, WI" }, // Milwaukee
    { lat: 42.331427, lng: -83.045753, name: "Detroit, MI" }, // Detroit
    { lat: 38.252665, lng: -85.758456, name: "Louisville, KY" }, // Louisville
    { lat: 40.440625, lng: -79.995886, name: "Pittsburgh, PA" }, // Pittsburgh
    { lat: 41.499321, lng: -81.694361, name: "Cleveland, OH" }, // Cleveland
    { lat: 36.162664, lng: -86.781602, name: "Nashville, TN" }, // Nashville
    { lat: 43.659099, lng: -70.256820, name: "Portland, ME" }, // Portland, Maine
    { lat: 40.712776, lng: -74.005974, name: "New York, NY" }, // New York
    { lat: 39.952583, lng: -75.165222, name: "Philadelphia, PA" }, // Philadelphie
    { lat: 39.290386, lng: -76.612190, name: "Baltimore, MD" }, // Baltimore
    { lat: 38.907192, lng: -77.036873, name: "Washington, DC" }, // Washington
    { lat: 39.103119, lng: -84.512016, name: "Cincinnati, OH" }, // Cincinnati
    { lat: 36.850769, lng: -76.285873, name: "Norfolk, VA" }, // Norfolk
    { lat: 35.227085, lng: -80.843124, name: "Charlotte, NC" }, // Charlotte
    { lat: 35.960638, lng: -83.920739, name: "Knoxville, TN" }, // Knoxville
    { lat: 34.000710, lng: -81.034814, name: "Columbia, SC" }, // Columbia
    { lat: 34.225727, lng: -77.944710, name: "Wilmington, NC" }, // Wilmington
    { lat: 39.364285, lng: -74.422935, name: "Atlantic City, NJ" }, // Atlantic City
    { lat: 32.379223, lng: -86.307736, name: "Montgomery, AL" }, // Montgomery
    { lat: 32.080898, lng: -81.091203, name: "Savannah, GA" }, // Savannah
    { lat: 29.585365, lng: -81.207869, name: "Palm Coast, FL" }, // Palm Coast
    { lat: 30.762990, lng: -86.570507, name: "Crestview, FL" }, // Crestview
    { lat: 30.451468, lng: -91.187146, name: "Baton Rouge, LA" }, // Baton Rouge
    { lat: 26.640628, lng: -81.872308, name: "Fort Myers, FL" }, // Fort Myers
    { lat: 27.950575, lng: -82.457178, name: "Tampa, FL" }, // Tampa
    { lat: 26.358689, lng: -80.083098, name: "Boca Raton, FL" }, // Boca Raton
    { lat: 33.749000, lng: -84.387982, name: "Atlanta, GA" }, // Atlanta
    { lat: 41.256538, lng: -95.934502, name: "Omaha, NE" }, // Omaha
    { lat: 40.585260, lng: -105.084423, name: "Fort Collins, CO" }, // Fort Collins
    { lat: 44.877182, lng: -98.518226, name: "Redfield, SD" }, // Redfield
    { lat: 43.544596, lng: -96.731103, name: "Sioux Falls, SD" } // Sioux Falls
]
// Sélectionner un point aléatoire parmi les villes listées


function getRandomStreetViewLocation(locationType) {
    const svService = new google.maps.StreetViewService();

    if (locationType === 'world') {
        // Générer des coordonnées aléatoires dans le monde entier
        const randomLat = Math.random() * 180 - 90; // Latitude entre -90 et 90
        const randomLng = Math.random() * 360 - 180; // Longitude entre -180 et 180
        const latLng = new google.maps.LatLng(randomLat, randomLng);

        // Utiliser l'API pour trouver un panorama dans un rayon de 50 km
        svService.getPanorama({ location: latLng, radius: 50000, source: google.maps.StreetViewSource.OUTDOOR, }, (data, status) => {
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
        // Vérification que urbanAreas existe bien
        if (!urbanAreas || urbanAreas.length === 0) {
            console.error("La liste urbanAreas est vide ou non définie !");
            return;
        }

        const randomIndex = Math.floor(Math.random() * urbanAreas.length);
        const baseLocation = urbanAreas[randomIndex];

        // Ajouter une légère variation (~5 km)
        const randomLat = baseLocation.lat + (Math.random() - 0.5) * 0.09;
        const randomLng = baseLocation.lng + (Math.random() - 0.5) * 0.09;
        const latLng = new google.maps.LatLng(randomLat, randomLng);

        //console.log(`Recherche Street View proche de ${baseLocation.name} (${randomLat}, ${randomLng})`);

        svService.getPanorama(
            {
                location: latLng,
                radius: 500,
                source: google.maps.StreetViewSource.OUTDOOR,
            },
            (data, status) => {
                if (status === 'OK' && data && data.location) {
                    if (data.location.pano && data.links.length > 0) {
                        actualLocation = data.location.latLng;
                        panorama.setPosition(actualLocation);
                    } else {
                        console.warn("Street View non valide, nouvel essai...");
                        getRandomStreetViewLocation('north-america');
                    }
                } else {
                    console.warn("Aucun panorama trouvé, nouvel essai...");
                    getRandomStreetViewLocation('north-america');
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
                radiusInKm = .15;
                break;
            case 'Strasbourg':
                filteredLocations = locations.filter(location => location.ville === 'Strasbourg');
                radiusInKm = 0.30; // Rayon 0 pour Strasbourg
                break;
            case 'France':
                filteredLocations = locations.filter(location => location.pays === 'France');
                radiusInKm = 2;
                break;
            case 'famous':
                filteredLocations = locations.filter(location => location.mode === 'famous'); 
                radiusInKm = 0.05; // Rayon 0 pour famous
                break;
            default:
                filteredLocations = locations;
                break;
        }

        const randomIndex = Math.floor(Math.random() * filteredLocations.length);
        const selectedLocation = filteredLocations[randomIndex];

        const randomLocation = getRandomLocationWithinRadius(selectedLocation.lat, selectedLocation.lng, radiusInKm);

        const latLng = new google.maps.LatLng(randomLocation.lat, randomLocation.lng);
        svService.getPanorama({ location: latLng, radius: 500, source: google.maps.StreetViewSource.OUTDOOR }, processSVData);
    }
}
function getRandomAfricaCoordinates() {
    const minLat = -35.0;
    const maxLat = 37.0;
    const minLng = -20.0;
    const maxLng = 55.0;

    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;

    return { lat: randomLat, lng: randomLng };
}

function calculateScore(playerLocation) {
    const distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(playerLocation, actualLocation);
    let roundScore;

    // Calcul du score basé sur la distance
    if (distanceInMeters <= 5) {
        roundScore = 5000;
    } else if (distanceInMeters <= 2000) {
        roundScore = Math.max(0, 5000 - Math.floor(distanceInMeters - 5));
    } else {
        const distanceInKm = distanceInMeters / 1000;
        roundScore = Math.max(0, 5000 - 1995 - Math.floor(distanceInKm - 2));
        distanceKilometrique = distanceKilometrique+distanceInKm;
    }

    // Calcul du temps pris pour le round
    const roundEndTime = Date.now();
    const timeTaken = (roundEndTime - roundStartTime) / 1000; // Temps en secondes

    // Calcul du malus basé sur le temps
    let timePenalty = 0;
    if (timeTaken > 15) {
        timePenalty = Math.floor((timeTaken - 15) * 8);
    }

    // Appliquer le malus au score du round
    roundScore = Math.max(0, roundScore - timePenalty);

    totalScore += roundScore;
    attempts++;

    const distanceText = distanceInMeters < 1000
        ? `${distanceInMeters.toFixed(0)} m`
        : `${(distanceInMeters / 1000).toFixed(2)} km`;

    scoreBanner.textContent = `Score: ${roundScore} (Distance: ${distanceText}, Temps: ${timeTaken.toFixed(1)}s, Malus: ${timePenalty} points)`;
    scoreBanner.style.display = 'block';
    nameplace.style.display = 'block';

    if (currentPlaceName) {
        nameplace.textContent = currentPlaceName;
    } else {
        nameplace.textContent = "";
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
let chronoBonus = 0;
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
        chronoBonus=0;
        break;
      case "1s":
        roundTimeLimit = 1;
        chronoBonus=3000;
        break;
      case "10s":
        roundTimeLimit = 10;
        chronoBonus=1000;
        break;
      case "30s":
        roundTimeLimit = 30;
        chronoBonus=200;
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
        updateHeader();
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

    loadActiveBadge()
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


//LIRE LES INFOS DU JOUEUR

const ArrowCompte = document.getElementById("arrowcompte");
const compteContainer = document.getElementById("comptecontainer");

ArrowCompte.addEventListener("click", () =>{
    compteContainer.style.display = "none";
});

document.getElementById('clear-storage-button').addEventListener('click', () => {
    compteContainer.style.display = "flex";
    loadActiveBadge()
    loadUserFromAPI();
});




// Fonction pour récupérer les données utilisateur depuis l'API et les afficher
async function loadUserFromAPI() {
    const userId = localStorage.getItem("userId");  // Récupérer l'ID utilisateur depuis le localStorage

    if (!userId) {
        console.error("Aucun ID utilisateur trouvé dans le localStorage");
        return;
    }

    try {
        // Effectuer une requête GET pour récupérer les données utilisateur depuis l'API
        const response = await fetch(`/api/getUserBadges?userId=${userId}`);

        const userData = await response.json();

        // Récupérer les badges débloqués
        const unlockedBadges = Object.keys(userData.badges || {})
            .filter(badge => userData.badges[badge] === true)
            .map(badge => String(badge));

        // Mettre à jour le nombre total de badges
        const totalBadges = badgeList.length;
        const unlockedCount = unlockedBadges.length;
        console.log(totalBadges)
        console.log(unlockedCount)

        // Mettre à jour dynamiquement la balise <p> avec la progression
        const badgeProgress = document.getElementById("badgeProgress");
        badgeProgress.textContent = `${unlockedCount}/${totalBadges}`;
        badgesAcquis=unlockedCount;
        badgesTotaux=totalBadges;
        
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données utilisateur");
        }

        // Vérifier que les données nécessaires sont présentes
        const { badges, experience, level, username } = userData;

        // Insérer les informations utilisateur dans le HTML
        document.getElementById("informationID").textContent = `ID : ${userId}`;
        document.getElementById("informationName").textContent = `Username : ${username}`;
        document.getElementById("informationLvl").textContent = `Niveau : ${level}`;
        document.getElementById("informationXP").textContent = `Experience : ${experience} points`;

    } catch (error) {
        console.error("Erreur lors du chargement des données utilisateur depuis l'API :", error);
    }
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
const lobby = document.getElementById("lobbycontainer");

const timePlusButton = document.getElementById("tempsplus");
const timeMoinsButton = document.getElementById("tempsmoins");
const roundTimer = document.getElementById("roundtimer");
let roundsToPlay = 5;
let roundTime = 50;





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




//AFFICHAGE DE LA LISTE DE BADGES AVEC BADGE ACQUIS EN VISIBLE
// AFFICHAGE DE LA LISTE DE BADGES AVEC BADGE ACQUIS EN VISIBLE
document.getElementById("badgeButton").addEventListener("click", async (e) => {
    e.preventDefault();

    document.getElementById('badgecontainer').style.display = 'flex';
    const badgesListContainer = document.getElementById('badgeslistcontainer');
    badgesListContainer.innerHTML = "";

    try {
        // Récupérer les badges de l'utilisateur via l'API
        const response = await fetch(`/api/getUserBadges?userId=${userId}`);
        if (!response.ok) {
            throw new Error("Erreur API");
        }

        const userData = await response.json();

        // Récupérer les badges débloqués
        const unlockedBadges = Object.keys(userData.badges || {})
            .filter(badge => userData.badges[badge] === true)
            .map(badge => String(badge));

        // Mettre à jour le nombre total de badges
        const totalBadges = badgeList.length;
        const unlockedCount = unlockedBadges.length;
        console.log(totalBadges)
        console.log(unlockedCount)

        // Mettre à jour dynamiquement la balise <p> avec la progression
        const badgeProgress = document.getElementById("badgeProgress");
        badgeProgress.textContent = `${unlockedCount}/${totalBadges}`;
        badgesAcquis=unlockedCount;
        badgesTotaux=totalBadges;

        // Affichage des badges
        badgeList.forEach((badge, index) => {
            const badgeSection = document.createElement("button");
            badgeSection.classList.add("badgesection");

            const badgeImg = document.createElement("img");
            badgeImg.src = badge.badgesrc;
            badgeImg.alt = badge.valeur;
            badgeImg.height = 200;
            badgeImg.classList.add(`${index}`, "imgtest");

            if (unlockedBadges.includes(String(badge.valeur))) {
                badgeImg.classList.add(`badge-${index}`, "valid");
            } else {
                badgeImg.classList.add(`badge-${index}`, "unvalid");
            }

            badgeSection.appendChild(badgeImg);
            badgesListContainer.appendChild(badgeSection);
        });

    } catch (error) {
        console.error("Erreur lors de la récupération des badges:", error);
    }
});



//CHANGEMENT DU BADGE

// Variable pour le badge actif du joueur
let ActiveBadge = "5"; // Exemple, initialiser avec un badge par défaut

// Récupération et affichage du badge actif au chargement de la page
async function loadActiveBadge() {
    try {
        const response = await fetch(`/api/getActiveBadge?userId=${userId}`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération du badge actif");
        }

        const data = await response.json();

        if (data.activeBadge) {
            // Met à jour l'image du badge
            const activeBadge = badgeList.find(badge => badge.valeur === data.activeBadge);
            if (activeBadge) {
                document.getElementById("playerbadge").src = activeBadge.badgesrc;
                document.getElementById("levelupbadge").src = activeBadge.badgesrc;
            }
        }
    } catch (error) {
        console.error("Erreur lors du chargement du badge actif :", error);
    }
}

// Fonction pour changer et enregistrer le badge actif
document.getElementById("changeBadgeButton").addEventListener("click", async (e) => {
    e.preventDefault();

    document.getElementById('badgecontainer').style.display = 'flex';
    const badgesListContainer = document.getElementById('badgeslistcontainer');
    badgesListContainer.innerHTML = "";

    try {
        const response = await fetch(`/api/getUserBadges?userId=${userId}`);
        
        if (!response.ok) {
            throw new Error("Erreur API");
        }

        const userData = await response.json();
        const unlockedBadges = Object.keys(userData.badges || {}).filter(badge => userData.badges[badge] === true);

        badgeList.forEach((badge, index) => {
            if (unlockedBadges.includes(String(badge.valeur))) {
                const badgeSection = document.createElement("button");
                badgeSection.classList.add("badgesection");

                const badgeImg = document.createElement("img");
                badgeImg.src = badge.badgesrc;
                badgeImg.alt = badge.valeur;
                badgeImg.height = 200;
                badgeImg.classList.add(`badge-${index}`, "valid");

                badgeSection.appendChild(badgeImg);
                badgesListContainer.appendChild(badgeSection);

                // Enregistrer le badge choisi
                badgeSection.addEventListener("click", async () => {
                    document.getElementById("playerbadge").src = badge.badgesrc;

                    try {
                        const saveResponse = await fetch(`/api/setActiveBadge`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ userId, activeBadge: badge.valeur })
                        });

                        if (!saveResponse.ok) {
                            throw new Error("Erreur lors de l'enregistrement du badge");
                        }

                        document.getElementById('badgecontainer').style.display = 'none';
                        console.log("Badge mis à jour");
                    } catch (error) {
                        console.error("Erreur lors de la sauvegarde du badge :", error);
                    }
                });
            }
        });

    } catch (error) {
        console.error("Erreur lors de la récupération des badges:", error);
    }
});

// Charger le badge actif au démarrage
window.addEventListener("load", loadActiveBadge);




// Sélectionner le conteneur de détail du badge
let BadgeDetail = document.querySelector(".badgedetailcontainerblur");

document.body.addEventListener("click", async (e) => {
    if (e.target.classList.contains("imgtest")) {
        e.preventDefault(); // Empêche le comportement par défaut du bouton
        
        // Trouver la classe qui contient l'index (ex: "badge-2")
        const badgeClass = [...e.target.classList].find(cls => cls.startsWith("badge-"));
        const index = badgeClass ? badgeClass.split("-")[1] : "inconnu";

        //console.log(`Clic sur le badge index : ${index}`);

        // Récupérer les informations du badge en fonction de l'index
        const badge = badgeList[index]; // index correspond à la position du tableau

        // Vérifier que le badge existe dans le tableau
        if (badge) {
            // Mettre à jour le contenu de la vue détaillée du badge
            const badgeDetailImg = document.querySelector(".badgedetailcontainerimg");
            const badgeDetailTitle = document.querySelector(".badgedetailcontainertitle");
            const badgeDetailText = document.querySelector(".badgedetailcontainertext");

            // Mettre à jour l'image
            badgeDetailImg.src = badge.badgesrc;
            badgeDetailImg.alt = badge.badgeName;

            // Mettre à jour le titre et la description
            badgeDetailTitle.textContent = badge.badgeName;
            badgeDetailText.textContent = badge.badgeDesc;

            // Afficher le détail du badge
            BadgeDetail.classList.add("visible");
        }
    }
});

// Fermer le détail du badge lorsque l'on clique en dehors
document.querySelector(".badgedetailcontainerblur").addEventListener("click", (e) => {
    if (e.target === BadgeDetail) {
        BadgeDetail.classList.remove("visible");
    }
});


document.getElementById("arrowbadge").addEventListener("click", async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    document.getElementById('badgecontainer').style.display = 'none';

});



