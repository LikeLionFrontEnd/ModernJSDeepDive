// tdz: 일시적 사각지대.
// let으로 선언한 변수는 스코프의 시작지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없다.

// console.log(foo); // reference error
let foo;
console.log(foo); // undefined
foo = 1;
console.log(foo); // 1

console.log("-----------------------------");

// 만약 let으로 선언된 변수는 호이스팅이 일어나지 않는거라면, 아래에서 에러가 찍히지 않아야 한다.
// 블록 스코프 안에서 참조하는 bar는 상위 스코프인 전역변수 bar의 값을 찍을 것이기 때문이다.
// 그러나, 블록 스코프 안의 bar의 선언문이 먼저 실행되어 블록 내에 bar가 존재한다는것을 알고 있지만
// 초기화되지 않은 상태이기 때문에 에러가 나는 것이다.
let bar = 1;
{
  console.log(bar); // reference error
  let bar = 2;
}
