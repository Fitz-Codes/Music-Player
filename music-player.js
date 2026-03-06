const songsList = [

    {
        name: "Out of Bounds",
        artist: "Malcolm Todd",
        audio: "assets/Malcolm Todd - Out of Bounds (SPOTISAVER).mp3",
    },

    {
        name: "Hesitating",
        artist: "Malcolm Todd",
        audio:"assets/Malcolm Todd - Hesitating (SPOTISAVER).mp3"
    },

    {
        name:"",
        artist:"",
        audio:""
    },

    {
        name:"",
        artist:"",
        audio:""
    },

    {
        name:"",
        artist:"",
        audio:""
    },

    {
        name:"",
        artist:"",
        audio:""
    },
    
];
let currentSongIndex = 0; // Track which song is playing
let audioElement = new Audio();

// Function to load and display a song
function loadSong(index) {
    let song = songsList[index];
    document.querySelector('.songInfo h2').textContent = song.name;
    document.querySelector('.songInfo p').textContent = song.artist;
    audioElement.src = song.audio;
    audioElement.addEventListener('loadedmetadata', function() {
        const progressSlider = document.querySelector('.progressSlider');
        progressSlider.max = Math.floor(audioElement.duration);
    });
}

// Function to play next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1);
    loadSong(currentSongIndex);
    audioElement.play();
}

//Function to play previous song
function prevSong(){
    currentSongIndex = (currentSongIndex - 1);
    loadSong(currentSongIndex);
    audioElement.play();
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
    let paused = true;
    pauseButton.addEventListener('click', function() {
        console.log("Play button was clicked");
        if (paused == false){
            audioElement.pause();
            paused = true;
            pauseButton.style.background
        }
        else{
            audioElement.play();
            paused = false;
        }
    });

    //Next button
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextSong);

    //Previous button
    const prevButton = document.getElementById("prevButton");
    prevButton.addEventListener("click", prevSong);

    // Update progress bar as song plays
    audioElement.addEventListener('timeupdate', function() {
        progressSlider.value = Math.floor(audioElement.currentTime);
        updateProgressBar();
    });

    // Allow user to seek through the song by clicking the progress bar
    progressSlider.addEventListener('change', function() {
        audioElement.currentTime = progressSlider.value;
    });
});
