function deepFreeze(target) {
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}
const obj = {
  name: 'lee',
  address: {
    city: 'seoul',
  },
};

deepFreeze(obj);
console.log(Object.isFrozen(obj));
console.log(Object.isFrozen(obj.address));
