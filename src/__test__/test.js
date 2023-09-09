const { checkArguments } = require('../checkArguments');
const { Character } = require('../Character');
const { Bowerman } = require('../Bowerman');
const { Swordsman } = require('../Swordsman');
const { Magician } = require('../Magician');
const { Daemon } = require('../Daemon');
const { Undead } = require('../Undead');
const { Zombie } = require('../Zombie');

test.each([
  ['Vadim', 'Swordsman', true],
  [(10).toString(), 'Magician', true],
])('test function checkArguments with %s name and %s type', (name, type, expected) => {
  const result = checkArguments(name, type);
  expect(result).toBe(expected);
});

test.each([
  [8, 'Magician', new Error('Переданы некорректные значения!')],
  ['V', 'Magician', new Error('Переданы некорректные значения!')],
  ['Vadim_Skupov', 'Magician', new Error('Переданы некорректные значения!')],
  ['Vadim', 'God', new Error('Переданы некорректные значения!')],
])('test function checkArguments with %s name and %s type', (name, type, expected) => {
  function checkBadArguments() {
    checkArguments(name, type);
  }
  expect(checkBadArguments).toThrow(expected);
});

const characters = [
  {
    name: 'Vadim', type: 'Daemon', health: 100, level: 1, attack: undefined, defence: undefined,
  },
  {
    name: 'Vadim', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Vadim', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Vadim', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  },
  {
    name: 'Vadim', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  },
  {
    name: 'Vadim', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  },
  {
    name: 'Vadim', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  },
];

test.each([
  [new Character('Vadim', 'Daemon'), characters[0]],
  [new Bowerman('Vadim'), characters[1]],
  [new Swordsman('Vadim'), characters[2]],
  [new Magician('Vadim'), characters[3]],
  [new Daemon('Vadim'), characters[4]],
  [new Undead('Vadim'), characters[5]],
  [new Zombie('Vadim'), characters[6]],
])('test class %s', (person, expected) => {
  expect({
    name: person.name,
    type: person.type,
    health: person.health,
    level: person.level,
    attack: person.attack,
    defence: person.defence,
  }).toEqual(expected);
});

test('test class Character with bad argumrnts', () => {
  function creatObjectWithBadArguments() {
    const characterGod = new Character('Vadim', 'God');
    characterGod.health = 10000;
  }
  expect(creatObjectWithBadArguments).toThrow(new Error('Переданы некорректные значения!'));
});

test('test Character.levelUp', () => {
  const person = new Character('Vadim', 'Magician');
  person.attack = 10;
  person.defence = 40;
  person.levelUp();
  expect({
    level: person.level,
    attack: person.attack,
    defence: person.defence,
    heaith: person.health,
  }).toEqual({
    level: 2,
    attack: 12,
    defence: 48,
    heaith: 100,
  });
});

test('test Character.levelUp with health=0', () => {
  const person = new Character('Vadim', 'Magician');
  person.health = 0;
  function levelUpAtDead() {
    person.levelUp();
  }
  expect(levelUpAtDead).toThrow(new Error('Нельзя повысить левел умершего!'));
});

test.each([
  [20, 88],
  [-20, 100],
  ['20', 100],
])('test Character.damage', (value, expected) => {
  const person = new Character('Vadim', 'Magician');
  person.attack = 10;
  person.defence = 40;
  person.damage(value);
  expect(person.health).toBe(expected);
});
