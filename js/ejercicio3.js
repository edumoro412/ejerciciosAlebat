// Comparaciones con booleanos
console.log(false + false); //0
console.log(false + true); //1
console.log(true + true); //2

// Comparaciones con arrays
console.log([] === []); //false porque estan vacios
console.log([] + []); //sale vacio
console.log([1, 2] + [3, 4]); // [1,23,4] porque al igual que la siguiente se concatena
console.log([1] + 1); //11 porque es como que se concatena
console.log([1] - 1); //0

// Comparaciones con objetos
console.log({} + {}); //object Object
console.log({} === {}); //false porque estan vacios
console.log([] === {}); // false porque no son del mismo tipo y estan vacios

// Comparaciones especiales
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(null == 0); //false
console.log(null <= 0); //true
console.log(undefined == null); //true

// Operaciones con NaN
console.log(NaN + 1); //NaN
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
