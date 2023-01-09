// tdz: 일시적 사각지대.
// let으로 선언한 변수는 스코프의 시작지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없다.

// console.log(foo); // reference error
let foo;
console.log(foo); // undefined
foo = 1;
console.log(foo); // 1

console.log("-----------------------------");

let bar = 1;
{
  console.log(bar);
  let bar = 2;
}
