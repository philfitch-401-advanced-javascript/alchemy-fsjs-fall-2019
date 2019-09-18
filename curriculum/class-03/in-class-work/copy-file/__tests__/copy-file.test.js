jest.mock('../lib/files', () => {
  return {
    readFile: jest.fn(),
    writeFile: jest.fn(),
    readdir: jest.fn(),
  };
});

// for setting up mock expectations
const { readFile, writeFile } = require('../lib/files');

const copyFile = require('../lib/copy-file');

describe('Copy File', () => {

  it('copies file', () => {
    // arrange
    const source = './source.txt';
    const dest = './dest.txt';
    const fileContents = 'file contents';
    const readPromise = Promise.resolve(fileContents);
    readFile.mockReturnValueOnce(readPromise);

    // act
    return copyFile(source, dest)
      .then(() => {
        // assert
        const readCalls = readFile.mock.calls;
        expect(readCalls.length).toBe(1); 
        expect(readCalls[0][0]).toBe(source);

        const writeCalls = writeFile.mock.calls;
        expect(writeCalls.length).toBe(1);
        expect(writeCalls[0][0]).toBe(dest);
        expect(writeCalls[0][1]).toBe(fileContents);
      });
  });

});