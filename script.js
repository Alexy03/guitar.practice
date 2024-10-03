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
