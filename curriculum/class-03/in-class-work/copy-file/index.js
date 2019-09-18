const copyFile = require('./lib/copy-file');

copyFile('./packae.json', './copy.json')
  .then(() => {
    console.log('copy complete!');
  });