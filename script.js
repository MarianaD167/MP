let progress = document.getElementById("progress");
let volume = document.getElementById("volume");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volIcon = document.getElementById("volIcon");
let title = document.getElementById("title");
let img = document.getElementById("img");
let artist = document.getElementById("artist");

let songs = [
    {
        title: "Melody",
        artist: "Kevu",
        img: "img.png",
        song: "music.mp3",

    }
]
song.src = songs[0].song;
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

setInterval(function () {
    progress.value = song.currentTime;
}, 500)

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else if (ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}