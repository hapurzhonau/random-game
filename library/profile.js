const profileIcon = document.querySelector(".profile__icon")
const profileMenu = document.querySelector(".profile__drop-menu")
const bodyWrapper = document.querySelector(".body__wrapper")
const profileButton = document.querySelector(".profile__drop-menu_button")
const profileWord = document.querySelector(".profile_word")


function showMenu() {
    // при нажатии на иконку открывается модалка
    profileIcon.addEventListener('click', function (event) {
        profileMenu.classList.toggle('profile__drop-menu--activ')
        // console.log(event.target)
    })
    profileMenu.addEventListener('click', function (event) {
        // при нажатии на кнопки рег и лог меню скрывается
        // console.log(event.target.nodeName)
        if (event.target.nodeName == 'BUTTON') {
            profileMenu.classList.toggle('profile__drop-menu--activ')
        }
    })
    bodyWrapper.addEventListener('click', (event) => {

        if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.classList.remove('profile__drop-menu--activ');
        }
    })
}
showMenu()


