const audio = document.querySelector('audio');
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const container = document.querySelector(".container")
const musicName = document.querySelector(".music-name")
const trecksNamesArr = ["Queen - The Show Must Go On", "Scorpions - Still Loving You", "Scorpions - Wind Of Change"]
const backward = document.querySelector(".backward")
const forward = document.querySelector(".forward")
const progressLine = document.querySelector(".progress-line")
const progressWrapper = document.querySelector(".progress__wrapper")
const cover = document.querySelector(".cover")
const currenTime = document.querySelector(".timing__current")
const durationTime = document.querySelector(".timing__duration")


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
    cover.src = `images/${ind + 1}.jpg` // change cover
}
nowPlaying(trecksNamesArr[ind])

// if forward has clicked next treck (trecksNamesArr[ind]) playing (playAudio())
forward.addEventListener('click', function () {
    progressLine.style.width = 0;
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
    progressLine.style.width = 0;
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

// receiving timing of music playing
audio.addEventListener('timeupdate', function (event) {
    // console.log(event.target.duration)
    // console.log(event.target.currentTime);
    // currenTime.innerHTML = Math.floor(audio.currentTime);

    // human readable time for current time
    let min = Math.floor(audio.currentTime / 60);
    let sec = Math.floor(audio.currentTime % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    currenTime.innerHTML = `${min}:${sec}`;
    // set progress-line width 
    progressLine.style.width = audio.currentTime * 100 / audio.duration + '%';

})
// click on the progress-line and set current position
progressWrapper.addEventListener('click', function (event) {
    // console.log(event.target);
    // console.log(event.target.clientWidth)
    // console.log(event.offsetX);
    // audio.currentTime should to get clicked position :)
    audio.currentTime = (event.clientX - progressWrapper.getBoundingClientRect().left) / progressWrapper.clientWidth * audio.duration;

})
// next treck playing
audio.addEventListener('ended', function () {
    ind++
    if (ind >= trecksNamesArr.length) {
        ind = 0;
    }
    nowPlaying(trecksNamesArr[ind])
    playAudio()

})
// human readable time for duration time
audio.addEventListener('durationchange', function () {
    let min = Math.floor(audio.duration / 60);
    let sec = Math.floor(audio.duration % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    durationTime.innerHTML = `${min}:${sec}`;

})

