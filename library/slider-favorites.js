let labels = document.querySelectorAll('.favorites__radio-buttons-label');
// добавление жирного шрифта выранному сезону
labels.forEach(function (el) {
    el.addEventListener('click', function () {
        // event.preventDefault();
        const realButton = el.querySelector('.favorites__real-button');
        realButton.checked = true;
        labels.forEach(function (text) {
            text.classList.remove('bold');
        })
        el.classList.add('bold');
    })
})


let radioButtons = document.querySelectorAll('.favorites__real-button');
let books = document.querySelectorAll('.favorites__items-item');
function showBooks(season) {
    // скрыть все книги
    books.forEach(function (book) {
        book.style.display = 'none';

        // book.style.opacity = '0';



    });


    let seasonValue = season.getAttribute('id');

    // если data-season равен id
    books.forEach(function (book) {
        let dataSeason = book.dataset.season;
        if (dataSeason == seasonValue) {
            book.style.display = 'block';
            book.style.opacity = '0';
            setTimeout(function () {
                book.style.opacity = '1';
            }, 10);
        }
    });
}


radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('click', function () {
        showBooks(radioButton);
    });
});

//по-умочланию 
showBooks(radioButtons[0]);

