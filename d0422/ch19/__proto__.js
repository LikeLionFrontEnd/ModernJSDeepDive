console.log(Object.prototype);
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

const obj = {};
const parent = {
  x: 1,
};
obj.__proto__ = parent;
console.log(obj.__proto__);
