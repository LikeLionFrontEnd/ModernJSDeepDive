function multiply(x, y) {
  const iterator = arguments[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}
multiply(1, 2);
