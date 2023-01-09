var x = 'global';
function foo() {
  console.log(x); //undefined
  var x = 'local';
}
foo();
console.log(x); //global
