const playField = document.querySelector(".playfield");
const button = document.querySelector(".button");
const playFieldTwo = document.querySelector(".playfield-two")

playField.addEventListener('click', function (event) {
    let countedX = event.clientX - playField.getBoundingClientRect().left;
    let countedY = event.clientY - playField.getBoundingClientRect().top
    event.preventDefault()
    console.log('x: ', countedX, 'y: ', countedY)
})
function hitsCount() {
    let count = 0;
    // if(element)
}
button.addEventListener('click', function (event) {
    playField.classList.toggle('invisible')
    playFieldTwo.classList.toggle('invisible')
})