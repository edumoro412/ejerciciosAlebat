type Bird = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

interface Dog extends Bird {
  race: string | "Husky" | "Labrador" | "Chucho";
  age: number;
}

interface Cat extends Pick<Bird, "name" | "canSleep"> {
  color: string;
}

interface Snake extends Pick<Bird, "canEat" | "canDrink" | "canSleep"> {}
const perro: Dog = {
  name: "Perro",
  canEat: true,
  canDrink: true,
  age: 4,
  canFly: true,
  canSleep: true,
  race: "Golden",
};

console.log(perro);

const gato: Cat = {
  name: "gola",
  canSleep: true,
  color: "amarillo",
};
