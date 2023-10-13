const playField = document.querySelector(".playfield");
const startButton = document.querySelector(".start-button");
const playFieldTwo = document.querySelector(".playfield-two");
const zombieContainer = document.querySelector(".zombie__container")
const zombie = document.querySelector(".zombie");
const zombiesArr = ["zombie(1).png", "zombie(2).png", "zombie(3).png", "zombie(4).png", "zombie(5).png", "zombie(6).png", "zombie(7).png"];
const hitsCount = document.querySelector(".hits-count")
const timeElement = document.querySelector(".time")

let duration = 3;
let count = 0;
let sec = duration;
let setIntervalId;


// ban mouse moves events 
document.addEventListener("mousemove", function (event) {
    event.preventDefault();
});

// get random image from array of images
function randomZombie() {
    let ind = Math.floor(Math.random() * zombiesArr.length); // random will give number which maximum equal array's length
    return zombiesArr[ind];
};

// start button clicked
startButton.addEventListener('click', function (event) {
    playField.classList.toggle('invisible');
    playFieldTwo.classList.toggle('invisible');
    startButton.classList.toggle('check');
    randomCoords();
    zombie.src = `images/${randomZombie()}`;
    if (startButton.classList.contains('check')) {
        startButton.innerHTML = 'Stop';
        timeElement.innerHTML = sec;

        play();
    } else {
        stop();
    }
});
console.log(zombie)
console.log(playField)

// what should be happen when play is activated
function play() {
    zombie.addEventListener('mousedown', mousDown);
    startTimer();
    hitsZero();
    zombie.classList.remove('invisible');

};

// create mouseDown handler, becouse when ananimous function inside event listener, it has unexpected behavior
function mousDown(event) {
    console.log(event);
    randomCoords()
    zombie.src = `images/${randomZombie()}`;
    zombie.alt = `${randomZombie()}`
    hitsUp();

}
function stop() {
    startButton.innerHTML = 'Start';
    zombie.classList.add('invisible');
    randomCoords();
    sec = duration;
    // hitsZero();
    playField.classList.add('invisible');
    stopTimer();
};
// get random zombie coordinates
function randomCoords() {
    zombie.style.left = Math.random() * (playField.clientWidth - zombie.clientWidth) + 'px';
    zombie.style.top = Math.random() * (playField.clientHeight - zombie.clientHeight) + 'px';
}


function hitsUp() {
    count += 1;
    hitsCount.innerHTML = count;
};
function hitsZero() {
    count = 0;
    hitsCount.innerHTML = count;
}

function decreaseTime() {
    sec--;
    timeElement.innerHTML = sec;
    if (sec == 0) {
        stop();
    }
}



function startTimer() {
    setIntervalId = setInterval(decreaseTime, 1000)
}

function stopTimer() {
    clearInterval(setIntervalId)
}