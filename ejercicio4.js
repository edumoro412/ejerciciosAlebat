//Primer codigo

const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profesion: "Barro man",
};

console.log(userName(user));

function userName(user) {
  let { name, last } = user;
  const fullName = "Me llamo " + name + " " + last;

  return fullName;
}

//Segundo codigo
const secondUser = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(secondUser) {
  let { salary, name, last } = secondUser;
  const annualSalary = salary * 12;
  const fullName = `${name} ${last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(secondUser));

//Tercer código

const thirdUser = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function isForeign(thirdUser) {
  if (canTakeHelps(thirdUser)) {
    return "Apto para la ayuda del gobierno";
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

function canTakeHelps(thirdUser) {
  let { nationality, age } = thirdUser;
  if (nationality !== "España" && age === 30) {
    return true;
  }
  return false;
}

console.log(isForeign(thirdUser));
