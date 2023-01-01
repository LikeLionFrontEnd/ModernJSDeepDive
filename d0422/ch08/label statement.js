outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j == 3) break outer;
    console.log(`inner ${i},${j}`);
  }
}
console.log(`inner ${i},${j}`);
