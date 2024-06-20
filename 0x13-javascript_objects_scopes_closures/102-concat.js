#!/usr/bin/node

/*
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
*/

const fs = require('fs');

const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

fs.readFile(sourceFile1, 'utf-8', (err, data1) => {
  if (err) {
    console.error(`Error reading file ${sourceFile1}:`, err);
    return;
  }

  fs.readFile(sourceFile2, 'utf-8', (err, data2) => {
    if (err) {
      console.error(`Error reading file ${sourceFile2}:`, err);
      return;
    }

    const combinedData = data1 + data2;

    fs.writeFile(destinationFile, combinedData, (err) => {
      if (err) {
        console.error(`Error writing to file ${destinationFile}:`, err);
        return;
      }
      console.log(`Files concatenated successfully to ${destinationFile}`);
    });
  });
});