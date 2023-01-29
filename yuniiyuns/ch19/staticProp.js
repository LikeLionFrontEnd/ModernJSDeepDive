function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.name}`);
};

Person.staticProp = "staticProp";
Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("Lee");
