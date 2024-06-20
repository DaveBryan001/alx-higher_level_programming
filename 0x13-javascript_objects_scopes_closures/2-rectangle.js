#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (this._isValid(w) && this._isValid(h)) {
      this.width = w;
      this.height = h;
    }
  }

  _isValid (value) {
    return Number.isInteger(value) && value > 0;
  }
}

export default Rectangle;
