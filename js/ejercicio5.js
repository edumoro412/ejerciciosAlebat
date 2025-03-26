const myMap = new Map();

function findAnimal() {
  return true;
}

const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profesion: "Barro man",
};

const secondUser = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", secondUser);
myMap.set("funcion", findAnimal());
myMap.set("color", "color");

console.log(myMap);
console.log(myMap.get("moroso"));
console.log(myMap.has("hola"));
console.log(myMap.size);

myMap.forEach((valor, clave) => {
  console.log(`Clave=>${clave}  Valor=>${valor}`);
});

myMap.delete("agarrado");

myMap.clear();
