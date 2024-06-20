#!/usr/bin/node
const { dict } = require('./101-data');

const occurrencesById = {};

for (const userId in dict) {
  const occurrence = dict[userId];

  if (occurrence in occurrencesById) {
    occurrencesById[occurrence].push(userId);
  } else {
    occurrencesById[occurrence] = [userId];
  }
}

console.log(occurrencesById);
