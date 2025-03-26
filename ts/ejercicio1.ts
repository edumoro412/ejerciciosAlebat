interface Animal {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}

type Bird = Animal & {
  canFly: boolean;
};

type Dog = Animal & {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
};

type Cat = Pick<Animal, "name" | "canSleep"> & {
  color: string;
};

type Snake = Pick<Animal, "canDrink" | "canEat" | "canSleep"> & {};
const Pajaro: Bird = {
  name: "Miguel",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const gato: Cat = {
  name: "Mario",
  canSleep: true,
  color: "blanco",
};
const perro: Dog = {
  name: "Perro",
  canEat: true,
  canDrink: true,
  age: 4,
  canSleep: true,
  race: "Husky",
};

const serpiente: Snake = {
  canSleep: true,
  canDrink: true,
  canEat: true,
};
console.log(perro);
console.log(serpiente);
console.log(gato);
