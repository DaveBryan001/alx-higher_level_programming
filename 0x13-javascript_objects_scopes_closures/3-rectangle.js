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

  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    } else {
      console.log('Invalid dimensions: Rectangle not created.');
    }
  }
}

module.exports = Rectangle;
