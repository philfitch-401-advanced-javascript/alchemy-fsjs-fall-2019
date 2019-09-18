const { readFile, writeFile } = require('./files');

function copyFile(sourceFile, destPath) {

  // read source file
  return readFile(sourceFile)
    .then(contents => {
      // write contents to destPath
      return writeFile(destPath, contents);
    });
}

module.exports = copyFile;