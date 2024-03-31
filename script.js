
  function addd(){window.addEventListener('resize', resizeVideoBackground);
document.addEventListener('DOMContentLoaded', resizeVideoBackground);

function resizeVideoBackground() {
    const videoAspectRatio = 16 / 9; // Adjust this based on your video's aspect ratio
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    const video = document.getElementById('myVideo');

    if (windowAspectRatio > videoAspectRatio) {
        video.style.width = '100%';
        video.style.height = 'auto';
    } else {
        video.style.width = 'auto';
        video.style.height = '100%';
    }
}}
addd();
