const URL_RANDOM_UNSPLASH = "https://api.unsplash.com/photos/random?count=20";

const submit = document.querySelector(".submit-button");
const UNSPLASH_KEY = '2DpVpbIORVf8uhlkQBcv528EkQ4Gw8xIkP1e6SF0Bxs';
const FLICKR_KEY = 'd4b5c2dff986acd52b12fe74ce0b8851';
const form = document.querySelector(".form")
const input = document.querySelector(".search__input")
const imagesDiv = document.querySelector(".images__item");
// const image = document.querySelector("img")
let inputQuery = "";



// sending request by the Go! button
submit.addEventListener('click', async function (event) {

    event.preventDefault();

    inputQuery = input.value;

    const URL_SEARCH = `https://api.unsplash.com/search/photos?query=${inputQuery}&client_id=${UNSPLASH_KEY}`;

    const response = await fetch(URL_SEARCH);
    const responseJson = await response.json();     // object
    console.log(responseJson.results)       // data array
})

// function showImages(data) {

// }