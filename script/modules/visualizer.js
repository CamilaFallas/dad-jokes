import { products, defaultState } from "./config.js";
import { colorChange } from "./color.js";
import { productChange } from "./products.js";

const joke = document.querySelector('#productShow__p');
const image = document.querySelector('#productShow__img');

const handleColorChange = (color) => {
  joke.classList.remove(`with-${defaultState.color}-img`);
  image.setAttribute('src', `/images/product-${defaultState.product}-${color}.jpg`);
  joke.classList.add(`with-${color}-img`);
  defaultState.color = color;
};

const handleProductChange = (product) => {
  const selectedProduct = products.find(item => item.name === product);
  if (selectedProduct) {
    image.setAttribute('src', `images/product-${product}-${defaultState.color}.jpg`);
    defaultState.product = product;
  }
};

const initVisualizer = () => {
  productChange.subscribe(handleProductChange);
  colorChange.subscribe(handleColorChange);
};

export {
  initVisualizer
};
