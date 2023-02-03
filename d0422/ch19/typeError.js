const parent = {};
const child = {};
child.__proto__ = parent;
parent.__proto__ = child; //error
