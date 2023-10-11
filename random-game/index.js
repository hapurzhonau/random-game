const playField = document.querySelector(".playfield");
const startButton = document.querySelector(".start-button");
const playFieldTwo = document.querySelector(".playfield-two");
// const zombies = document.querySelectorAll(".zombie");
const zombie = document.querySelector(".zombie");
const zombiesArr = ["zombie(1).png", "zombie(2).png", "zombie(3).png", "zombie(4).png", "zombie(5).png", "zombie(6).png", "zombie(7).png"];


playField.addEventListener('click', function (event) {
    let countedX = event.clientX - playField.getBoundingClientRect().left;
    let countedY = event.clientY - playField.getBoundingClientRect().top
    event.preventDefault()
    console.log('x: ', countedX, 'y: ', countedY)
});

function ramdomZombie() {
    let ind = Math.floor(Math.random() * zombiesArr.length);
    return zombiesArr[ind];
};

function hitsCount() {
    let count = 0;
};

function play() {
    // let a = ramdomZombie()
    startButton.innerHTML = 'Stop';
    zombie.src = `images/${ramdomZombie()}`
    zombie.alt = `zombie${ramdomZombie()}`
};
function stop() {
    startButton.innerHTML = 'Start';

};

startButton.addEventListener('click', function (event) {
    playField.classList.toggle('invisible');
    playFieldTwo.classList.toggle('invisible');
    startButton.classList.toggle('check');
    if (startButton.classList.contains('check')) {
        play();
    } else {
        stop();
    }

});