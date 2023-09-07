const { checkArguments } = require('./checkArguments');

class Character {
  constructor(name, type) {
    checkArguments(name, type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    [
      ['Bowman', 25, 25],
      ['Swordsman', 40, 10],
      ['Magician', 10, 40],
      ['Undead', 25, 25],
      ['Zombie', 40, 10],
      ['Daemon', 10, 40],
    ].forEach((item) => {
      if (item[0] === this.type) {
        [, this.attack, this.defence] = item;
      }
    });
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего!');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (Number.isFinite(points) && points > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

module.exports = { Character };
