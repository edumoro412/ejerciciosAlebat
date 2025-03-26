console.log(a);
var a = "hola";

//Esto devuelve: undefined (porque intenta acceder a la variable, pero simplemente no la encuentra)
//-----------------------
console.log(b);
let b = "hola";

//Esto devuelve: que no esta inicializada la variable
//-----------------------
console.log(c);
const c = "hola";

//Esto devuelve: que no está inizializada la variable
//-----------------------
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}

//Esto devuelve: Hola desde sayHi!
//-----------------------
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();

//Esto devuelve: Adios desde sayBye!
