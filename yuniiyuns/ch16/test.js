function 기계() {
  this.a = "a";
  this.b = "b";
}

let machine = new 기계();

console.log(machine.name); // undefined

기계.prototype.name = "kim";

console.log(machine.name); // kim
