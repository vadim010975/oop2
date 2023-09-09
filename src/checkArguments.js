function checkArguments(name, type) {
  const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if ((typeof name !== 'string' && !(name instanceof String)) || name.length < 2 || name.length > 10 || !types.includes(type)) {
    throw new Error('Переданы некорректные значения!');
  } else {
    return true;
  }
}

module.exports = { checkArguments };
