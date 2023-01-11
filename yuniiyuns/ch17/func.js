function foo() {}

foo.prop = 10;

foo.method = function () {
  console.log(this.prop); // 10
  console.log(this); // [Function: foo] { prop: 10, method: [Function (anonymous)] }
};

foo.method();
