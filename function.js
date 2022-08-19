import {info as songs} from "./info.js";

const img = document.querySelector(".music-img img");
const playBtn = document.querySelector(".fa-play");
const audio = document.querySelector(".music audio");
const leftBtn = document.querySelector(".fa-caret-left");
const rightBtn = document.querySelector(".fa-caret-right");
const songName = document.querySelector(".music-info h3");
const artist = document.querySelector(".music-info h4");
let playMusic = true;
let songIndex = 0;

//console.log(songName)

const play = ()=>{
  playMusic = false;
  audio.play();
  playBtn.classList.replace("fa-play", "fa-pause");
  img.classList.add("img-animation")
}

const pause = ()=>{
  playMusic = true;
  audio.pause();
  playBtn.classList.replace("fa-pause", "fa-play");
  img.classList.remove("img-animation")
}

playBtn.addEventListener("click", ()=>{
  playMusic ? play() : pause();
});

const loadSong = (song)=>{
  songName.textContent = song.title;
  artist.textContent = song.singer;
  img.setAttribute("src", song.imgPath);
  audio.setAttribute("src", song.songsPath);
};

/*leftBtn.addEventListener("click", (e)=>{
  console.log(e.target)
})*/

leftBtn.addEventListener("click", (e)=>{
  //console.log(e.target)
  let leftSong = (songIndex - 1 + songs.length) % songs.length;
  songIndex -= 1;
  loadSong(songs[leftSong]);
  play();
});

rightBtn.addEventListener("click", ()=>{
  let rightSong = (songIndex + 1) % songs.length;
  songIndex += 1;
  console.log(rightSong)
  loadSong(songs[rightSong]);
  play();
});