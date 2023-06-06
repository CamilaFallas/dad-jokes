const cart = {
  products: [],
  subscribers: [],

  subscribe(fn) {
    this.subscribers.push(fn);
  },

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== fn);
  },

  notify() {
    this.subscribers.forEach((subscriber) => {
      subscriber(this.products);
    });
  },

  addProduct(product) {
    this.products.push(product);
    this.notify();
  },

  removeProduct(product) {
    this.products = this.products.filter((p) => p !== product);
    this.notify();
  },

  removeAllProducts() {
    this.products = [];
    this.notify();
  }
};

export { cart };
