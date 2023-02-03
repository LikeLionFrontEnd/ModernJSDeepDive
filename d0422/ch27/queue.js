const Queue = (function () {
  function Queue() {
    this.array = [];
  }
  Queue.prototype = {
    constructor: Queue,
    inqueue(value) {
      this.array.push(value);
    },
    dequeue() {
      return this.array.shift();
    },
  };
  return Queue;
})();
const q = new Queue();
q.inqueue(1);
console.log(q.dequeue());
