function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}

console.log(add(2, 5)); // 7

// console.log(x + y); // RefrenceError: x is not defined

// 매개변수의 스코프는 함수 body 내부로 한정되기 때문

console.log("--------------------------------------------------------------\n");

var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}

foo();

console.log(x);

// 첫번째 x는 전역변수, 두번째 x는 foo 함수 내부에서만 존재하는 로컬변수. 둘은 다른 변수이다. 다른 메모리 공간을 가리키고 있을 것이다.
// 함수 안의 콘솔문은 함수 안의 x를, 함수 밖의 콘솔문은 전역변수 x를 찍고 있다.

console.log("--------------------------------------------------------------\n");

function bar() {
  var x = 1;
  var x = 2;
  //   let y = 2;
  //   let y = 3; // error
  console.log(x); // 2, not error
}

bar();
