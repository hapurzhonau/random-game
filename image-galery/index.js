
const submit = document.querySelector(".submit-button");
const UNSPLASH_KEY = '2DpVpbIORVf8uhlkQBcv528EkQ4Gw8xIkP1e6SF0Bxs';
const FLICKR_KEY = 'd4b5c2dff986acd52b12fe74ce0b8851';
// const form = document.querySelector(".form")
const input = document.querySelector(".search__input")
const imagesContainer = document.querySelector(".images__container")



let inputQuery = "";

// function for showing 10 randoms images when the page is reloaded
async function defaulter() {
    const URL_RANDOM_UNSPLASH = `https://api.unsplash.com/photos/random?count=10&client_id=${UNSPLASH_KEY}`;
    try {
        const response = await fetch(URL_RANDOM_UNSPLASH);
        if (!response.ok) {
            throw new Error('Random fetch response failed');
        }
        const responseJson = await response.json(); // in this case the 'response.json' is already array, because count=10 returns array
        console.log(responseJson)
        showImages(responseJson)
    } catch (error) {
        console.error('Some error:', error)
    }
}
defaulter()

// sending request and getting array by the Go! and Enter buttons
submit.addEventListener('click', async function (event) {

    event.preventDefault();
    imagesContainer.innerHTML = '';
    inputQuery = input.value;

    const URL_SEARCH = `https://api.unsplash.com/search/photos?query=${inputQuery}&client_id=${UNSPLASH_KEY}`;
    try {
        const response = await fetch(URL_SEARCH);
        if (!response.ok) {
            throw new Error('Search fetch response failed');
        }
        const responseJson = await response.json();     // object
        // console.log(responseJson)       // data array
        if (responseJson.results.length === 0) {

            const errorSpan = document.createElement("span");
            errorSpan.textContent = "OOOPS! No results found.";
            imagesContainer.appendChild(errorSpan);
        }
        showImages(responseJson.results) // this function has written below. it works with array 'responseJson.resutls'
    } catch (error) {
        console.error('Some error:', error)
    }
})


// showing an images
function showImages(arr) {
    arr.map(function (el) {
        // for all array elements must be created corresponding HTML elements

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add('image__wrapper');

        const image = document.createElement("img");
        image.classList.add('image');


        let ancor = document.createElement("a");

        image.src = el.urls.small;
        image.alt = el.alt_description;

        ancor.href = el.urls.full; //


        // inserting new HTML elements inside container
        imagesContainer.appendChild(imageWrapper);
        imageWrapper.appendChild(ancor);
        ancor.appendChild(image)
        // image.addEventListener('click', function (event) {
        //     console.log(event.target)
        // })
    })

}
