// * Access Modifier

// ei 3 ta visivility
// public / kisu na dile default public
// private / class er bayre kono vabei use korte dey na
// protected // class er bayre use kora jabe na but ei class ke jodi onno kono class inherit kore tahole

// ei 1 ta immutivility

// "readonly"

class Employee {
  // name: string;
  // private baseSalary: number;
  // public readonly baseSalary: number; // ekane "public" ki must lekai lagbe? shudu "readonly" dile hobe na?

  // _baseSalary: number;
  // #baseSalary: number;

  // constructor(name: string, baseSalary: number) {
  // this.name = name;
  // this.#baseSalary = baseSalary;
  //   this.baseSalary = baseSalary;
  // }

  constructor(
    public readonly name: string, // ekane o ki public na dile kaj korbe na? default to public ei
    private _baseSalary: number
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  } // ekn baseSalary shudu read korte partesi

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }
  // same nam dile problem hobe na keno. output 22000 na ese 30000 keno? eta last e reasign kora hoise tai?
}

// normal method ar "get", "set" er moddhe difference ki. keno ei get set use kora hoy
const employee = new Employee("Fahim", 22000);
const employee2 = new Employee("Rahim", 24000);

// employee.baseSalary = -500;
// employee.baseSalary = 30000;

// employee.#baseSalary = -500 // Property '#baseSalary' is not accessible outside class 'Employee' because it has a private identifier.
// employee.baseSalary = -500 eta howa utic hoy
// ami cai eta controll korte ar controll manner e eta modefiy korte

// js amader procted ba private kisu dey na. js er default e eta chilo na tai dev "_" underscore dito. er pore # private indentifer.

// console.log(employee.salaryWithBonus);
console.log(employee.baseSalary);
