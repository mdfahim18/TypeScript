// js ke ekta asynchronus kaj diso, future e resolve hobe. apatoto ekta placeholder use koro jeta Promise

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  data: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}

const fetchUser = async (): Promise<User | undefined> => {
  try {
    const res = await fetch("/api/vi/some-endpoint");
    const data = (await res.json()) as ApiResponse<User>;

    if (!res.ok || !data.success) {
      throw new Error(`Faild to fetch user data ${data.message}`);
    }
    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("something went wrong");
    }
  }
};
// default const res: Response
// if-else dewar pore Promise e ei error Function lacks ending return statement and return type does not include 'undefined'. karon function teke kicchu return hocche na. tai <User | undefined>

// default fetch e hover korle function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>

const userData = await fetchUser(); // fetchUser(): Promise<void> samne await dile shudu response asbe. responsve eta fetch teke astese.
// const data = await res.json(); eta dewar por ekane userData type "any".

// amader lokkon properly user data asbe na asle amarder error dibo
// ekn
// userData.name korte parchi

//   const data = await res.json(); ekane data ekono any. eta fix korte asserion korte hobe (await res.json()) as ApiResponse<User>;

// ekane   return data.data; karon Promise<User>

if (userData) {
  userData.name;
}
