import { getJokes } from "./api.js";

// GET DOM 
let container = document.querySelector('.random-joke__a');
let button = document.querySelector('.random-joke__btn')
let containerProduct = document.querySelector('.product-info')


//EVENTS LISTENERS 
document.addEventListener('DOMContentLoaded', getJokes())

// FUNCTION
export async function randomJoke() {
  await getJokes().then((jokes) => {
    jokeText(jokes)
  })
}

function jokeText({ id, joke }) {
  container.insertAdjacentHTML(
    "afterbegin",
    `<a href="../../product.html?id=${id}" class="random-joke__a btn-joke">${joke}</a>`
  )
};

//EVENTS LISTENERS 
button.addEventListener('click', randomJoke)


export default {
  randomJoke
}