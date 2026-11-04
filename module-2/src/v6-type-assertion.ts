// Type assertion

// "as" systax

type Status = "pending" | "approved" | "rejected";

// type Status = "pending" | "approved" | "rejected" | string; evabe korle o problem karon

// const someStatus: "pending" = "pending"; erokom hole error asto na. amra shudu value na type o check kortesi. lileral type diye
const someStatus: string = "pending";
// let Status = 'bacdjd'

const showStatus = (status: Status) => {
  console.log("your correct application status is" + status);
};

showStatus(someStatus as Status);

// ekanne status er jekono ekta hobe. eta bole dicchi

// but eta kom use kora valo karo. monehoy amader env teke url asar kotha chilo but url nai but amra "as string" kore disi. tkohon empty string asbe jeta amra cai na.

// must sure takle evabe assertion korbo

// non-null assertion

interface Config {
  port?: number;
}
const config: Config = {
  port: 5000,
};

// const currentPort: number = config.port!
// ekane "!" o dewa jete pare. mane must eta number

const currentPort: number = config.port as number;

// constant assertion
const configuration = {
  port: 8000,
  prefix: "/api/vi",
} as const;

// configuration.port = 5000 error

// kono object ke lockdown korte eta use korte pari
