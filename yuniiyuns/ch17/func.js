function foo() {}

foo.prop = 10;

foo.method = function () {
  console.log(this.prop); // 10
  console.log(this); // [Function: foo] { prop: 10, method: [Function (anonymous)] }
};

foo.method();

var person = {
  name: "kim",
  type: "인간",
};

Object.defineProperty(person, "property1", {
  value: "인간",
});

console.log(person);
