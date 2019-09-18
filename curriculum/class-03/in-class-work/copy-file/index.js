const copyFile = require('./lib/copy-file');

copyFile('./package.json', './copy.json')
  .then(() => {
    console.log('copy complete!');
  })
  .catch(err => {
    console.log('***COPY FILE FAILED***\n', err);
  });