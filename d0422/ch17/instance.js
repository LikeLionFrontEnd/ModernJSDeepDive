function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  return {};
}
const circle = new Circle(1);
console.log(circle); //{}
