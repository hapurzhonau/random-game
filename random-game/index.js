const playField = document.querySelector(".playfield");
const startButton = document.querySelector(".start-button");
const playFieldTwo = document.querySelector(".playfield-two");
const zombieContainer = document.querySelector(".zombie__container")
const zombie = document.querySelector(".zombie");
const zombiesArr = ["zombie(1).png", "zombie(2).png", "zombie(3).png", "zombie(4).png", "zombie(5).png", "zombie(6).png", "zombie(7).png"];
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
    let ind = Math.floor(Math.random() * zombiesArr.length); // will give random number which maximum equal array's length
    return zombiesArr[ind];
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
// console.log(zombie)
// console.log(playField)


function play() {
    zombie.addEventListener('mousedown', mousDown);
    startTimer();
    hitsZero();
    zombie.classList.remove('invisible');
    playField.classList.add('invisible');
    playFieldTwo.classList.add('invisible');
    startButton.innerHTML = 'Stop';
    randomCoords();
    zombie.src = `images/${randomZombie()}`;
};

// create mouseDown handler, becouse when ananimous function inside event listener, it has unexpected behavior
function mousDown() {
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
    playField.classList.add('invisible');
    stopTimer();
    saveResults(count);
    playField.classList.remove('invisible');
    playFieldTwo.classList.remove('invisible');
    startButton.classList.remove('check');
    showResults(resultsArr)
};
// get random zombie coordinates
function randomCoords() {
    zombie.style.left = Math.random() * (playField.clientWidth - zombie.clientWidth) + 'px';
    zombie.style.top = Math.random() * (playField.clientHeight - zombie.clientHeight) + 'px';
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


// localStorage.removeItem('hits', 666)

// saving results in localStorage
const resultsArr = JSON.parse(localStorage.getItem('hits')) || []; // initial value of 'hits' must be array, else it will be error 'push is not a function'

function saveResults(count) {
    resultsArr.push(count);
    if (resultsArr.length > 10) {
        resultsArr.shift();
    }
    localStorage.setItem('hits', JSON.stringify(resultsArr));

}

// showing hits results in display
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