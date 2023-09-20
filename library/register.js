const registerForm = document.getElementById('form')
const registerInputs = registerForm.querySelectorAll(".register__item-input")
const loginForm = document.querySelector(".login-form")
const loginFormInputs = loginForm.querySelectorAll('.register__item-input')
const registerInputFirstName = document.querySelector(".register__input_first-name")
const registerSpanFirstName = document.querySelector(".register__wrong-first-name")
const registerInputLastName =


    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (registerInputFirstName.value == '') {
            registerSpanFirstName.insertAdjacentText('beforeEnd', 'This field cannot be empty')
        } else {
            registerSpanFirstName.insertAdjacentText('beforeEnd', '333')

        }
        // if ()
    })

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('preventDefault')
})