// Array of available chords and corresponding images
const chords = {
    "C": "chords/C.png",
    "G": "chords/G.png",
    "Am": "chords/Am.png",
    "F": "chords/F.png",
    "D": "chords/D.png",
    "Em": "chords/Em.png"
};

// Display the selected chord
function displayChord() {
    const chord = document.getElementById("chordSelect").value;
    document.getElementById("chordImage").src = chords[chord];
}

// Choose a random chord and display it
function randomChord() {
    const chordKeys = Object.keys(chords);
    const randomChord = chordKeys[Math.floor(Math.random() * chordKeys.length)];
    document.getElementById("chordSelect").value = randomChord;
    displayChord();
}
// Timer functionality
let countdown;
function startPractice() {
    const timeLimit = 5; // 5 seconds for each chord
    document.getElementById("timer").innerText = timeLimit;
    let timeLeft = timeLimit;

    // Reset countdown if already running
    if (countdown) clearInterval(countdown);

    // Set a new chord every 30 seconds
    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft === 0) {
            randomChord(); // Show a random chord
            timeLeft = timeLimit; // Reset the timer
        }
    }, 1000);
}

// Variable to hold the interval ID
let autoPlayInterval = null;

// Function to generate a random chord
function generateChord() {
    // Select a random chord from the list
    const randomIndex = Math.floor(Math.random() * chords.length);
    const selectedChord = Chords[randomIndex];

    // Update the chord name and image in the HTML
    document.getElementById("chord-name").innerText = selectedChord.name;
    document.getElementById("chord-image").src = selectedChord.image;

    // Optionally play the corresponding chord audio
    playChordAudio(selectedChord.audioId);
}

// Function to play chord audio
function playChordAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}

// Function to start auto-play
function startAutoPlay() {
    // Prevent multiple intervals from running
    if (!autoPlayInterval) {
        autoPlayInterval = setInterval(generateChord, 5000); // Generate a new chord every 5 seconds
    }
}

// Function to stop auto-play
function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval); // Stop the interval
        autoPlayInterval = null;
    }
}

//audio for the web need to input
function playChordSound(chord) {
    const audioElement = document.getElementById(`${chord}-audio`);
    audioElement.play();
}

function displayChord() {
    const chord = document.getElementById("chordSelect").value;
    document.getElementById("chordImage").src = chords[chord];
    playChordSound(chord); // Play the sound for the selected chord
}

function randomChord() {
    const chordKeys = Object.keys(chords);
    const randomChord = chordKeys[Math.floor(Math.random() * chordKeys.length)];
    document.getElementById("chordSelect").value = randomChord;
    displayChord();
}

