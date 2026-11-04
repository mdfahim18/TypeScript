// Top types

let helloWrold: any = "hello world";
helloWrold = 123;
helloWrold.length;

const something: unknown = "hello world";

// something.length;

// Core types
let something2: unknown;

const num: number = 123;

let nothing: void;
something2 = num;

something2 = nothing;

// Nullish type

interface User {
  name: string;
}

type LoggedInUser = User | null;

const currentUser: null = null;

// Unit type

const greet = () => {
  console.log("hello world");
};

// const greetings: string | void = greet();
greet();

// Sub-type of unit type
const anotherGreet = (): undefined => {
  console.log("hello world");
};
anotherGreet();

const greetings: void = anotherGreet();
console.log(greetings);

// Bottom type

// let neverHappening: never = 'abgdhg'

const getError = (msg: string) => {
  throw new Error(msg);
};
const x: null = getError("abc");
