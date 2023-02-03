function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(1);
console.log(circle.constructor == Circle);
console.log(Circle.prototype === circle.__proto__); //상속됨

