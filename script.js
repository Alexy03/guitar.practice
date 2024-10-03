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
    const timeLimit = 30; // 30 seconds for each chord
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

