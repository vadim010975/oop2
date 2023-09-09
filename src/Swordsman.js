const { Character } = require('./Character');

class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

module.exports = { Swordsman };
