const fs = require('fs');

function getRandomShoutedFile(cb) {

  const fileName = Math.random() < .5 ? 'files.js' : 'package.json';

  fs.readFile(fileName, 'utf-8', (err, text) => {
    if(err) {
      cb(err);
      return;
    }

    cb(null, text.toUpperCase());
  });
}

getRandomShoutedFile((err, text) => {
  console.log('***ERROR:', err);
  displayFile(text);
});

function displayFile(text) {
  console.log('***File:\n', text);
}
