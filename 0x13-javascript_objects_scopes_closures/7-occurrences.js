#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0; // Initialize the count to 0

  // Iterate over each element in the list
  for (const element of list) {
    if (element === searchElement) {
      count++;
    }
  }

  return count;
};
