const circle = {
  radius: 5, // 반지름

  getDiameter() {
    return 2 * this.radius;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);
// {
//   radius: 5,
//   getDiameter: [Function: getDiameter],
//   getPerimeter: [Function: getPerimeter],
//   getArea: [Function: getArea]
// }

console.log(circle.getDiameter()); // 10
