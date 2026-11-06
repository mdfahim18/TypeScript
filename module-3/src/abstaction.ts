abstract class Employee {
  // class gular jonno ekta contract toiri kora. ei ei jinis egula must emplement kortei hobe. 2nd oi class ta sora sori apni initiate ba object instance toiri korte parben na. amra ekta contract create korbo jeta onnano clas mante baddo.
  constructor(
    public readonly name: string,
    protected _baseSalary: number
  ) {}

  get baseSalary() {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary cannot be negative value");
    }
    this._baseSalary = newSalary;
  }

  salaryWithBonus() {} //eta child create korte baddho noy.

  abstract calculatePay(): number; // {} diye implement korte parbo na
  // abstract getResources(): string[];
  // abstract registerEntryTime(): string;

  // ei class ke inherit ba extend kore sob gula sub class e egula dite hobe
  // egular bitore ki implement hocche egula niye worry na
}

class Manager extends Employee {
  calculatePay() {
    // ekane must ei method liktei hobe
    return this.baseSalary + 5000;
  }
}
class Developer extends Employee {
  calculatePay() {
    return this.baseSalary + 3000;
  }
}

const manager = new Manager("Fahim", 22000);
const developer = new Developer("Rahim", 24000);

abstract class Employee2 {
  abstract calculatePay(): number;
  abstract getResources(): string[];
}

abstract class TechnicalEmployee extends Employee2 {
  abstract getTechStack(): string[];
}
//Child Class যদি নিজেই abstract হয়, তাহলে তাকে সব abstract methods implement করতে হবে না।
