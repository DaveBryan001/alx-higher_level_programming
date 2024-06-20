#!/usr/bin/node

class Rectangle {
  // The constructor method to initialize the instance attributes
  constructor (w, h) {
    // Check if w and h are positive integers and not zero
    if (this._isValid(w) && this._isValid(h)) {
      this.width = w;
      this.height = h;
    }
  }

  // Private method to validate if the argument is a positive integer
  _isValid (value) {
    return Number.isInteger(value) && value > 0;
  }

  // Method to print the rectangle using the character 'X'
  print () {
    if (this.width && this.height) {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    } else {
      console.log('Invalid dimensions: Rectangle not created.');
    }
  }

  // Method to rotate the rectangle (exchange width and height)
  rotate () {
    if (this.width && this.height) {
      [this.width, this.height] = [this.height, this.width];
    } else {
      console.log('Invalid dimensions: Cannot rotate an empty rectangle.');
    }
  }

  // Method to double the dimensions of the rectangle
  double () {
    if (this.width && this.height) {
      this.width *= 2;
      this.height *= 2;
    } else {
      console.log('Invalid dimensions: Cannot double an empty rectangle.');
    }
  }
}

module.exports = Rectangle;
