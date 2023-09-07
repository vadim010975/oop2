function checkArguments(name, type) {
  const array = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if ((typeof name !== 'string' && !(name instanceof String)) || name.length < 2 || name.length > 10 || !array.includes(type)) {
    throw new Error('Переданы некорректные значения!');
  }
}

module.exports = { checkArguments };
