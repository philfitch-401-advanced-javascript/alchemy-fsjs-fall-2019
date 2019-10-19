# LAB: Webpack initializer

Create an `npm init` script to initialize a webpack application.

You will be publishing an `init` script to the npm package repository!
All `init` scripts start with `create-`. For example `create-ryan-app`:
`npm init ryan-app my-cool-app`. This script will write all of your
template files for you and install all dependencies.

Use your webpack initialization script to create a hello world
web app.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Instructions

### Writer

* `writer.js`
  * `module.exports` two functions
    * `write` takes `str` and `path`. Write `str` to `path`
    * `writeJson` takes `obj` and `path`. Write `obj` as string to `path`
    * log the name of the file written
* `package-json-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `package.json` file using `writeJson`
* `eslint-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `.eslintrc` file using `writeJson`
* `babel-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `.babelrc` file using `writeJson`
* `webpack-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `webpack.config.js` file using `write`
* `gitignore-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `.gitignore` file using `write`
* `travis-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `.travis.yml` file using `write`
* `src-index-writer.js`
  * `module.exports` a function that takes a path
  * use `writer.js` to write a `src/index.js` file using `write`
  * use `writer.js` to write a `src/index.html` file using `write`

### Dependencies

* `installer.js`
  * `module.exports` a function that takes a `path`
    (where to run the command), array of `packages` and a
    `dev` boolean.
  * use `child_process` to run a command (like maybe `npm i`....):
    ```js
    const { execSync } = require('child_process');
    execSync('YOUR COMMAND HERE!', {
      cwd: path,
      stdio: 'inherit'
    });
    ```
  * log that installer starts and finishes
* `dev-dependencies-installer.js`
  * `module.exports` a function that takes a path
  * use `installer.js` install all dev dependencies
* `dependencies-installer.js`
  * `module.exports` a function that takes a path
  * use `installer.js` install all dependencies

### Do stuff

* `index.js`
  * assign the name of the folder from the command line arguments
    as a variable
  * if the folder is not named `.` make the directory
  * call your functions to write all necessary files
  * call your functions to install all dependencies

### Testing

* `writer.js`
  * mock the `fs.writeFileSync` function
    * HINT: `fs.writeFileSync = jest.fn()`
  * make sure the correct arguments are passed
* `installer.js`
  * mock the `execSync` function
    * HINT: `childProcess.execSync = jest.fn()`
  * make sure the correct arguments are passed

### Running Locally

* `node index.js my-test-application`

### Publish

* `npm publish` to make script available
* `npm init your-package-name-here my-test-application`

### Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

* Your server need not be deployed to Heroku for this lab
