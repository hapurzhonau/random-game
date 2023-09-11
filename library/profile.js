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
const registerLogin = register.querySelector(".register__login-word")

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
    // открытие окна регистрации
    profileReg.addEventListener('click', function () {
        registerWrapper.classList.remove('register__wrapper-none')

    })

    profileLogin.addEventListener('click', function (event) {
        loginWrapper.classList.remove('login__wrapper-none')

    })



    bodyWrapper.addEventListener('click', (event) => {
        // при нажатии на область вне дроп-меню, оно скрывается
        if (!profileMenu.contains(event.target)) {
            profileMenu.classList.remove('profile__drop-menu--active');
        }

        // срытие окна регистрации и затемнения при нажатии на кнопку 'Escape'
        body.addEventListener('keydown', function (event) {
            if (event.key == "Escape") {
                close()
            }
        })

        // скрытие окна register при нажатии на крестик
        registerCloseButton.addEventListener('click', close)
    })


    loginWrapper.addEventListener('click', function (event) {
        if (!login.contains(event.target)) {
            loginWrapper.classList.add('login__wrapper-none')
        }
    })

    // при нажатии на кнопку login в окне РЕГИСТРАЦИИ закрывается это окно и открывается окно ЛОГИНАЦИИ
    registerLogin.addEventListener('click', function (event) {
        loginWrapper.classList.remove('login__wrapper-none')
        event.stopPropagation()
        close()
    })

    // закрытие окна регистрации при нажатии вне её области
    registerWrapper.addEventListener('click', function (event) {
        if (!register.contains(event.target)) {
            close()
        }
    })
}


showMenu()
// функция закрытия окна регистрации и затемнения
function close() {
    registerWrapper.classList.add('register__wrapper-none')
}
