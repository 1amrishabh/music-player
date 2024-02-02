console.log("Welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Royalty (Don Diablo Remix)",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Keep You",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Set You Free (VERCU Remix)",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "The Rocks",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Late At Night",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "BUSSIN'",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Pull Me In",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle-o");
    masterPlay.classList.add("fa-pause");
    document
      .getElementById(songIndex.toString())
      .classList.remove("fa-play-circle-o");
    document.getElementById(songIndex.toString()).classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play-circle-o");
    document.getElementById(songIndex.toString()).classList.remove("fa-pause");
    document
      .getElementById(songIndex.toString())
      .classList.add("fa-play-circle-o");
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

audioElement.addEventListener("ended", () => {
  if (songIndex > 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-play-circle-o");
  masterPlay.classList.add("fa-pause");
  makeAllPlays();
  document
    .getElementById(songIndex.toString())
    .classList.remove("fa-play-circle-o");
  document.getElementById(songIndex.toString()).classList.add("fa-pause");
});

myProgressBar.addEventListener("change", () => {
  console.log(myProgressBar.value, audioElement.duration);
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play-circle-o");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      if (songIndex == i) {
        if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.play();
          masterPlay.classList.remove("fa-play-circle-o");
          masterPlay.classList.add("fa-pause");
          document
            .getElementById(songIndex.toString())
            .classList.remove("fa-play-circle-o");
          document
            .getElementById(songIndex.toString())
            .classList.add("fa-pause");
        } else {
          audioElement.pause();
          masterPlay.classList.remove("fa-pause");
          masterPlay.classList.add("fa-play-circle-o");
          document
            .getElementById(songIndex.toString())
            .classList.remove("fa-pause");
          document
            .getElementById(songIndex.toString())
            .classList.add("fa-play-circle-o");
        }
      } else {
        makeAllPlays();
        e.target.classList.remove("fa-play-circle-o");
        e.target.classList.add("fa-pause");
        masterSongName.innerText = songs[i].songName;
        audioElement.src = songs[i].filePath;
        songIndex = i;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle-o");
        masterPlay.classList.add("fa-pause");
      }
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-play-circle-o");
  masterPlay.classList.add("fa-pause");
  makeAllPlays();
  document
    .getElementById(songIndex.toString())
    .classList.remove("fa-play-circle-o");
  document.getElementById(songIndex.toString()).classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex < 1) {
    songIndex = 6;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  masterPlay.classList.remove("fa-play-circle-o");
  masterPlay.classList.add("fa-pause");
  makeAllPlays();
  document
    .getElementById(songIndex.toString())
    .classList.remove("fa-play-circle-o");
  document.getElementById(songIndex.toString()).classList.add("fa-pause");
});
