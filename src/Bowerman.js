const { Character } = require('./Character');

class Bowerman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

module.exports = { Bowerman };
