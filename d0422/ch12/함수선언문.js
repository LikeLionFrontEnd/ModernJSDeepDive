function foo() {
  console.log('foo');
}
foo();
(function bar() {
  console.log('bar');
}); // ()연산자 안이므로 함수 리터럴 표현식으로 해석됨
bar();
