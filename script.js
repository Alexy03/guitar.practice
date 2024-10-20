// Chord data with names, image paths, and corresponding audio
const chords = [
   { name: "C Major", image: "chords/C.png", audioId: "C-audio" },
    { name: "D Major", image: "chords/D.png", audioId: "D-audio" },
    { name: "E Major", image: "chords/E.png", audioId: "E-audio" },
    { name: "Em Minor", image: "chords/Em.png", audioId: "Em-audio" },
    { name: "F Major", image: "chords/F.png", audioId: "F-audio" },
    { name: "G Major", image: "chords/G.png", audioId: "G-audio" },
    { name: "A Major", image: "chords/A.png", audioId: "A-audio" },
    { name: "Am Minor", image: "chords/Am.png", audioId: "Am-audio" }
];

// Auto-play interval reference
let autoPlayInterval = null;

// Function to generate and display a random chord
function generateChord() {
    const randomIndex = Math.floor(Math.random() * chords.length);
    const selectedChord = chords[randomIndex];

    // Update HTML elements
  document.getElementById("chord-name").innerText = selectedChord.name;
    const chordImageElement = document.getElementById("chordImage");
    chordImageElement.src = selectedChord.image;
    chordImageElement.style.display = 'block';


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
