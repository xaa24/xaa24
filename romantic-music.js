document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('romantic-song');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', () => {
    audio.play();
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
  });
});