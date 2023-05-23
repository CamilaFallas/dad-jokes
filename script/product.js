import { JokeId, randomJoke } from "./../main.js";
import { Observer } from './observer.js';

const object = new Observer();
const color = new Observer();
const joke = new Observer();

const url = new URLSearchParams(window.location.search);
let jokes = url.get("joke");

function showItem() {
  document.getElementsByClassName('random-joke__p').innerText = randomJoke();
}

object.subscribe(showItem)

document.getElementsByClassName('product-info__text')