class MyArray extends Array {
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) == i);
  }

  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);

console.log(myArray); // MyArray(4)[(1, 1, 2, 3)]
console.log(myArray.uniq()); // MyArray(3)[(1, 2, 3)]
console.log(myArray.average()); // 1.75
