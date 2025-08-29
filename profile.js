function playSound() {
    const audio = document.getElementById('audioPlayer');
    audio.currentTime = 0;
    audio.play();
}