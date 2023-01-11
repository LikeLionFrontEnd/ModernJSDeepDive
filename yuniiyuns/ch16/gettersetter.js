let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      return "너무 짧아요";
    }
    this._name = value;
  },
};

user.name = "";
console.log(user.name); // undefined
user.name = "Pete";
console.log(user.name); // Pete
console.log(user._name); // Pete, but 외부에서는 _ 변수에 접근하는 것을 지양한다.
