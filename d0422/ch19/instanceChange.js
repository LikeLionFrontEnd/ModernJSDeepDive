function Person(name) {
  this.name = name;
}
const me = new Person('Lee');
const parent = {
  constructor: Person,
  sayHello() {
    console.log(`${this.name}`);
  },
};

Object.setPrototypeOf(me, parent);
console.log(me instanceof Person); //false 왜냐면 Person의 생성자 함수의 prototype이 parent가 아니기 떄문이다.
Person.prototype = parent;
me.sayHello();
console.log(Person.prototype === Object.getPrototypeOf(me));
