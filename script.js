// Chord data with names, image paths, and corresponding audio
const chords = [
    { name: "C Major", image: "images/C-chord.png", audioId: "C-chord" },
    { name: "G Major", image: "images/G-chord.png", audioId: "G-chord" },
    { name: "F Major", image: "images/F-chord.png", audioId: "F-chord" },
    { name: "D Major", image: "images/D-chord.png", audioId: "D-chord" },
    { name: "A Minor", image: "images/Am-chord.png", audioId: "Am-chord" }
];

// Auto-play interval reference
let autoPlayInterval = null;

// Function to generate and display a random chord
function generateChord() {
    const randomIndex = Math.floor(Math.random() * chords.length);
    const selectedChord = chords[randomIndex];

    // Update HTML elements
    document.getElementById("chord-name").innerText = selectedChord.name;
    document.getElementById("chord-image").src = selectedChord.image;
    document.getElementById("chord-image").style.display = 'block';

    // Play corresponding audio
    playChordAudio(selectedChord.audioId);
}

// Play the chord audio
function playChordAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}

// Start the auto-play feature
function startAutoPlay() {
    if (!autoPlayInterval) {
        autoPlayInterval = setInterval(generateChord, 5000); // Change chord every 5 seconds
    }
}

// Stop the auto-play
function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Practice mode: Generate a single random chord
function startPracticeMode() {
    stopAutoPlay();
    generateChord();
}
