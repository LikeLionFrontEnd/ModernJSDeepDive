const person = { name: 'lee' };
console.log(Object.isExtensible(person)); //true
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); //false

person.age = 20; //무시, strict 모드에서는 에러를 일으킴
Object.defineProperty(person, 'age', {
  value: 20,
}); //TypeError
