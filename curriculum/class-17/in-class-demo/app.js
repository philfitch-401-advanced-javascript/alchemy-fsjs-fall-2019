const inquirer = require('inquirer');
const terminalImage = require('terminal-image');
const chalk = require('chalk');

// factory method pattern
const statusColor = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'yellow'
};

module.exports = class App {
  constructor(api) {
    this.api = api;
  }

  start() {
    return inquirer
      .prompt([
        {
          type: 'number',
          name: 'page',
          message: 'What page?',
          default: 1
        }
      ])
      .then(answers => this.displayCharacters(answers))
  }

  displayCharacters({ page }) {
    return this.api.getCharacters(page)
      .then(characters => {
        Promise.all(characters.map(character => terminalImage.buffer(character.image)))
          .then(images => {
            characters.forEach((character, i) => {
              console.log(images[i]);
              console.log(chalk.red(character.name));

              // character.status => Alive, Dead, unknown
              const color = statusColor[character.status];
              console.log(chalk[color](character.status));

              console.log(chalk.blue(character.species));
              console.log();
            })
          })

      });
  }
}
