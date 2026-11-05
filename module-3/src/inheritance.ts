class Employee {
  constructor(
    public readonly name: string,
    protected _baseSalary: number
  ) {}

  // get baseSalary(): number {
  //   return this._baseSalary;
  // }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

// child parent er propery gula peye jabe

class Manager extends Employee {
  // name: string;
  // baseSalary: number;
  // teamMemberCount: number;

  // constructor(
  //   public teamMemberCount: number,
  //   name: string,
  //   _baseSalary: number
  // ) {
  //   super(name, _baseSalary);
  // Constructors for derived classes must contain a 'super' call.
  // child cls teke parent constructor ke call korte super keyword method use korchi
  // this.teamMemberCount = teamMemberCount;
  // }

  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount}`; // ekane this.name access korte parchi
  }

  describeManager(): string {
    return `${this.name} earns ${this._baseSalary}`;
    // this._baseSalary access korte parbo na

    // get baseSalary(): number {
    //   return this._baseSalary;
    // }
    // eta implement korini tai undefine  Fahim earns undefined
    // inheritance.js:61
  } // protected dewar por error cole gese
}

const employee = new Employee("Fahim", 22000);
const employee2 = new Employee("Rahim", 24000);

console.log(employee.describe());

// method ja action perform korbe tai ()

const manager = new Manager("Mizan", 24000, 20);
// seraily, sequence onujayi params dite hobe

console.log(manager.describe()); // no error. sob gula method er access pabe

console.log(manager.describeWork());

// console.log(manager._baseSalary); access korte dicche na eta subclass er bayre ache
