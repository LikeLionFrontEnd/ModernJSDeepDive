const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z); // 6
  }

  bar();
}

foo();
