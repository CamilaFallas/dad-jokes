import { defaultState, products } from "./config.js"
import Publisher from "../Publisher/Publisher.js";

const colorChange = new Publisher();

//DOM
const container = document.querySelector('#productShow');

function showColor() {
  container.insertAdjacentHTML("beforeend",
    '<label><input type="radio" id="product__color-white" name="product" value="white"/> White</label><label><input type="radio" id="product__color-black" name="product" value="black"/>Black</label>'
  )
}

//// Separar funcionalidad de donde se generaron

function getColor() {
  const input = document.querySelectorAll('input[name="product"]')
  input.forEach(element => {
    element.addEventListener('click', () => {
      colorChange.notify(element.value)
    })
  })
}

//este podria ir a parte ya que trabaja con de default - podria moverse todo el defaul aca
function colorState(color) {
  defaultState.color = color
}
colorChange.subscribe(colorState);

function changeColorInit() {
  showColor()
  getColor()
}
export {
  changeColorInit,
  colorChange
}