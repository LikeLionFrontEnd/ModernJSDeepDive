const person = {
  firstName: "ungmo",
  lastName: "lee",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.firstName + " " + person.lastName); // ungmo lee

person.fullName = "Heegun Lee"; // 접근자 프로퍼티를 fullName에 값을 저장하면 setter 함수가 호출된다.

console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");

console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");

console.log(descriptor);
