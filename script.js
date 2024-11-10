document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#video');

    // Attempt to unmute and play the video for mobile users
    video.play().then(() => {
        // Video started playing
        console.log('Video is playing');
    }).catch(error => {
        // Error handling (e.g. user needs to click to play)
        console.log('Autoplay failed, user interaction required');
        video.muted = false; // Ensure it's not muted if user interaction is required
    });

    // Optional: Handle a click event to unmute video if needed
    video.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;  // Unmute video on click
            video.play();         // Ensure video is playing
        }
    });
});
