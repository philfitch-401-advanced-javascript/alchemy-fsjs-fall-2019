const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

function getRandomShoutedFile() {

  const fileName = Math.random() < .5 ? 'files.js' : 'package.json';

  return readFile(fileName, 'utf-8')
    .then(text => {
      return text.toUpperCase();
    });
}



getRandomShoutedFile()
  .then(text => {
    displayFile(text);
  })
  .catch(err => {
    console.log('***ERROR:', err);
  });

function displayFile(text) {
  console.log('***File:\n', text);
}
