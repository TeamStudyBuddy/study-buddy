const playlist = [
    "images/1.mp3",
    "images/2.mp3",
    "images/3.mp3",
    "images/4.mp3",
];

let currentTrackIndex = 0;
let audioPlayer = null;

function getAudioPlayer() {
  if (!audioPlayer) {
    audioPlayer = new Audio(playlist[currentTrackIndex]);
    audioPlayer.addEventListener("ended", playNextTrack);
  }

  return audioPlayer;
}

export function musicInit() {
  const player = getAudioPlayer();
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const playPauseButton = document.getElementById("play-pause-button");

  const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

  function updatePlayPauseIcon(isPlaying) {
    playPauseButton.innerHTML = isPlaying ? pauseIcon : playIcon;
  }

  function playTrack(index) {
    if (index >= 0 && index < playlist.length) {
      player.src = playlist[index];
      player.play();
      currentTrackIndex = index;
      updatePlayPauseIcon(true);
    }
  }

  function togglePlayPause() {
    if (player.paused) {
      if (!player.src) {
        playTrack(currentTrackIndex);
      } else {
        player.play();
        updatePlayPauseIcon(true);
      }
    } else {
      player.pause();
      updatePlayPauseIcon(false);
    }
  }

  function playNextTrack() {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    playTrack(nextIndex);
  }

  function playPrevTrack() {
    const prevIndex =
      (currentTrackIndex - 1 + playlist.length) % playlist.length;
    playTrack(prevIndex);
  }

  nextButton.addEventListener("click", playNextTrack);
  prevButton.addEventListener("click", playPrevTrack);
  playPauseButton.addEventListener("click", togglePlayPause);

  updatePlayPauseIcon(!player.paused);
}

export default function music() {
  return `
    <style>
      .music-player {
      border-radius: 30px;
      display: flex;
      flex-direction: column;    
      justify-content: center;
      align-items: center;        
      padding: 40px;
      height: 600px;
      background-color: var(--bg-color);
      width: 840px;
      color: red;
      position: relative;
}

      .music {
        position: relative;
        text-transform: capitalize;
        color: #ffffff;
        left: 70px;
        top: 90px;
        font-family: var(--font-primary);
        font-size: 100px;
      }

      .artist-name {
        position: relative;
        text-transform: capitalize;
        color: #ffffff;
        left: 50px;
        top: 120px;
        text-align: justify;
      }

      .control-button {
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 15px;
        background-color: var(--primary-color);
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
      }
      .control-button:hover {
        background-color: var(--secondary-bg-color);
      }
      .control-button svg {
        width: 24px;
        height: 24px;
        stroke: var(--bg-color);
      }
      .control-button:hover svg {
        width: 24px;
        height: 24px;
        stroke: var(--primary-color);
      }
     .pict {
       max-width: 100%;
        height: auto;
        border-radius: 20px;
        margin-bottom: 24px;        
        position: relative;       
}

      .ply {
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
      }

      .button-container {
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
      }
    </style>

    <div class="ply">
      <div class="music-player">
        <img src="images/lofi.jpg" id="pic" class="pict" />
        <div class="button-container">
          <button type="button" class="control-button" id="prev-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>
          
          <button type="button" class="control-button" id="play-pause-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          
          <button type="button" class="control-button" id="next-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        </div>

      </div>
    </div>
    `;
}
