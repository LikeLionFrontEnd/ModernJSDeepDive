function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

const parent = {
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

Object.setPrototypeOf(me, parent);
// => me.__proto__ = parent;
me.sayHello();
