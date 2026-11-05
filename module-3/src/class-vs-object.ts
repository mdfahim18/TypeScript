// interface Employee {
//   name: string;
//   baseSalary: number;
// }

// const employee: Employee = {
//   name: "Fahim",
//   baseSalary: 22000,
// };

// const employee2: Employee = {
//   name: "Rahim",
//   baseSalary: 22000,
// };

class Employee {
  // name: string = "Fahim"; // hardcoded
  // baseSalary: number = 22000;
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

// "this" ekn ei class ke indicate kortese. porobortite ei class teke create kora object ke indicate kortese. "this" na dile prottekbar same jinis diye intregate hoto

// jekono class use korte hole "new" lekte hobe
// const employee = new Employee("Rahim"); // constructor chara. Expected 0 arguments, but got 1.
const employee = new Employee("Fahim", 22000);
const employee2 = new Employee("Rahim", 24000);

console.log(employee instanceof Employee); // true
console.log(employee);
console.log(employee2); // 2 o tate same propery
