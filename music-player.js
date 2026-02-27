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
document.addEventListener('DOMContentLoaded', function() {
    // Load first song
    const currentSong = songs[0];
    document.querySelector('.songInfo h2').textContent = currentSong.name;
    document.querySelector('.songInfo p').textContent = currentSong.artist;

    // Progress bar fill
    const progressSlider = document.querySelector('.progressSlider');
    
    function updateProgressBar() {
        const value = (progressSlider.value / progressSlider.max) * 100;
        progressSlider.style.background = `linear-gradient(to right, #400320 0%, #400320 ${value}%, #ddd ${value}%, #ddd 100%)`;
    }
    
    progressSlider.addEventListener('input', updateProgressBar);
    updateProgressBar(); // Initialize
});
