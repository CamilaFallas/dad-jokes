
import { defaultState, products } from "./config.js";
import { colorChange } from "./color.js";
import { cart } from "./cart-funct.js";

const title = document.querySelector('#product-info__title');
const price = document.querySelector('#product-info__price');
const joke = document.querySelector('#product-info__text');

function showInfo() {
  title.innerHTML = `${defaultState.color} ${defaultState.product}`;
  price.innerHTML = getProductPrice(defaultState.product, defaultState.color);
}

function getProductPrice(product, color) {
  const selectedProduct = products.find(p => p.name === product);
  if (selectedProduct) {
    return selectedProduct[color];
  }
  return '';
}

// COLOR
function getColor(color, price) {
  defaultState.color = color;
  defaultState.price = price;

  showInfo();
}

colorChange.subscribe(getColor);

function addToCart() {
  const product = {
    title: `${defaultState.color} ${defaultState.product}`,
    price: defaultState.price,
    joke: joke.innerText
  };
  cart.addProduct(product);
}

function changeInfoInit() {
  showInfo();
  const addToCartBtn = document.createElement('button');
  addToCartBtn.innerText = 'Add to cart';
  addToCartBtn.addEventListener('click', addToCart);
  document.body.appendChild(addToCartBtn);
}

export {
  changeInfoInit
};