// "typeof"

// let x = [123];
let x = null;
// console.log(typeof x === "null"); error
console.log(typeof x);

// array, null nidristo kono type nai.

// ekn eta object

console.log(typeof x === "symbol");

// Type guard

const print = (value: string | number) => {
  // value eta broader type eta ke narrow. exact type ke abar narrow korte hoy
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value; // ekane number
  } else {
    return value; // never type
  }
};

// Truthiness

type User = {
  name: string;
  address?: {
    // eta optional korar por  'user.address' is possibly 'undefined'. error diche
    street: string;
  };
} | null;

const LoggedInUser: User = {
  name: "fahim",
  address: {
    street: "abc",
  },
};

const showAddress = (user: User) => {
  if (user && user?.address) {
    console.log(user.address.street);
    return;
  }
  throw new Error("User not found");
};

// some caveat of type guard
// array te o object null te o object. eta kivabe solve korte pari

const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    // x $$ truhiness
    for (let str of x) {
      // error. eta je null na eta o handle korte hobe
      console.log(str);
    } // eto thuk diye amra narrow down korsi shudu string er jonno.
  }
  // else {
  //   console.log(x); // string or null roye gese
  // }
  else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("");
  }
}; // shudu type guard dile hobe na. type guard ar truthiness o lagte pare

printAll(null); // ekane empty string print hobe na null print hobe

// Equality

const compate = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y); // 2 o ta number
  }
};

const printAll2 = (x: string | string[] | null) => {
  if (x !== null) {
    for (let str of x) {
      if (typeof x === "object") {
        console.log(str);
        return;
      }
      // ekane problem (parameter) x: string | string[]
      // console.log(str);
      console.log(x);
      return;
    }
  }
  console.log("");
};

printAll2("abcd"); // result protita alada alada print hocche

// "in" operator
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim; // ekn ar narrow korte hobe na. if er bayre sob kisu. flish
};

// "instaceof" check
// ekta object ekta class er instace ki na check korte instaceof diye check korte pari
const date = new Date();
const err = new Error("something went wrong");

console.log(date instanceof Date);
console.log(err instanceof Error);
// console.log(err instanceof Date); false

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
};

showDate("12-16-1971"); // 1971-12-15T18:00:00.000Z

// Discriminated union

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    // object itself teke info gather kore narrow down korte paro
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
};
