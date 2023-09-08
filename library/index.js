const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navLink = document.querySelectorAll("li");
const bodyStopScroll = document.querySelector(".body__wrapper");


burger.addEventListener('click', function () {
    nav.classList.toggle('nav--visible');
    burger.classList.toggle('burger--active');
    body.classList.toggle('body--locked');
})



navLink.forEach(function (el) {
    return el.addEventListener('click', function () {
        nav?.classList.remove('nav--visible');
        body.classList.remove('body--locked');
    })
})

body.addEventListener('click', (event) => {
    if (!burger.contains(event.target)) {
        nav.classList.remove('nav--visible');
        burger.classList.remove('burger--active');
        body.classList.remove('body--locked');
    }

});