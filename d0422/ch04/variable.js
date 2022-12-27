// hoisting
console.log(varScore); //undefined
try {
  console.log(letScore); //Error
} catch (err) {
  console.log(err);
}
varScore = 1;
var varScore;
let letScore = 2;
console.log(varScore);
console.log(letScore);
