var foo = '' ?? 'default string';
console.log(foo); //default string
foo = '' || 'default string';
console.log(foo); //''
