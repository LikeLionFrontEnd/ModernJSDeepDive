// console.log(Person.prototype);

function Person(name) {
  this.name = name;
}

const Person2 = (name) => {
  this.name = name;
};

// console.log(Person2.prototype); // undefined

const me = new Person("Lee");
console.log(me.hasOwnProperty("name")); // true
