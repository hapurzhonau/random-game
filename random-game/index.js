const playField = document.querySelector(".playfield");
const startButton = document.querySelector(".start-button");
const playFieldTwo = document.querySelector(".playfield-two");
const ghostContainer = document.querySelector(".ghost__container")
const ghost = document.querySelector(".ghost");
const ghostsArr = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"];
const hitsCount = document.querySelector(".hits-count")
const timeElement = document.querySelector(".time");
const resultsList = document.querySelector(".results__list");
const resultsItem = document.querySelector(".results__list_item");

let duration = 10;//round duration (sec)
timeElement.innerHTML = duration;
let count = 0;
let sec = duration;
let setIntervalId;

// ban mouse moves events 
document.addEventListener("mousemove", function (event) {
    event.preventDefault();
});

// get random image from array of images
function randomZombie() {
    let ind = Math.floor(Math.random() * ghostsArr.length); // will give random number which maximum equal array's length
    return ghostsArr[ind];
};

// -------------------START GAME!!!-----------------------
// start button clicked
startButton.addEventListener('click', function (event) {
    event.preventDefault();
    startButton.classList.toggle('check'); // marker 'check' for changing value of start/stop button (must be 'toggle'!)
    if (startButton.classList.contains('check')) {
        timeElement.innerHTML = sec;
        play();
    } else {
        stop();
    }
});
// --------------------------------------------------------

function play() {
    ghost.addEventListener('mousedown', mousDown);
    startTimer();
    hitsZero();
    ghost.classList.remove('invisible');
    playField.classList.add('invisible');
    playFieldTwo.classList.add('invisible');
    startButton.innerHTML = 'Stop';
    randomCoords();
    ghost.src = `images/${randomZombie()}`;
};

// create mouseDown handler, becouse when ananimous function inside event listener, it has unexpected behavior
function mousDown() {
    randomCoords()
    ghost.src = `images/${randomZombie()}`;
    ghost.alt = `${randomZombie()}`
    hitsUp();

}
function stop() {
    startButton.innerHTML = 'Start';
    ghost.classList.add('invisible');
    randomCoords();
    sec = duration;
    playField.classList.add('invisible');
    stopTimer();
    saveResults(count);
    playField.classList.remove('invisible');
    playFieldTwo.classList.remove('invisible');
    startButton.classList.remove('check');
    showResults(resultsArr)
};
// get random ghost coordinates
function randomCoords() {
    ghost.style.left = Math.random() * (playField.clientWidth - ghost.clientWidth) + 'px';
    ghost.style.top = Math.random() * (playField.clientHeight - ghost.clientHeight) + 'px';
}

function hitsUp() {
    count += 1;
    hitsCount.innerHTML = count;
    return count;
};
function hitsZero() {
    count = 0;
    hitsCount.innerHTML = count;
    // saveResults(count)
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

// saving results in localStorage
const resultsArr = JSON.parse(localStorage.getItem('hits')) || []; // initial value of 'hits' must be array, else it will be error 'push is not a function'

function saveResults(count) {
    resultsArr.unshift(count);
    if (resultsArr.length > 10) {
        resultsArr.pop();
    }
    localStorage.setItem('hits', JSON.stringify(resultsArr));
}

// show hits results on display
function showResults(arr) {
    resultsList.innerHTML = '';//clear perent
    arr.forEach((el) => {
        let liElement = document.createElement("li"); //creating html elemnts for any elemnts in array 
        liElement.className = 'results__list_item';
        liElement.innerHTML = el;
        resultsList.appendChild(liElement);
    });
}
showResults(resultsArr)