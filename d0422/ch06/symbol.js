var key = Symbol('key');
var key2 = Symbol('key');
console.log(key, key2); //Symbol(key) Symbol(key)
console.log(key == key2); //false?!
console.log(key == key);
