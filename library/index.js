const burger = document?.querySelector('.burger');
const nav = document?.querySelector('.nav');
const body = document?.querySelector('body');
const navLink = document.querySelectorAll("li")



burger.addEventListener('click', function () {
    nav.classList.toggle('nav--invisible');
    burger.classList.toggle('burger--activ');
    // body.classList.toggle('no-scroll');
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

console.log(`
    1. Task: (https://github.com/rolling-scopes-school/tasks/blob/master/tasks/library/library-part2.md)
    \n
    2. Deploy: (https://rolling-scopes-school.github.io/hapurzhonau-JSFEPRESCHOOL2023Q2/library/)
    \n
    3. Done 12.08.2023 / deadline 14.08.2023
    \n
    4. Score: 50 / 50
    \n
    5. Вёрстка соответствует макету. Ширина экрана 768px +26
    \n
    6. Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12
    \n
    7.На ширине экрана 768рх реализовано адаптивное меню +12  
`);
