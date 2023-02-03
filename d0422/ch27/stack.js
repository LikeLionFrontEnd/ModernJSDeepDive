const Stack = (function () {
  function Stack() {
    this.array = [];
  }
  Stack.prototype = {
    constructor: Stack,
    push(value) {
      this.array.push(value);
    },
    pop() {
      return this.array.pop();
    },
  };
  return Stack;
})();
const s = new Stack();
s.push(1);
console.log(s.pop());
