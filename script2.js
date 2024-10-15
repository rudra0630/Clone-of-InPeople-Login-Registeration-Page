// You can control the background music with this JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('background-music');
    
    // Optional: Add play/pause toggle for the music if you want to control it.
    // Here is a simple example:
    const toggleMusic = () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    };

    // Attach the toggle function to an event or element if needed
    // Example: document.querySelector('button').addEventListener('click', toggleMusic);
});
