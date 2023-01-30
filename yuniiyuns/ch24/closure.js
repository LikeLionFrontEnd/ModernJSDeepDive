const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFunc = outer();

// outer 가 종료되었으므로, 실행 컨텍스트 스택에서 제거됐을거고, 그러면 outer안의 지역변수 x는 유효하지 않을 것이다.
// 근데 어떻게 여전히 10을 출력할까?

innerFunc(); // 10
