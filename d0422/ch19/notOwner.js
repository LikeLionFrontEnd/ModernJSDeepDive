const o = {};
console.log(o.hasOwnProperty('__proto__')); //false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
console.log(o.__proto__ === Object.prototype); //true
