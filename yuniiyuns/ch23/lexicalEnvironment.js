const x = 1;

// foo가 정의되어 평가될 때는 전역 실행 컨텍스트가 실행중임. 즉, foo의 객체의 Environment 내부슬롯에는
// 전역 렉시컬 환경이 저장되어 있다.

function foo() {
  const x = 10;

  bar();
}

// bar도 마찬가지임

function bar() {
  console.log(x);
}
