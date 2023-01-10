function deepFreeze(target) {
  if (target && typeof target == "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    // 재귀 호출
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
}

const person = {
  name: "Lee",
  address: { city: "Seoul" },
};

deepFreeze(person);

console.log(Object.isFrozen(person)); // true

console.log(Object.isFrozen(person.address)); // true

person.address.city = "Busan";
console.log(person); // {name: "Lee", address: { city: "Seoul"}} 안 바뀜. 에러는 안남
