const wrapInArray = <T>(value: T) => {
  // amar cacchi params e je kono kisu asuk
  // any dile value jekono kisu dite parbo.
  return [value];
};
// (type parameter) something in <something>(value: something): something[]
// T common practice
const stringArr = wrapInArray<string>("abc");
const numberArr = wrapInArray(123);
// const booleanArr = wrapInArray(false); error

// numberArr.map((item) => item.toUpperCase());
// bar bar arrow down korte hobe. amra cai ei type ta properly type korte keeping in mind jeno ei function ta reuseable take.

interface User {
  name: string;
  role: string;
}

// API teke asle aro je kono kisu hote pare

interface Blog {
  title: string;
  description: string;
  data: string;
}

// success ar statusCode common. shape ta kasa kasi datar bitor jekono kisu hote pare.

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

// type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const userRes: ApiResponse<User> = {
  statusCode: 200,
  success: true,
  data: {
    name: "abc",
    role: "edhbg",
  },
};
