function foo() {}
const bar = function () {};
const test = function nottest() {};
console.log(foo.name); //foo
console.log(bar.name); //bar
console.log(test.name); //nottest
