function f() {
  console.log(arguments);
  console.log(Object.getOwnPropertyDescriptors(f));
}
f(1, 2, 3, 4);
