// Literal Type

type Status = "pending";
// type Status = 123;

const status: Status = "pending";

console.log(status);

// Basic Union
type Identity = string | number;

const id: Identity = "1234";

// const id1: Identity = 123;

// Literal Union

type Role = "user" | "admin" | "manager";

const userRole: Role = "manager";

// Object Union

type Admin = { id: number; role: "admin"; privillages: string[] };

type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = { id: 12, role: "admin", privillages: ["abc", "def"] };
