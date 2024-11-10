document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#video');
    const text = document.querySelector('#text');
    const overlay = document.querySelector('#overlay');

    // Set up event listener for user interaction
    overlay.addEventListener('click', function() {
        video.style.display = 'block'; // Show the video
        text.style.display = 'block'; // Show the text
        video.play(); // Play the video with sound
        video.hidden = false; // Remove hidden attribute
        overlay.style.display = 'none'; // Hide the overlay
    });

    // Optional: Set up a fallback in case the video doesn't autoplay (i.e., needs to be started manually)
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play(); // Play the video on click if it’s paused
        }
    });
});
