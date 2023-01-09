function foo() {
  var x = "local";
  console.log(x);
  return x;
}

foo();
// console.log(x); // refrenceError

console.log("--------------------------------");

var z = "global";

function bar() {
  console.log(z); // undefined
  var z = "local";
}

bar();
console.log(z); // global
