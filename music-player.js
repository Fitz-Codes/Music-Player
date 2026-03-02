const songs = [

    {
        image: "./Malcolm Todd Cover.jpg",
        name: "Out of Bounds",
        artist: "Malcolm Todd",
        audio: "./Malcolm Todd - Out of Bounds (SPOTISAVER).mp3",
    },

    {

    },

    {

    }
];
let currentSongIndex = 0; // Track which song is playing

// Function to load and display a song
function loadSong(index) {
    const song = songs[index];
    document.querySelector('.songInfo h2').textContent = song.name;
    document.querySelector('.songInfo p').textContent = song.artist;
    // audioElement.src = song.audio;
}
document.addEventListener('DOMContentLoaded', function() {
    // Load first song
    loadSong(0);
    // Progress bar fill
    const progressSlider = document.querySelector('.progressSlider');
    
    function updateProgressBar() {
        const value = (progressSlider.value / progressSlider.max) * 100;
        progressSlider.style.background = `linear-gradient(to right, #400320 0%, #400320 ${value}%, #ddd ${value}%, #ddd 100%)`;
    }
    
    progressSlider.addEventListener('input', updateProgressBar);
    updateProgressBar(); // Initialize

    // Play button
    const pauseButton = document.getElementById('pauseButton');
    pauseButton.addEventListener('click', function() {
        console.log("Play button was clicked");
    });

    //Next button
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextSong());

    //Previous button
    const prevButton = document.getElementById("prevButton");
    prevButton.addEventListener("click", function() {
        console.log("Previous button was clicked");
    })
});
