var value = 1;

const obj = {
  value: 100,
  foo() {
    const that = this;
    console.log("foo's that: ", that);
    // console.log("foo's this: ", this);
    setTimeout(function () {
      //   console.log("callback's this: ", this);
      console.log("callback's that: ", that);
      //   console.log("callback's this.value: ", this.value);
      console.log("callback's that.value: ", that.value);
    }, 100);
  },
};

obj.foo();
