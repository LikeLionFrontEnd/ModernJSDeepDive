function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

console.log(me.constructor === Person);

const obj = new Object();
console.log(obj.constructor === Object); // true
// 왜 ? obj 는 객체, Object는 생성자 함수. 즉, obj는 Object.prototype의 constructor를 상속받아 쓰고,
// 이는 Object 생성자 함수를 가리키므로 둘은 같다.

const add = new Function("a", "b", "return a+b");
console.log(add.constructor === Function);

const obj2 = {};

const add2 = function (a, b) {
  return a + b;
};

const arr = [1, 2, 3];
const regexp = /is/gi;

console.log(obj2.constructor === Object); // true
console.log(add2.constructor === Function); // true
