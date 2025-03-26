type Bird = {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
};

interface Dog extends Bird {
  race: string = "Husky" | "Labrador" | "Chucho";
  age: number;
}

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
