const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function getRandomShoutedFile() {
  const fileName = Math.random() < .5 ? 'files.js' : 'package.json';
  const text = await readFile(fileName, 'utf-8');
  return text.toUpperCase();
}

async function run() {
  try {
    const text = await getRandomShoutedFile();
    displayFile(text);
  }
  catch(err) {
    console.log('***ERROR:', err);
  }
}

run();

function displayFile(text) {
  console.log('***File:\n', text);
}
