function changer(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}

var num = 100;
var person = {
  name: 'Lee',
};
console.log(num, person);
changer(num, person);
console.log(num, person);
