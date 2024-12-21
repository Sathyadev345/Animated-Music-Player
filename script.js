const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Anbil Avan",
    name: "Devan Ekambaram & Chinmayi",
    source:
      "songs/Song1.mp3",
  },
  {
    title: "Messaya Murukku",
    name: "Hiphop Tamizha, Kharesma",
    source:
      "songs/Song2.mp3",
  },
  {
    title: "Ella Pugazhum",
    name: "A.R. Rahman",
    source:
      "songs/Song3.mp3",
  },
  {
    title: "Nee Pottu Vacha",
    name: " Ilaiyaraaja, Malaysia Vasudevan, Mano, K. S. Chithra",
    source:
      "songs/Song4.mp3",
  },
  {
    title: "As It Was",
    name: "Harry Styles",
    source:
      "songs/Song5.mp3",
  },

  {
    title: "Physical",
    name: "Dua Lipa",
    source:
      "songs/Song6.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source:
      "songs/Song7.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});