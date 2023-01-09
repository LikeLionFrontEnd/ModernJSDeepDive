const person = {
  name: 'lee',
};
console.log(Object.isFrozen(person));
Object.freeze(person);
console.log(Object.isFrozen(person));
