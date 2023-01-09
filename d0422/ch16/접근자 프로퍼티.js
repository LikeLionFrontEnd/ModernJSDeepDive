const person = {
  firstName: 'Ungmo',
  lastName: 'Lee',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};
person.fullName = 'Donggil Lee';
console.log(person.fullName);
let descripter = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descripter);
descripter = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descripter);
