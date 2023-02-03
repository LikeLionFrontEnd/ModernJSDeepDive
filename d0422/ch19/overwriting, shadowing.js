function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`${this.name} hello`);
};
const p = new Person('hi');
p.sayHello();
p.sayHello = function () {
  console.log('하이');
};
p.sayHello();
