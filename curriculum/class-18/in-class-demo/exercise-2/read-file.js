const fs = require('fs').promises;

fs.readFile(process.argv[2], { encoding: 'utf8' })
  .then(content => console.log(content));
