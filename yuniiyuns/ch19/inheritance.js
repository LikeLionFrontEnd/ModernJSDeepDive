function Circle(radius) {
  this.radius = radius;
  // 이렇게 하면 모든 인스턴스가 생성 시 getArea 라는 내용이 똑같은 메서드를 매번 생성해 메모리를 낭비한다.
  //   this.getArea = function(){
  //     return Math.PI * this.radius ** 2;
  //   }
}

// 생성자 함수 안에 getArea 함수를 정의하는 것이 아니라
// 생성자 함수가 생성한 모든 인스턴스들의 부모 객체 역할을 하는 프로토타입 객체에 getArea 메서드를 추가하여
// 모든 인스턴스들이 사용할 수 있도록 한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어있다. (==Circle.prototype)

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
  // this는 Circle.prototype 을 가리킨다.
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //true

// radius 만 개별적으로 소유하고, 내용이 동일한 메서드는 상속을 통해 공유하여 사용하도록 해야 중복을 제거할 수 있다.
