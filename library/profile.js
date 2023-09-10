const profileIcon = document.querySelector(".profile__icon")
const profileMenu = document.querySelector(".profile__drop-menu")
const bodyWrapper = document.querySelector(".body__wrapper")
const profileReg = document.querySelector(".profile__menu_register")
const register = document.querySelector(".register")
const registerWrapper = document.querySelector(".register__wrapper");
const registerCloseButton = document.querySelector(".modal__button")
const registerLogin = document.querySelector(".register__login-word")
const loginWrapper = document.querySelector(".login__wrapper")
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
            close()
            // console.log(event.target)
        }
        // при открытом окне регистрации происходит затемнение (remove незатемнение)
        if (register.classList.contains('register--active')) {
            registerWrapper.classList.remove('register__wrapper-none')

        }
        // срытие окна регистрации и затемнения при нажатии на кнопку 'Escape'
        body.addEventListener('keydown', function (event) {
            if (event.key == "Escape") {
                close()

            }
        })
        // скрытие окна register при нажатии на крестик и на кнопку login
        //  и открытие окна login при нажатии на login
        registerCloseButton.addEventListener('click', close)
        registerLogin.addEventListener('click', close)
        registerLogin.addEventListener('click', function () {
            loginWrapper.classList.remove('login__wrapper-none')
        })

    })

}
showMenu()
// функция закрытия окна регистрации и затемнения
function close() {
    register.classList.remove('register--active')
    registerWrapper.classList.add('register__wrapper-none')
}
