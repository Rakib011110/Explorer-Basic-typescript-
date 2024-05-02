{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
  };

  const student1: Student = {
    name: "rakib",
    age: 22,
    gender: "male",
    contactNo: "0173333333",
  };
  const student2: Student = {
    name: "mir",
    age: 24,
    gender: "male",
    contactNo: "0176666666",
  };
  const student3: Student = {
    name: "mir",
    age: 24,
    gender: "male",
    contactNo: "0176666666",
  };
  type UserName = string;
  type IsAddmin = boolean;

  const userName: UserName = "rakib";
  const isAdmin: IsAddmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
