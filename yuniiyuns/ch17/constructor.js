function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);

console.log(circle1.radius); // 2
console.log(circle1.getDiameter()); // 4
console.log(circle2.radius); // 3
console.log(circle2.getDiameter()); // 6
