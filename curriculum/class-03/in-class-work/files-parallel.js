const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

Promise.all([
  readFile('files.js', 'utf-8'),
  readFile('package.json', 'utf-8')
])
  .then(([filesText, packageJson]) => {
    console.log(filesText);
    console.log(packageJson);
  });