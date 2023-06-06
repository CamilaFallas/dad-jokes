import { cart } from "./cart-funct.js";

const cartContainer = document.querySelector('#cart-container');
const cartButton = document.querySelector('#cart-button');
const closeButton = document.querySelector('#cart-close-button');

const renderCart = (products) => {
  cartContainer.innerHTML = '';

  if (products.length === 0) {
    cartContainer.innerHTML = 'Add a product with a joke!!';
    return;
  }

  products.forEach(product => {
    const productHTML =
      `<div class="product-cart">
      <h3>${product.title}</h3>
      <p>${product.price}</p>
      <p>${product.joke}</p>
      <button class="remove-button">Remove</button>
    </div>`;
    cartContainer.insertAdjacentHTML('beforeend', productHTML);
  });

  const removeButtons = cartContainer.querySelectorAll('.remove-button');
  removeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      cart.removeProduct(products[index]);
    });
  });
};

const openCart = () => {
  cartContainer.style.display = 'block';
};

const closeCart = () => {
  cartContainer.style.display = 'none';
};

cartButton.addEventListener('click', openCart);
closeButton.addEventListener('click', closeCart);

cart.subscribe(renderCart);

renderCart(cart.products);

renderCart();
openCart();
closeCart();

