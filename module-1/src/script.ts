const addTow = (a: number, b: number) => {
  return a + b;
};

console.log(addTow(77, 10));

// const arr: Array<string> =["prgramming", "hero"];

const arr: string[] = ["prgramming", "hero"];

const numArr: number[] = [1, 2, 3];

numArr.push(123);

const dhakaLatLong: readonly [number, number, number?] = [23.8103, 90.4125];

// dhakaLatLong.push('hello')
// dhakaLatLong.push(123);
// dhakaLatLong.push(123);

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("Fahim", "Ahmed"));

const grettings = (greeting: string = "hello", fullName: string) => {
  console.log(greeting + " " + fullName);
};

grettings(undefined, "fahim");

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4, 5, 6);

const logUserAction = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age] = args;
  console.log(name + " is " + age);
};

logUserAction("Fahim", 12, false);

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
}

type UserName = string;
// interface UserName  string;
type Address = {
  holdingNumber: number;
  streetName: string;
};
type TUser = {
  name: UserName;
  age: number;
  isActive: boolean;
  action: () => void;
  badge: string[];
  address: Address;
};
const user: TUser = {
  name: "fahim",
  age: 123,
  isActive: true,
  action: () => console.log("hello"),
  badge: ["abc", "def"],
  address: {
    streetName: "abc",
    holdingNumber: 123,
  },
};

const user2: IUser = {
  name: "rahim",
  age: 123,
  isActive: true,
  action: () => console.log("hello"),
  badge: ["abc", "def"],
};

// user.email = "fahim@gmail.com";
// console.log(user.address);
