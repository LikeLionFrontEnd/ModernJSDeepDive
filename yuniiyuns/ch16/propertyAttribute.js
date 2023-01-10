// const person = {
//   name: "kim",
// };

// console.log(Object.getOwnPropertyDescriptor(person, "name"));
// //{ value: 'kim', writable: true, enumerable: true, configurable: true }

const person = {
  name: "kim",
  type: "인간",
};
console.log(Object.getOwnPropertyDescriptors(person));
