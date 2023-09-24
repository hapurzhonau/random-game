const audio = document.querySelector('audio');
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const container = document.querySelector(".container")
const musicName = document.querySelector(".music-name")
const trecksNamesArr = ["Queen - The Show Must Go On", "Scorpions - Still Loving You", "Scorpions - Wind Of Change"]
const backward = document.querySelector(".backward")
const forward = document.querySelector(".forward")
const progressLine = document.querySelector(".progress-line")

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
// what should happen when the nowPlaying() activates
let ind = 0;
function nowPlaying(treck) {
    musicName.innerHTML = treck; // change music-name
    audio.src = `audio/${treck}.mp3` // change music path

}
nowPlaying(trecksNamesArr[ind])

// if forward has clicked next treck (trecksNamesArr[ind]) playing (playAudio())
forward.addEventListener('click', function () {
    ind += 1;
    if (ind > trecksNamesArr.length - 1) {
        ind = 0;
    }
    nowPlaying(trecksNamesArr[ind])
    playAudio()
})
// if backward has clicked previous treck (trecksNamesArr[ind]) playing (playAudio())
backward.addEventListener('click', function () {
    ind -= 1;
    if (ind < 0) {
        ind = trecksNamesArr.length - 1;
    }
    nowPlaying(trecksNamesArr[ind])
    playAudio()
})
progressLine.style.width = 0;
audio.addEventListener('durationchange', function () {
    console.log('duration changed')
    audio.addEventListener('timeupdate', function (event) {
        console.log(event.target.duration)
        console.log(event.target.currentTime);

        progressLine.style.width = (event.target.currentTime * 100 / event.target.duration) + '%';
    })
})
audio.addEventListener('loadedmetadata', function (event) {
    console.log('meta loaded');
})