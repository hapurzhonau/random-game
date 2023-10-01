const URL_RANDOM_UNSPLASH = "https://api.unsplash.com/photos/random?count=20";

const submit = document.querySelector(".submit-button");
const UNSPLASH_KEY = '2DpVpbIORVf8uhlkQBcv528EkQ4Gw8xIkP1e6SF0Bxs';
const FLICKR_KEY = 'd4b5c2dff986acd52b12fe74ce0b8851';
const form = document.querySelector(".form")
const input = document.querySelector(".search__input")
const imageWrapper = document.querySelector(".image__wrapper");
const image = document.querySelector(".image")
const imagesContainer = document.querySelector(".images__container")


let inputQuery = "";

function defaulter() {
    const response = fetch(URL_RANDOM_UNSPLASH);
    const responseJson = response.json();

}


// sending request and getting array by the Go! and Enter buttons
submit.addEventListener('click', async function (event) {

    event.preventDefault();

    inputQuery = input.value;

    const URL_SEARCH = `https://api.unsplash.com/search/photos?query=${inputQuery}&client_id=${UNSPLASH_KEY}`;

    const response = await fetch(URL_SEARCH);
    const responseJson = await response.json();     // object
    console.log(responseJson.results)       // data array
    // const data = responseJson.results;
    showImages(responseJson.results) // this function has written below. it works with array 'responseJson.resutls'

})


// showing an images
function showImages(arr) {
    arr.map(function (el) {
        // for all array elements must be created corresponding HTML elements
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add('image__wrapper');
        const image = document.createElement("img");
        image.classList.add('image')

        image.src = el.urls.small
        image.alt = el.alt_description

        // inserting new HTML elements inside container
        imagesContainer.appendChild(imageWrapper)
        imageWrapper.appendChild(image);

    })

}
