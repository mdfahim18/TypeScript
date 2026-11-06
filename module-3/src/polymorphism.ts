class Employee {
  constructor(
    public readonly name: string,
    protected _baseSalary: number
  ) {}

  get baseSalary() {
    return this._baseSalary;
  }

  calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }
}

// class Manager extends Employee {} // sub ba child class jodi exact same params ney tahole ekane constructor call na korte o ts behind the scence call kore dibe

class Manager extends Employee {
  override calculatePay() {
    // parent e taxrate nile tahole ekane taxRate newa jabe. naile error dibe. ekane taxRate na nile o problem nai.
    // override leka optional
    // return 'this.baseSalary + 5000';
    return this.baseSalary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
    public type: string
  ) {
    super(name, _baseSalary);
  }

  override calculatePay(taxRate: number) {
    return this.baseSalary + 3000 - this.baseSalary * taxRate;
  }
}

// child er moddhe jokhon kono kisu ekta override korchi seta must parent er function er signature er sate competable hote hobe.
// mane parent e jodi e jodi number return kore tahole child e o number return korte hobe

const employee = new Employee("Fahim", 22000);
const employee2 = new Employee("Rahim", 24000);

const manager = new Manager("Mizan", 22000);

const develoer = new Developer("Ruhan", 25000, "Backend");

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(develoer.calculatePay(0.1));

// polymorphism 2 vabe kora jay. ekta override arekta overload. ts e overload support kore na.
