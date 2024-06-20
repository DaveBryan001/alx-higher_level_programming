#!/usr/bin/node

const arg = process.argv[2];
const number = parseInt(arg);
if (Number.isNaN(number) && arg !== 'NaN') {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}
