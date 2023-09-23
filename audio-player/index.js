const audio = document.querySelector('audio');
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const main = document.querySelector("main")
const buttons = document.querySelectorAll(".buttons")
const container = document.querySelector(".container")


function playAudio() {

    play.src = 'icons/Pause.svg';
    audio.play();
    container.classList.add('check')
}
function pauseAudio() {

    play.src = 'icons/Play.svg';
    audio.pause();
    container.classList.remove('check')
}


play.addEventListener('click', function (event) {
    // playAudio();
    ;

    if (container.classList.contains('check')) {
        pauseAudio()
    } else {
        playAudio()
    }
    console.log(event.target);

})
// pause.addEventListener('click', function () {
//     pauseAudio()
// })





