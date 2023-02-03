class Test {
  test() {
    console.log('hi');
  }
}
const a = new Test();
const b = new Test();
console.log(a.test === b.test);
console.log(Object.getOwnPropertyDescriptors(Test));
