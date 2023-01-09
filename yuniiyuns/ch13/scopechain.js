var x = "gloabl x";
var y = "global y";

function outer() {
  var z = "outer's local z";

  console.log(x);
  console.log(y);
  console.log(z);

  function inner() {
    var x = "inner's local x";

    console.log(x); // step 4
    console.log(y); // step 5
    console.log(z); // step 6
  }

  inner();
}

outer();

console.log(x);
// console.log(z); // refrence error z is not defined. z는 outer의 지역변수이므로, 전역 스코프에서 유효하지 않아 참조할 수 없다.

// step 4~6 의 실행 단계

console.log("-----------------------------------------");

function foo() {
  console.log("global foo");
}

function bar() {
  function foo() {
    console.log("local foo");
  }
  foo(); // 이 foo는 로컬 foo이다. 함수도 식별자이므로 스코프를 갖는다.
}

bar();
