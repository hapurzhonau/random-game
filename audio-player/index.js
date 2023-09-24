const audio = document.querySelector('audio');
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const container = document.querySelector(".container")
let musicName = document.querySelector(".music-name")
const trecksNamesArr = ["Queen - The Show Must Go On", "Scorpions - Still Loving You", "Scorpions - Wind Of Change"]
const imagesArr = []
const backward = document.querySelector(".backward")
const forward = document.querySelector(".forward")
let progressLine = document.querySelector(".progress-line")
const progressWrapper = document.querySelector(".progress__wrapper")
const cover = document.querySelector(".cover")

// function play
function playAudio() {

    play.src = 'icons/Pause.svg';
    audio.play();
    container.classList.add('check')
}
// function pause
function pauseAudio() {

    play.src = 'icons/Play.svg';
    container.classList.remove('check')
    audio.pause();
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
    cover.src = `images/${ind + 1}.jpg`

}
nowPlaying(trecksNamesArr[ind])

// if forward has clicked next treck (trecksNamesArr[ind]) playing (playAudio())
forward.addEventListener('click', function () {
    ind += 1;
    if (ind > trecksNamesArr.length - 1) {
        ind = 0;
    }
    nowPlaying(trecksNamesArr[ind])
    // if a treck plaing already the next treck will playing too when forward button will clicked and conversly
    if (container.classList.contains('check')) {
        playAudio()
    } else {
        pauseAudio()
    }

})
// if backward has clicked previous treck (trecksNamesArr[ind]) playing (playAudio())
backward.addEventListener('click', function () {
    ind -= 1;
    if (ind < 0) {
        ind = trecksNamesArr.length - 1;
    }
    nowPlaying(trecksNamesArr[ind])
    // if a treck plaing already the previous treck will playing too when backward button will clicked and conversly
    if (container.classList.contains('check')) {
        playAudio()
    } else {
        pauseAudio()
    }
})



progressLine.style.width = 0; // the default length of progress-line is 0

// progress-line changes 
audio.addEventListener('durationchange', function () {
    console.log('duration changed')


})
// receiving timing of music playing
audio.addEventListener('timeupdate', function (event) {
    // console.log(event.target.duration)
    // console.log(event.target.currentTime);

    // set progress-line width 
    progressLine.style.width = audio.currentTime * 100 / audio.duration + '%';
})
// click on the progress-line and set current position
progressWrapper.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(event.target.clientWidth)
    console.log(event.offsetX);
    // audio.currentTime should to get clicked position :)
    audio.currentTime = (event.clientX - progressWrapper.getBoundingClientRect().left) / progressWrapper.clientWidth * audio.duration;

})

