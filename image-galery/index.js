const URL = " https://api.unsplash.com/photos";
const submit = document.querySelector(".submit-button")

async function myFunc() {
    let resp = await fetch(URL);
    let res = await resp.json()
    console.log(res)
}
myFunc()

submit.addEventListener('click', function (event) {
    event.preventDefault()
})