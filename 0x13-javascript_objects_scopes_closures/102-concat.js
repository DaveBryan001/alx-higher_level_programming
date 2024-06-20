#!/usr/bin/node

const fs = require('fs');

const [, , fileA, fileB, fileC] = process.argv;

function concatenateFiles (fileA, fileB, fileC) {
  try {
    const contentA = fs.readFileSync(fileA, 'utf8');

    // Read content of fileB
    const contentB = fs.readFileSync(fileB, 'utf8');

    // Concatenate contents
    const concatenatedContent = `${contentA}${contentB}`;

    // Write concatenated content to fileC
    fs.writeFileSync(fileC, concatenatedContent);

    console.log(`Files ${fileA} and ${fileB} concatenated successfully to ${fileC}`);
  } catch (err) {
    console.error(`Error concatenating files: ${err.message}`);
  }
}

concatenateFiles(fileA, fileB, fileC);
