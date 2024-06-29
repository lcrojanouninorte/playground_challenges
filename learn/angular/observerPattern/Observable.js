class Observable {
     /**
   * @constructor
   * @param {Function} subscribe the function that is called when the Observable is
   * initially subscribed to. This function is given a Subscriber, to which new values
   * can be `next`ed, or an `error` method can be called to raise an error, or
   * `complete` can be called to notify of a successful completion.
   */
    constructor(subscribe) {
        this._subscribe = subscribe;
    }
    
    subscribe(observer) {
      return this._subscribe(observer);
    }
  }
  

module.exports = { Observable };
