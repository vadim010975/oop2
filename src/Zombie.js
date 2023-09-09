const { Character } = require('./Character');

class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

module.exports = { Zombie };
