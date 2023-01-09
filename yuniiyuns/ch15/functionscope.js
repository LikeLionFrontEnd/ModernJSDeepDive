var i = 10;

for (var i = 0; i < 5; i++) {
  // 이미 선언된 전역변수 i가 있으므로 중복 선언
  console.log(i);
}

console.log(i);

// 함수 레벨 스코프는 전역 변수를 남발할 가능성을 높인다.
