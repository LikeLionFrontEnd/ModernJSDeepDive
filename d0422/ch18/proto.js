const obj = { a: '1' };
console.log(obj.__proto__ === Object.prototype);
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));
