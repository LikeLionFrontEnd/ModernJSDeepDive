class Person {
  constructor(firstName, lastName) {
    (this.firstName = firstName), (this.lastName = lastName);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me = new Person("Seonyeong", "Kim");

console.log(`${me.firstName} ${me.lastName}`); // Seonyeong Kim

me.fullName = "Seonyeong Yun";
console.log(me); // Person { firstName: 'Seonyeong', lastName: 'Yun' }
console.log(me.fullName); // Seonyeong Yun
