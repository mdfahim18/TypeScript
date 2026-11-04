const grettings = (name: string, gender?: string, role = "admin") => {
  console.log(name, gender, role);
};
grettings("fahim");

// type P = ["a", "b"];

// const a: P = ['a', 'b']

// type A = {
//   name: string;
//   age: number;
// };

// type B = {
//   name: string;
//   email: string;
// };

// let user: A | B;

// user = {
//   name: "Fahim",
//   age: 22,
//   email: "fahim@example.com",
// };

let data: string[] | number[];

// data = [10, 20, 30];

// data.push(40);
// data = ['a']

// data.push("hello");

// let result: void = undefined;

// let value: undefined = result;

// function fail(): never {
//   throw new Error("Failed");
// }

// const result = fail();
// console.log(result);

