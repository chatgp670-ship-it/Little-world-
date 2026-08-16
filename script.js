// Music Section Logic (song.mp3 - يمكن حبيت)
const songAudio = document.getElementById('bg-song');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
  if (songAudio.paused) {
    songAudio.currentTime = 20; // Start at 20 seconds
    songAudio.play();
    playBtn.textContent = '⏸ Pause';
  } else {
    songAudio.pause();
    playBtn.textContent = '▶ Play Her Vibe (00:20 - 00:30)';
  }
});

// Stop strictly at 30 seconds
songAudio.addEventListener('timeupdate', () => {
  if (songAudio.currentTime >= 30) {
    songAudio.pause();
    playBtn.textContent = '▶ Replay (00:20 - 00:30)';
  }
});

// Finale Section Logic (canon_in_d_memory.mp3 - Canon in D)
const canonAudio = document.getElementById('canon-audio');
const canonBtn = document.getElementById('canon-btn');

canonBtn.addEventListener('click', () => {
  if (canonAudio.paused) {
    canonAudio.currentTime = 110; // Start at 1:50
    canonAudio.play();
    canonBtn.textContent = '🎶 Playing Canon in D...';
  } else {
    canonAudio.pause();
    canonBtn.textContent = '✨ Play Canon in D (01:50) & Merge';
  }
});
