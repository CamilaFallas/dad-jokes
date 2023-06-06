export class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== fn);
  }

  notify(data) {
    this.subscribers.forEach((subscriber) => {
      subscriber(data);
    });
  }
}

export default Publisher;

