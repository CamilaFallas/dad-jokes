import { defaultState, products } from "./config.js";
import Publisher from "../Publisher/Publisher.js";

const wrap = document.querySelector('#product-options__wrapper');
const productChange = new Publisher();

const handleProductChange = (event) => {
  productChange.notify(event.currentTarget.dataset.productid);
};

const initProducts = () => {
  const productNames = products.map(product => product.name);
  const filteredProducts = productNames.filter(prod => prod !== defaultState.product);

  filteredProducts.forEach(produ => {
    const btn = document.createElement('button');
    btn.classList.add('other-products__btn');
    btn.dataset.productid = produ;
    btn.addEventListener('click', handleProductChange);
    btn.innerHTML = `<img src="images/product-${produ}-white.jpg" alt="">`;
    wrap.appendChild(btn);
  });
};

export {
  productChange,
  initProducts
};
