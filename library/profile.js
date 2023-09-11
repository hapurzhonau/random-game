const profileIcon = document.querySelector(".profile__icon")
const profileMenu = document.querySelector(".profile__drop-menu")
const bodyWrapper = document.querySelector(".body__wrapper")
const profileReg = profileMenu.querySelector(".profile__menu_register")
const profileLogin = profileMenu.querySelector(".profile__menu_log-in")
const loginWrapper = document.querySelector(".login__wrapper")
const login = loginWrapper.querySelector(".login")
const registerWrapper = document.querySelector(".register__wrapper");
const register = registerWrapper.querySelector(".register")
const registerCloseButton = document.querySelector(".modal__button")
const loginCloseButton = login.querySelector(".modal__button_close-login")
const registerLogin = register.querySelector(".register__login-word")
const loginRegisterWord = login.querySelector(".login__register-word")
function showMenu() {

    // при нажатии на иконку открывается дроп-меню
    profileIcon.addEventListener('click', function () {
        profileMenu.classList.toggle('profile__drop-menu--active')
    })

    // при нажатии на кнопки рег и лог, дроп-меню скрывается
    profileMenu.addEventListener('click', function (event) {
        if (event.target.nodeName == 'BUTTON') {
            profileMenu.classList.toggle('profile__drop-menu--active')
        }
    })

    // открытие окна регистрации
    profileReg.addEventListener('click', function () {
        registerOpen()
    })
    // при нажатии на login в дроп-меню, открывается окно ЛОГИНАЦИИ
    profileLogin.addEventListener('click', function () {
        loginOpen()
    })



    bodyWrapper.addEventListener('click', (event) => {
        // при нажатии на область вне дроп-меню, оно скрывается
        // (не совсем понимаю, при чем здесь проверка кнопки открытия)
        if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.classList.remove('profile__drop-menu--active');
        }

        // срытие окна регистрации и затемнения при нажатии на кнопку 'Escape'
        body.addEventListener('keydown', function (event) {
            if (event.key == "Escape") {
                registerClose()
            }
        })

        // скрытие окна register при нажатии на крестик
        registerCloseButton.addEventListener('click', registerClose)
    })
    loginCloseButton.addEventListener('click', function () {
        loginClose()
    })

    // скрытие окна ЛОГИНАЦИИ при нажатии вне её области
    loginWrapper.addEventListener('click', function (event) {
        if (!login.contains(event.target)) {
            loginClose()
        }
    })

    // при нажатии на кнопку login в окне РЕГИСТРАЦИИ, закрывается это окно и открывается окно ЛОГИНАЦИИ
    registerLogin.addEventListener('click', function () {
        registerClose()
        loginOpen()
        // event.stopPropagation()

    })

    // закрытие окна регистрации при нажатии вне её области
    registerWrapper.addEventListener('click', function (event) {
        if (!register.contains(event.target)) {
            registerClose()
        }
    })
    // при нажатии на слово register в окне ЛОГИНАЦИИ, оно закрывается и открывается окно РЕГИСТРАЦИИ
    loginRegisterWord.addEventListener('click', function () {
        loginClose()
        registerOpen()
    })

}


showMenu()
// функция закрытия окна регистрации и затемнения
function registerClose() {
    registerWrapper.classList.add('register__wrapper-none')
}
function registerOpen() {
    registerWrapper.classList.remove('register__wrapper-none')
}
function loginClose() {
    loginWrapper.classList.add('login__wrapper-none')
}
function loginOpen() {
    loginWrapper.classList.remove('login__wrapper-none')
}