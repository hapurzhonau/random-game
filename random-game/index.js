const playField = document.querySelector(".playfield");
playField.addEventListener('click', function (event) {
    let countedX = event.clientX - playField.getBoundingClientRect().left;
    let countedY = event.clientY - playField.getBoundingClientRect().top
    event.preventDefault()
    console.log('x: ', countedX, 'y: ', countedY)
})