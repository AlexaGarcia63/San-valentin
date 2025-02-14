// --------------------------
// 🔥 Variables🔥
// --------------------------


// Variable para controlar si la cuenta regresiva debe actualizarse
let isCountdownActive = false;

/*************************************************************************************************************************/

// --------------------------
// 🔥 Álbum de fotos 🔥
// --------------------------

// Función para mostrar el álbum de fotos
function showAlbum() {
    document.getElementById("songs-container").style.display = "none";
    document.getElementById("reasons-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "none";
    document.getElementById("album").style.display = "block";
    isCountdownActive = false; // Detener la cuenta regresiva
}

// Función para mostrar el mensaje en la galería de fotos o canciones
function showMessage(index) {
    document.querySelectorAll(".message").forEach(msg => msg.classList.add("hidden"));
    document.getElementById(`message${index + 1}`).classList.remove("hidden");
}

/***********************************************************************************************************************/

// --------------------------
// 🔥 Nuestras canciones 🔥
// --------------------------


// Función para mostrar las canciones
function showSongs() {
    document.getElementById("album").style.display = "none";
    document.getElementById("reasons-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "none";
    document.getElementById("songs-container").style.display = "block";
    isCountdownActive = false; // Detener la cuenta regresiva
}

// Reproducir canción y mostrar mensaje
function playSong(songKey) {
    const songTitle = {
        "video_games": "🎮 Hay amores que se sienten como un videojuego infinito",
        "sweater_weather": "🌧️ Las palabras no siempre son suficientes, pero el clima ayuda",
        "i_wanna_be_yours": "✒️ Si pudieras ser poesía, serías mi favorita",
        "fireproof": "🔥 Algunas cosas simplemente duran para siempre",
        "die_for_you": "🖤 Te amo incluso en mis peores días",
        "perfect": "💍 Algunas historias de amor sí tienen un final feliz",
        "sunflower": "🌻 Tú eres mi sol, incluso en los días más oscuros",
        "halleys_comet": "✨ Si el universo tuviera un sonido, se parecería a ti",
        "late_night_talking": "🌙 Las mejores conversaciones ocurren a media noche",
        "baby_im_yours": "⏳ Siempre serás el 'para siempre' que quiero",
        "born_to_die": "🌹 Algunas promesas duran vidas enteras",
        "la_vuelta_al_mundo": "✈️ Si amar es un viaje, contigo iría al fin del mundo",
        "birds_of_a_feather": "🕊️ El destino tenía escrito esto para nosotros",
        "hostage": "🚪 Algunas personas te atrapan sin remedio",
        "lovely": "💫 Si el amor tuviera sonido, sería como esta canción",
        "juno": "💋 Me encantas, aunque seas un caos",
        "bed_chem": "🧪 Química explosiva, pero adictiva"
    };

    const spotifyLinks = {
        "video_games": "https://open.spotify.com/embed/track/24jvD83UgLmrdGjhWTFslY?si=2bc6f9cf12bb4c2f",
        "sweater_weather": "https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6?si=7032141bfa6f4dcd",
        "i_wanna_be_yours": "https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?si=f4e78485f18344b7",
        "fireproof": "https://open.spotify.com/embed/track/34aYkYrY3sXhEU9O4VQgtB?si=80c80ea5b3404113",
        "die_for_you": "https://open.spotify.com/embed/track/2LBqCSwhJGcFQeTHMVGwy3?si=fa1829291e95414f",
        "perfect": "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?si=0469a1f541214fb2",
        "sunflower": "https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?si=a5b3dd5fd8ef4171",
        "halleys_comet": "https://open.spotify.com/embed/track/5XsAal7ZcWg1I5T4NcRjkv?si=f30d481584e84915",
        "late_night_talking": "https://open.spotify.com/embed/track/1qEmFfgcLObUfQm0j1W2CK?si=8c2b38258f3e4080",
        "baby_im_yours": "https://open.spotify.com/embed/track/0SzvmWfOhoxZVGrmvb56YL?si=8b3d1e36fce84204",
        "born_to_die": "https://open.spotify.com/embed/track/4Ouhoi2lAhrLJKFzUqEzwl?si=b163a56b3e7e405c",
        "la_vuelta_al_mundo": "https://open.spotify.com/embed/track/1jlKdNbOA90rjnt88GJnwO?si=6da70ceddd6d47bd",
        "birds_of_a_feather": "https://open.spotify.com/embed/track/6dOtVTDdiauQNBQEDOtlAB?si=71b7b05446174a06",
        "hostage": "https://open.spotify.com/embed/track/1WsEgieHsWWndAzLkmV105?si=eb1d651076f44304",
        "lovely": "https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4?si=44d7f30c37c34ae3",
        "juno": "https://open.spotify.com/embed/track/21B4gaTWnTkuSh77iWEXdS?si=8d8e069d50e84e5d",
        "bed_chem": "https://open.spotify.com/embed/track/1UHS8Rf6h5Ar3CDWRd3wjF?si=fd4f62a5a9014a8e"
    };

    // Ocultar todos los mensajes y mostrar el de la canción seleccionada
    document.querySelectorAll(".message").forEach(msg => msg.classList.add("hidden"));
    document.getElementById(`msg_${songKey}`).classList.remove("hidden");

    // Cambiar el título de la canción
    document.getElementById("song-title").innerText = songTitle[songKey];

    // Cambiar la canción en Spotify
    document.getElementById("spotify-player").src = spotifyLinks[songKey];
}

/***********************************************************************************************************************/
// --------------------------
// 🔥 Razones por las que te amo 🔥
// --------------------------


// Función para mostrar la sección Razones por las que te amo
function showReasons() {
    document.getElementById("album").style.display = "none";
    document.getElementById("songs-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "none";
    document.getElementById("reasons-container").style.display = "block";
    isCountdownActive = false; // Detener la cuenta regresiva
}

/***********************************************************************************************************************/

// --------------------------
// 🔥 Cuenta regresiva 🔥
// --------------------------


// Función para mostrar la cuenta regresiva
function showCountdown() {
    // Ocultar todas las secciones y mostrar solo la cuenta regresiva
    document.getElementById("album").style.display = "none";
    document.getElementById("songs-container").style.display = "none";
    document.getElementById("reasons-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "block";

    // Activar la cuenta regresiva
    isCountdownActive = true;
    updateCountdown();
}

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    if (!isCountdownActive) return; // Solo actualizar si la cuenta regresiva está activa

    // Fechas importantes
    const dates = {
        "Aniversario": new Date('2025-07-31'),
        "Tú cumpleaños (ya paso)": new Date('2025-02-10'),
        "Mi cumpleaños (acepto broncos)": new Date('2025-03-08')
    };

    // Mostrar cuenta regresiva para cada fecha
    let countdownHTML = "";
    for (const event in dates) {
        const date = dates[event];
        const timeLeft = getTimeRemaining(date);
        countdownHTML += `
            <div>
                <h3>${event}</h3>
                <p>Faltan <span>${timeLeft.days} días, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos y ${timeLeft.seconds} segundos</span> para ${event}</p>
            </div>
        `;
    }

    document.getElementById("countdown").innerHTML = countdownHTML;

    // Llamar a la función de nuevo después de 1 segundo
    setTimeout(updateCountdown, 1000);
}

// Función para calcular el tiempo restante
function getTimeRemaining(endDate) {
    const now = new Date();
    const timeDifference = endDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// --------------------------
// 🔥  Jueguitos 🔥
// --------------------------

// Función para mostrar la sección de Jueguitos
function showGames() {
    // Ocultar todas las secciones de contenido
    document.getElementById("album").style.display = "none";
    document.getElementById("songs-container").style.display = "none";
    document.getElementById("reasons-container").style.display = "none";
    document.getElementById("countdown-container").style.display = "none";

    // Mostrar solo la sección de Jueguitos
    document.getElementById("games-container").style.display = "block";

    // Asegurarse de ocultar el juego activo, ya sea Memorama o Puzzle
    document.getElementById("memorama-container").style.display = "none";
    document.getElementById("puzzle-container").style.display = "none";
}

// Función para mostrar el juego de memorama
function showMemorama() {
    // Asegurarse de ocultar el puzzle y mostrar memorama
    document.getElementById("puzzle-container").style.display = "none"; 
    document.getElementById("memorama-container").style.display = "block"; 

    // Ocultar las opciones de Jueguitos
    document.getElementById("games-container").style.display = "none";

    // Inicializar el juego de Memorama
    initializeMemorama();
}

// Función para mostrar el juego de puzzle
function showPuzzle() {
    // Asegurarse de ocultar memorama y mostrar puzzle
    document.getElementById("memorama-container").style.display = "none"; 
    document.getElementById("puzzle-container").style.display = "block"; 

    // Ocultar las opciones de Jueguitos
    document.getElementById("games-container").style.display = "none";
}


/***********************************************************************************************************************/

// --------------------------
// 🔥  Memorama 🔥
// --------------------------

// Función para inicializar el juego de memorama
function initializeMemorama() {
    const cardImages = [
        "memoria_cita_cine", "memoria_cita_cine_dup",
        "memoria_cita_cafeteria", "memoria_cita_cafeteria_dup",
        "memoria_cita_concierto", "memoria_cita_concierto_dup",
        "memoria_cita_figuritas", "memoria_cita_figuritas_dup",
        "memoria_cita_peliculas", "memoria_cita_peliculas_dup",
        "memoria_cita_picnic", "memoria_cita_picnic_dup"
    ];

    let cards = [];

    // Crear objetos de cartas (solo originales y su _dup)
    cardImages.forEach(img => {
        cards.push({ src: img, flipped: false, matched: false });
    });

    // Mezclar las cartas aleatoriamente
    cards = shuffleArray(cards);

    const grid = document.getElementById("memorama-grid");
    grid.innerHTML = ""; // Limpiar el grid antes de llenarlo

    // Crear las cartas y agregarlas al grid
    cards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("memorama-card");
        cardElement.setAttribute("data-index", index);

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${card.src}.jpg" alt="Carta">
                </div>
                <div class="card-back"></div> <!-- Parte trasera sin imagen, solo color rosa -->
            </div>
        `;

        cardElement.addEventListener("click", () => flipCard(cardElement, cards));

        grid.appendChild(cardElement);
    });
}

// Función para voltear la carta
function flipCard(cardElement, cards) {
    const index = cardElement.getAttribute("data-index");

    // Evitar que se volteen cartas ya emparejadas
    if (cardElement.classList.contains("flipped") || cards[index].matched || isChecking) return;

    cardElement.classList.add("flipped");

    // Obtener todas las cartas volteadas que NO están emparejadas
    const flippedCards = document.querySelectorAll(".memorama-card.flipped:not(.matched)");

    if (flippedCards.length === 2) {
        isChecking = true; // Activar el bloqueo de interacción
        setTimeout(() => checkMatch(flippedCards, cards), 1000);
    }
}

// Variable global para bloquear las interacciones mientras se verifica la coincidencia
let isChecking = false;

let failedAttempts = 0;  // Contador para intentos fallidos

// Función para verificar si las cartas volteadas coinciden
function checkMatch(flippedCards, cards) {
    const firstIndex = flippedCards[0].getAttribute("data-index");
    const secondIndex = flippedCards[1].getAttribute("data-index");

    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    if (firstCard.src.replace('_dup', '') === secondCard.src.replace('_dup', '')) {
        // Marcar las cartas como emparejadas
        firstCard.matched = true;
        secondCard.matched = true;

        // Mantenerlas volteadas y deshabilitar clics
        flippedCards.forEach(card => {
            card.classList.add("matched");
            card.style.pointerEvents = "none"; // Deshabilita clic en cartas emparejadas
        });

        // Restablecer el contador de intentos fallidos
        failedAttempts = 0;

        // Mostrar el mensaje de la pareja encontrada
        showMatchMessage(firstCard.src);
    } else {
        // Incrementar el contador de intentos fallidos
        failedAttempts++;

        // Si llegamos a 3 intentos fallidos, mostrar el mensaje "Eres bien malo amoshito"
        if (failedAttempts === 3) {
            showFailedMessage();
        }

        // Si no coinciden, volverlas a ocultar después de 1 segundo
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove("flipped"));
        }, 1000);
    }

    isChecking = false; // Rehabilitar interacción después de verificar la coincidencia
}

// Función para mostrar el mensaje de fallos
function showFailedMessage() {
    const matchMessageDiv = document.getElementById("match-message");
    const matchText = document.getElementById("match-text");

    matchText.textContent = "Eres bien malo amoshito";  // El mensaje que quieres mostrar
    matchMessageDiv.style.display = "block";  // Mostrar el mensaje en la pantalla

    // Ocultar el mensaje después de 1 segundo
    setTimeout(() => {
        matchMessageDiv.style.display = "none";  // Ocultar el mensaje
    }, 1000); // El mensaje se oculta después de 1 segundo
}

// Función para mostrar el mensaje de pareja encontrada con un mensaje personalizado
function showMatchMessage(src) {
    const matchMessageDiv = document.getElementById("match-message");
    const matchText = document.getElementById("match-text");

    // Extraer el nombre de la carta sin los prefijos y sufijos
    const cardName = src.replace('memoria_', '').replace('_dup', '').split('.')[0];  // Limpia el nombre

    // Ahora vamos a mapear correctamente cada nombre
    const messages = {
        "cita_cine": "Invitame a ver a Chimuelo",
        "cita_cafeteria": "Invitame a un cafecito",
        "cita_concierto": "Invitame a un concierto de Billie",
        "cita_figuritas": "Invitame a hacer figuritas de plastilina",
        "cita_peliculas": "Invitame a ver películas",
        "cita_picnic": "Invitame a un picnic"
    };

    // Obtener el mensaje adecuado basado en el nombre de la carta
    const message = messages[cardName] || `Invitame a una cita de ${cardName}`;  // Si no hay mensaje específico, usa el genérico

    matchText.textContent = message;  // Mostrar mensaje personalizado
    matchMessageDiv.style.display = "block";  // Mostrar el mensaje en la pantalla

    // Ocultar el mensaje después de 2 segundos
    setTimeout(() => {
        matchMessageDiv.style.display = "none";  // Ocultar el mensaje
    }, 2000); // El mensaje se oculta después de 2 segundos
}


// Función para mezclar las cartas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}


// --------------------------
// 🔥  Puzzle 🔥
// --------------------------

// Función para mostrar y configurar el puzzle con la imagen seleccionada
function startPuzzle(imageName) {
    // Ocultar las opciones de imagen
    document.getElementById("image-selector").style.display = "none";

    // Mostrar el tablero del puzzle
    const puzzleBoard = document.getElementById("puzzle-board");
    puzzleBoard.innerHTML = "";  // Limpiar el tablero antes de agregar las piezas

    // Cargar la imagen seleccionada para el puzzle
    const puzzleImage = new Image();
    puzzleImage.src = `${imageName}.jpg`; // Usa exactamente el nombre de la imagen
    puzzleImage.onload = () => {
        generatePuzzle(puzzleImage);
    };
}

// Función para dividir la imagen en piezas y generar el puzzle
function generatePuzzle(image) {
    const puzzleBoard = document.getElementById("puzzle-board");
    puzzleBoard.innerHTML = "";  // Limpia el puzzle anterior

    const puzzleSize = 4;  // Grid de 4x4
    const pieceSize = 100; // Tamaño de cada pieza en píxeles

    // Crear las piezas del puzzle
    const pieces = [];
    for (let i = 0; i < puzzleSize * puzzleSize; i++) {
        const piece = document.createElement("div");
        piece.classList.add("puzzle-piece");

        // Calcular la posición de cada pieza
        const row = Math.floor(i / puzzleSize);
        const col = i % puzzleSize;

        piece.style.width = `${pieceSize}px`;
        piece.style.height = `${pieceSize}px`;
        piece.style.backgroundImage = `url(${image.src})`;
        piece.style.backgroundSize = `${puzzleSize * pieceSize}px ${puzzleSize * pieceSize}px`; // Ajustar tamaño de fondo
        piece.style.backgroundPosition = `-${col * pieceSize}px -${row * pieceSize}px`; // Ajustar posición del fondo

        // Asignar datos de posición original
        piece.setAttribute("data-index", i);
        piece.setAttribute("data-original-position", piece.style.backgroundPosition);

        // Hacer las piezas arrastrables
        piece.setAttribute("draggable", true);
        piece.addEventListener("dragstart", dragStart);
        piece.addEventListener("dragover", dragOver);
        piece.addEventListener("drop", dropPiece);

        pieces.push(piece);
        puzzleBoard.appendChild(piece);
    }

    // Mezclar las piezas para que no estén en su lugar correcto
    shufflePieces(pieces);
}

// Funciones para mover las piezas (arrastrar y soltar)
function dragStart(e) {
    e.dataTransfer.setData("text", e.target.dataset.index);
}

function dragOver(e) {
    e.preventDefault();
}

function dropPiece(e) {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("text");
    const targetIndex = e.target.dataset.index;

    const draggedPiece = document.querySelector(`.puzzle-piece[data-index="${draggedIndex}"]`);
    const targetPiece = e.target;

    // Intercambiar las posiciones de las piezas
    const tempPosition = draggedPiece.style.backgroundPosition;
    draggedPiece.style.backgroundPosition = targetPiece.style.backgroundPosition;
    targetPiece.style.backgroundPosition = tempPosition;

    // Verificar si se completó el puzzle
    checkPuzzleComplete();
}

// Función para mezclar las piezas del puzzle al inicio
function shufflePieces(pieces) {
    const shuffledPositions = pieces.map(piece => piece.style.backgroundPosition);
    shuffledPositions.sort(() => Math.random() - 0.5); // Mezclar posiciones

    pieces.forEach((piece, index) => {
        piece.style.backgroundPosition = shuffledPositions[index];
    });
}

// Función para verificar si el puzzle está completo
function checkPuzzleComplete() {
    const pieces = document.querySelectorAll(".puzzle-piece");
    let completed = true;

    pieces.forEach(piece => {
        if (piece.style.backgroundPosition !== piece.getAttribute("data-original-position")) {
            completed = false;
        }
    });

    if (completed) {
        alert("¡Felicidades, has completado el puzzle!");
    }
}

// --------------------------
// 🔥  Puzzle Misterioso 🔥
// --------------------------

const availableImages = ["foto1", "foto2", "foto3", "foto4", "foto5", "foto6", "foto7", "foto8"];

// Función para abrir el cofre y seleccionar una imagen aleatoria
function openMysteryBox() {
    // Seleccionar una imagen aleatoria
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImage = availableImages[randomIndex];

    // Ocultar el cofre
    document.getElementById("mystery-box").style.display = "none";

    // Mostrar el tablero del puzzle
    document.getElementById("puzzle-board").style.display = "grid";

    // Iniciar el puzzle con la imagen seleccionada
    startPuzzle(selectedImage);
}

// Función para mostrar y configurar el puzzle con la imagen seleccionada
function startPuzzle(imageName) {
    const puzzleBoard = document.getElementById("puzzle-board");
    puzzleBoard.innerHTML = "";  // Limpiar el tablero antes de agregar las piezas

    // Cargar la imagen seleccionada para el puzzle
    const puzzleImage = new Image();
    puzzleImage.src = `${imageName}.jpg`; // Usa exactamente el nombre de la imagen
    puzzleImage.onload = () => {
        generatePuzzle(puzzleImage);
    };
}

// Función para dividir la imagen en piezas y generar el puzzle
function generatePuzzle(image) {
    const puzzleBoard = document.getElementById("puzzle-board");
    puzzleBoard.innerHTML = "";  // Limpia el puzzle anterior

    const puzzleSize = 4;  // Grid de 4x4
    const pieceSize = 100; // Tamaño de cada pieza en píxeles

    // Crear las piezas del puzzle
    const pieces = [];
    for (let i = 0; i < puzzleSize * puzzleSize; i++) {
        const piece = document.createElement("div");
        piece.classList.add("puzzle-piece");

        // Calcular la posición de cada pieza
        const row = Math.floor(i / puzzleSize);
        const col = i % puzzleSize;

        piece.style.width = `${pieceSize}px`;
        piece.style.height = `${pieceSize}px`;
        piece.style.backgroundImage = `url(${image.src})`;
        piece.style.backgroundSize = `${puzzleSize * pieceSize}px ${puzzleSize * pieceSize}px`; // Ajustar tamaño de fondo
        piece.style.backgroundPosition = `-${col * pieceSize}px -${row * pieceSize}px`; // Ajustar posición del fondo

        // Asignar datos de posición original
        piece.setAttribute("data-index", i);
        piece.setAttribute("data-original-position", piece.style.backgroundPosition);

        // Hacer las piezas arrastrables
        piece.setAttribute("draggable", true);
        piece.addEventListener("dragstart", dragStart);
        piece.addEventListener("dragover", dragOver);
        piece.addEventListener("drop", dropPiece);

        pieces.push(piece);
        puzzleBoard.appendChild(piece);
    }

    // Mezclar las piezas para que no estén en su lugar correcto
    shufflePieces(pieces);
}

// Funciones para mover las piezas (arrastrar y soltar)
function dragStart(e) {
    e.dataTransfer.setData("text", e.target.dataset.index);
}

function dragOver(e) {
    e.preventDefault();
}

function dropPiece(e) {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("text");
    const targetIndex = e.target.dataset.index;

    const draggedPiece = document.querySelector(`.puzzle-piece[data-index="${draggedIndex}"]`);
    const targetPiece = e.target;

    // Intercambiar las posiciones de las piezas
    const tempPosition = draggedPiece.style.backgroundPosition;
    draggedPiece.style.backgroundPosition = targetPiece.style.backgroundPosition;
    targetPiece.style.backgroundPosition = tempPosition;

    // Verificar si se completó el puzzle
    checkPuzzleComplete();
}

// Función para mezclar las piezas del puzzle al inicio
function shufflePieces(pieces) {
    const shuffledPositions = pieces.map(piece => piece.style.backgroundPosition);
    shuffledPositions.sort(() => Math.random() - 0.5); // Mezclar posiciones

    pieces.forEach((piece, index) => {
        piece.style.backgroundPosition = shuffledPositions[index];
    });
}

// Función para verificar si el puzzle está completo
function checkPuzzleComplete() {
    const pieces = document.querySelectorAll(".puzzle-piece");
    let completed = true;

    pieces.forEach(piece => {
        if (piece.style.backgroundPosition !== piece.getAttribute("data-original-position")) {
            completed = false;
        }
    });

    if (completed) {
        alert("¡Felicidades, has completado el puzzle!");
    }
}
