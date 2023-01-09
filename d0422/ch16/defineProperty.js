const person = {};
Object.defineProperty(person, 'firstName', {
  value: 'gildong',
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(person, 'lastName', {
  value: 'Lee',
  //속성 누락시, value는 undefined
  // 다른 속성은 false가 기본값이다.
});
let d = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', d);
d = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', d);

// 열거 시도
console.log(Object.keys(person)); //lastName은 열거되지않음

// 값 변경 시도
person.lastName = 'kim';
console.log(person.lastName); //Lee 오류 없이 바뀌지 않음(Writable이 false)

// 삭제시도
delete person.lastName;
console.log(person.lastName); //삭제 되지않음(configurable이 false)

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true,
});
d = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(d);
person.fullName = 'donggil Kim'; //Kim은 반영되지 않음
console.log(person.fullName);
