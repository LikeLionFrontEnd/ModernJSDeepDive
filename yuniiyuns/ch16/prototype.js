// function Person() {}

// var joon = new Person();
// var jisoo = new Person();

// Person.prototype.getType = function () {
//   return "인간";
// };

// console.log(joon.getType());

function Person() {}

var seon = new Person();
var yun = new Person();

// 프로토타입에 새로운 멤버를 추가,수정,삭제할 때에는 함수의 prototype속성을 이용해 접근해야한다.
Person.prototype.getType = function () {
  return "인간";
};

// 프로토타입의 멤버에 접근할 때에는 객체 이름을 이용해 접근할수도 있다.
console.log(yun.getType());
