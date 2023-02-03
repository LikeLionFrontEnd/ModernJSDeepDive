const Person=function(name){
    this.name=name;
}
Person.prototype={
    sayName(){
        console.log(`${this.name}`)
    }
};
const p=new Person("동길");
p.sayName();
console.log(p.constructor===Person);
console.log(p.constructor===Object);
Person.prototype={
    constructor:Person,
    sayName(){
        console.log(`${this.name}`)
    }
};
const a=new Person("동길");
console.log(a.constructor===Person);
console.log(a.constructor===Object);