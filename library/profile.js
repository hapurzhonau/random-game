const profileIcon = document.querySelector(".profile__icon")
const profileMenu = document.querySelector(".profile__drop-menu")
const bodyWrapper = document.querySelector(".body__wrapper")
// const profileButton = document.querySelector(".profile__drop-menu_button")
const profileReg = document.querySelector(".profile__menu_register")
const register = document.querySelector(".register")
// const registerActive = document.querySelector(".register--active")
const regWrapper = document.querySelector(".register__wrapper");

function showMenu() {
    // при нажатии на иконку открывается дроп-меню
    profileIcon.addEventListener('click', function (event) {
        profileMenu.classList.toggle('profile__drop-menu--active')
        // console.log(event.target)
    })
    profileMenu.addEventListener('click', function (event) {
        // при нажатии на кнопки рег и лог, дроп-меню скрывается
        // console.log(event.target)
        if (event.target.nodeName == 'BUTTON') {
            profileMenu.classList.toggle('profile__drop-menu--active')
        }
    })
    // открытие окно регистрации
    profileReg.addEventListener('click', function (e) {
        register.classList.add('register--active')

    })

    bodyWrapper.addEventListener('click', (event) => {
        // при нажатии на область вне дроп-меню, оно скрывается
        if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.classList.remove('profile__drop-menu--active');
        }
        // при нажатии на область вне окна регистрации, оно скрывается
        if (!profileReg.contains(event.target) && !register.contains(event.target)) {
            register.classList.remove('register--active')
            // bodyWrapper.classList.remove('body__wrapper--opacity')
            regWrapper.classList.add('register__wrapper-none')
            // body.classList.remove('body__wrapper--locked')
            // console.log(event.target)
        }
        // при открытом окне регистрации
        if (register.classList.contains('register--active')) {
            // bodyWrapper.classList.add('body__wrapper--opacity')
            regWrapper.classList.remove('register__wrapper-none')
            console.log('menu opened');
        }
        body.addEventListener('keydown', function (event) {
            if (event.key == "Escape") {
                register.classList.remove('register--active')
                regWrapper.classList.add('register__wrapper-none')

            }
        })

    })

}
showMenu()


