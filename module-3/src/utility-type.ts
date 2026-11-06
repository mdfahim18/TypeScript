// Utility Types

// Partial

interface User {
  id: string;
  name: string;
  email: string;
}

// interface OptionalUser {
//   id?: string;
//   name?: string;
//   email?: string;
// }

type PartialUser = Partial<User>;
// hover korle
// type PartialUser = {
//  id?: string | undefined;
//  name?: string | undefined;
//  email?: string | undefined;
// }

const updateProfile = (id: string, data: Partial<User>) => {};

// updateProfile("abdbg", { name: "mizan" });
// amra shudu nam change korte cai. baki jegula ase ogula object er moddhe change korar dorkar nai.

updateProfile("abdbg", { name: "mizan" });
// ekn kono error nei

// Required
interface Config {
  apiKey?: string;
  timeout?: number;
}

const initiallize = (config: Required<Config>) => {};

// initiallize({ apiKey: "abdbg" }); // mone koro timeout dilam na. ete kore req infinite hoye database server crush hoye jete pare.

initiallize({ apiKey: "abdbg", timeout: 3000 });
// sob gula optional takle o required kore dibe

// Pick

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;
// const preview: Product = {
//   name: "abc",
//   description: "efg",
// };
// ekabe id, price missing. tai erorr. amra ekn sob gula optional kore dite pari. but preview er jonno notun ekta type banate pari

const preview: ProductPreview = {
  name: "abc",
  description: "efg",
};

// name ar desc pick kore niye aschi

// Omit
interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

// const directoryEntry: Employee = {
//   id: 42,
//   name: "bob",
// };
// ekane salary, nid must dite hobe. but ei 2 ta sensitive information

type PublicEmployee = Omit<Employee, "salary" | "nid">;

const directoryEntry: PublicEmployee = {
  id: 42,
  name: "bob",
};

// Record
type Environment = "development" | "staging" | "production";

interface IEnvironment {
  development: string;
  staging: string;
  production: string;
}

// const apiUrls: IEnvironment = {
//   development: "http://localhost:3000/",
//   staging: "http://localhost:3000/",
//   production: "http://localhost:3000/",
// };

const apiUrls: Record<string, string> = {
  // 2 ta agrs ney
  development: "http://localhost:3000/",
  staging: "http://localhost:3000/",
  production: "http://localhost:3000/",
  // port: 3000 // korte <string, number>
  // text: 'bdgbfd' jekono kisu add kora jacche. tai
};

const apiUrls2: Record<Environment, string> = {
  // 2 ta agrs ney
  development: "http://localhost:3000/",
  staging: "http://localhost:3000/",
  production: "http://localhost:3000/",
  // test: "dgjie", // error
};
