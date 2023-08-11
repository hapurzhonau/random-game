const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.nav');
const body = document?.querySelector('body');
const navLink = document.querySelectorAll("li")



burger.addEventListener('click', function () {
    nav.classList.toggle('nav--invisible');
    burger.classList.toggle('burger--activ');
    body.classList.toggle('no-scroll');
})



navLink.forEach(function (el) {
    return el.addEventListener('click', function () {
        nav?.classList.remove('nav--invisible');
    })
})

body.addEventListener('click', (event) => {
    if (!burger.contains(event.target)) {
        nav.classList.remove('nav--invisible');
        burger.classList.remove('burger--activ');
    }

});

console.log(`1. Верстка валидная +10\n
2.Вёрстка семантическая +16\n
3.Вёрстка соответствует макету +54\n
4.Общие требования к верстке +20`);