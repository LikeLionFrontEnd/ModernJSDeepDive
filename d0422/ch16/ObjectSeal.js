const person = {
  name: 'lee',
};
console.log(Object.isSealed(person));
Object.seal(person);
console.log(Object.isSealed(person));

person.age = 20; //무시, strict 모드에서는 에러
console.log(person);

person.name = 'Kim'; //잘 실행됨
console.log(person);
