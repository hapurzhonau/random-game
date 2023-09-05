const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navLink = document.querySelectorAll("li");
const bodyStopScroll = document.querySelector(".body__wrapper");


burger.addEventListener('click', function () {
    nav.classList.toggle('nav--visible');
    burger.classList.toggle('burger--activ');
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
        burger.classList.remove('burger--activ');
        body.classList.remove('body--locked');
    }

});


// const paginationActiv = document.querySelectorAll('.pagination__button');


// paginationActiv.forEach((el) => el.addEventListener('click', () => {
//     el.classList.toggle('pagination__button--activ')
// })
// )

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     slidesPerView: 3,
//     spaceBetween: 25,




//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         769: {
//             slidesPerView: 3,
//         },

//     }
// });