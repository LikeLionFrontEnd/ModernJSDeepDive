var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

// var는 함수 스코프를 따른다.
// foo 안에서 선언된 지역변수 x = 10;
// foo를 실행하고, foo안에서 bar를 실행하면 x를 참조하기 위해 변수를 검색할 것이다.
// bar의 상위 스코프는 foo가 아닌 전역이므로, x == 1 이다.
