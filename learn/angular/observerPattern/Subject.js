const { Observable } = require("./Observable");

class Subject {
  constructor() {
    this.observers = [];
  }

  next(value) {
    this.observers.forEach((observer) => observer.next(value));
  }

  error(err) {
    this.closed = true;
    this.observers.forEach((observer) => observer.error(err));
  }

  complete() {
    this.closed = true;
    this.observers.forEach((observer) => observer.complete());
    
  }

  subscribe(observer) {
    this.observers.push(observer);
    return {
      unsubscribe: () => {
        this.observers = this.observers.filter((obs) => obs !== observer);
      },
    };
}

  asObservable() {
    const observable = new Observable(this);
    return observable;
  }
}

module.exports = { Subject };
