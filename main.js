//MODULE
import getJokes from './modules/random-joke.js'
import searchBar from './modules/search-bar.js'

//************** RANDOM JOKE **************//

// GET DOM 
let randomjokeText = document.querySelector('.random-joke__btn-joke');
let button = document.querySelector('.random-joke__btn')

// FUNCTION
function randomJoke() {
  getJokes().then((jokes) => {
    randomjokeText.innerHTML = jokes.joke;
  })
}

randomJoke();

//EVENTS LISTENERS 
document.addEventListener('DOMContentLoaded', getJokes)
button.addEventListener('click', randomJoke);


//************** SEARCH BAR **************//

// GET DOM 
const goButton = document.querySelector('.search-joke__btn')

// EVENTS LISTENER
goButton.addEventListener('click', () => {
  const input = document.querySelector('#search').value
  searchBar(input)
});



