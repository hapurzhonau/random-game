const audio = document.querySelector('audio');
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
// const buttons = document.querySelectorAll(".buttons")
const container = document.querySelector(".container")
const musicName = document.querySelector(".music-name")
const trecksNamesArr = ["Queen - The Show Must Go On", "Scorpions - Still Loving You", "Scorpions - Wind Of Change"]
const backward = document.querySelector(".backward")
const forward = document.querySelector(".forward")

// function play
function playAudio() {

    play.src = 'icons/Pause.svg';
    audio.play();
    container.classList.add('check')
}
// function pause
function pauseAudio() {

    play.src = 'icons/Play.svg';
    audio.pause();
    container.classList.remove('check')
}

// if play has clicked the pause button showing and music playing, and vise versa
play.addEventListener('click', function () {

    if (container.classList.contains('check')) {
        pauseAudio()
    } else {
        playAudio()
    }
})

let ind = 0;
function nowPlaying(treck) {
    musicName.innerHTML = treck;
    audio.src = `audio/${treck}.mp3`
}
nowPlaying(trecksNamesArr[ind])


forward.addEventListener('click', function () {
    ind += 1;
    if (ind > trecksNamesArr.length - 1) {
        ind = 0;
    }
    nowPlaying(trecksNamesArr[ind])
    playAudio()
})
backward.addEventListener('click', function () {
    ind -= 1;
    if (ind < 0) {
        ind = trecksNamesArr.length - 1;
    }
    nowPlaying(trecksNamesArr[ind])
    playAudio()
})
