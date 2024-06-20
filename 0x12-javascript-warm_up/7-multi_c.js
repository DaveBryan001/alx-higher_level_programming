#!/usr/bin/node

const arg = process.argv[2];
const number = parseInt(arg);
if (Number.isNaN(number)) {
  console.log('Missing number of occurrences');
}

for (let i = 0; i < number; i++) {
  console.log('C is fun');
}
