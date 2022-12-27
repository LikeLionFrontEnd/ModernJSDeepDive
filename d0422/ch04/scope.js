//scope
{
  var a = 1;
  let b = 1;
  const c = 1;
}
try {
  console.log(a);
  console.log(b); //Error
} catch (err) {
  console.log(err);
  try {
    console.log(c); //Error
  } catch (err) {
    console.log(err);
  }
}
