# Typscript-Using-Method-And-Examples  

This repository will help every js and ts frontend-backend developer and beginners are very helpful. This repository is coming with beginners in mind.

<details>
<summary>
  বাংলায় পড়ুন
</summary>
<br >
  
- এই repository  প্রত্যেক JS AND TS ফ্রন্টএন্ড-ব্যাকএন্ড Developer দের কিছুটা সহযোগিতা করতে পারে । 

</details>  





<details>
<summary>
what is typeScript
</summary>
<br >


TypeScript is a programming language that's very similar to JavaScript. It's like a "superset" of JavaScript, which means it adds some extra features on top of JavaScript. These features help developers catch errors early on and make it easier to work with large and complex codebases. In simple words, TypeScript helps you write JavaScript code with fewer mistakes and more structure.

</details> 

<details>
<summary>
 Why we will be use ts 


</summary>
<br >


English: TypeScript helps catch errors early, improves code quality, and enhances developer productivity.

বাংলা: TypeScript সহযোগিতা করে ত্রুটি সমূহকে প্রাথমিকভাবে ধরা পরে, কোডের গুণমান উন্নত করে, এবং ডেভেলপারের কর্মক্ষমতা বাড়ায়।

</details> 

<details>
<summary>
What is benefit of typescript 


</summary>
<br >

English: The benefits of TypeScript include catching errors early, improving code quality, and enhancing developer productivity.

বাংলা: TypeScript এর সুবিধাগুলির মধ্যে ত্রুটি সমূহকে প্রাথমিকভাবে ধরা পাওয়া, কোডের গুণমান উন্নত করা, এবং ডেভেলপারের কর্মক্ষমতা বাড়ানো রয়েছে।  

 JS type in Ts 
- number. string. boolean. null. undefined. Object. symbol 

TS Own types 
- interface. void. array. Enum. union. inersaction

</details> 

<details>
<summary>
how to install ts 


</summary>
<br >

1. First, make sure you have Node.js installed on your computer. You can download and install it from the official Node.js website: https://nodejs.org/

2.  open your command prompt or terminal.

3. To install TypeScript globally, 
```
npm install -g typescript
```

4. TypeScript should be installed on your system.

5. To verify that TypeScript is installed, you can check the version by running:
```
tsc --version
```

6. If TypeScript is installed correctly, you should see the version number displayed in the terminal.


</details> 

<details>
<summary>
Run Ts code
</summary>
<br >



1. Write your TypeScript code in a file with a `.ts` extension. For example, you can create a file named `example.ts`.

2. Open your command prompt or terminal and navigate to the directory where your TypeScript file is located.

3. Compile your TypeScript code into JavaScript using the TypeScript compiler (`tsc`). Run the following command:
```
tsc example.ts
```
This command will generate a JavaScript file (`example.js`) in the same directory.

4. Once the TypeScript code is compiled, you can run the generated JavaScript file using Node.js. Run the following command:
```
node example.js
```


</details> 

<details>
<summary>
Config ts file
</summary>
<br >



1. **Initialize TypeScript Configuration**: In your project directory, open a terminal or command prompt.

2. **Create a `tsconfig.json` file**: Run the following command:
   ```
   tsc --init
   ```
   This command generates a `tsconfig.json` file with default settings.

3. **Configure `tsconfig.json`**: Open the generated `tsconfig.json` file in a text editor. Here you can configure various TypeScript compiler options according to your project's needs. Some common options include:
   - `"target"`: Specifies the version of ECMAScript to compile to (e.g., `"ES5"`, `"ES6"`).
   - `"outDir"`: Specifies the output directory for compiled JavaScript files.
   - `"rootDir"`: Specifies the root directory of TypeScript source files.
   - `"include"`: Specifies the files to include in compilation.
   - `"exclude"`: Specifies the files to exclude from compilation.

4. **Write TypeScript Code**: Create `.ts` files in your project directory and write your TypeScript code in them.

5. **Compile TypeScript Code**: Run the TypeScript compiler (`tsc`) in the terminal to compile your TypeScript files. If you have configured `tsconfig.json`, you can simply run:
   ```
   tsc
   ```
   This command will compile all TypeScript files in the project according to the configuration specified in `tsconfig.json`.

6. **Run the Compiled JavaScript Code**: After compiling, you can run the generated JavaScript files using Node.js:
   ```
   node path/to/compiled/file.js
   ```


</details> 



<details>
<summary>
What is primitive and none primitive data type
</summary>
<br >
list of primitive data types in TypeScript:

1. `number`: Represents numeric values like integers or floating-point numbers.
2. `string`: Represents text or string values.
3. `boolean`: Represents true or false values.
4. `null`: Represents an intentional absence of any value.
5. `undefined`: Represents a variable that has been declared but not assigned a value.
6. `symbol`: Represents unique and immutable values, often used as object keys.

none primitive data types 
- array 
- tuple
- object


```js 
// Basic ts

// 1- string
let Myname: string = "Rakib";

// 2- number
let number: number = 123;

// 3-Boolean
let isAdmin: boolean = true;

// 4- null
let y: null = null;

// 5-undefined
let x: undefined = undefined;

// Array
let freind: string[] = ["rakib", "sadiya"];

let eligibleRollLIst: number[] = [34, 435, 434];
eligibleRollLIst.push(43);

//  tuple --> array --> order--> type of value

let coordinates: [number, number] = [3423, 434];

let ageName: [number, string] = [22, "rakib"];

```



</details> 



<details>
<summary>
What is Object in ts


</summary>
<br >


In TypeScript, an object is like a container that holds related information. It's made up of key-value pairs. For example:
```typescript
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
```
Here, `person` is an object with properties like `name`, `age`, and `isStudent`, each storing different kinds of information about John. 

```js
const user: {
  company: "Ph Hero"; // type- literal types
  fristName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  company: "Ph Hero",
  fristName: "Rakibul",
  lastName: "Islam",
  isMarried: true,
};

```

</details> 


<details>
<summary>
What is Function in ts


</summary>
<br >
// learning Function

//  normal function
//  arrow Function

function add(num1: number, num2: number) {
  return num1 + num2;
}

// arrow function
const addArrow = (num1: number, numb2: number): number => num1 + numb2;

//  object --> function --> method

const poorUser = {
  name: "rakib",
  balance: 0,
  addBalance(balance: number): string {
    return `My new Balance is ${this.balance + balance}`;
  },
};



English:
1. **Arrow Function**: `addArrow` is a function that takes two numbers as input and returns their sum. It's written using arrow function syntax `(parameters) => expression`.

2. **Object - Function - Method**: `poorUser` is an object representing a user with properties like `name` and `balance`. Inside this object, there's a function `addBalance` that takes a number as input and returns a string indicating the new balance after adding the input amount to the current balance. It's called a method because it's a function inside an object.

Bangla:
1. **অ্যারো ফাংশন**: `addArrow` হলো একটি ফাংশন যেখানে দুটি সংখ্যা নেয় এবং তাদের যোগফল ফেরত দেয়। এটি অ্যারো ফাংশন সিনট্যাক্স `(প্যারামিটার) => এক্সপ্রেশন` ব্যবহার করে লেখা হয়েছে।

2. **অবজেক্ট - ফাংশন - মেথড**: `poorUser` হলো একটি অবজেক্ট যেখানে `নাম` এবং `ব্যালেন্স` এর মত গুলো প্রোপার্টি আছে। এই অবজেক্টের ভিতরে, `addBalance` হলো একটি ফাংশন যা একটি সংখ্যা নেয় এবং তার বর্তমান ব্যালেন্সে যোগ করার পরিণামের নতুন ব্যালেন্স নির্দেশ করে। এটিকে একটি মেথড বলা হয় কারণ এটি অবজেক্টের ভিতরে একটি ফাংশন।



</details> 


<details>
<summary>
What is Spread, Rest Operator and Destructuring,


</summary>
<br >

1. **Spread Operator (`...`)**:
   - English: The spread operator `...` allows you to expand elements of an iterable (like an array or object) into places where multiple elements are expected.
   - Bangla: স্প্রেড অপারেটর `...` আপনাকে ইটারেবলের (যেমন একটি অ্যারে বা অবজেক্ট) উপাদানগুলি নতুন উপাদানে বিস্তার করতে অনুমতি দেয়।

2. **Rest Operator (`...`)**:
   - English: The rest operator `...` gathers the remaining parameters into an array, representing an indefinite number of arguments.
   - Bangla: রেস্ট অপারেটর `...` অবশিষ্ট প্যারামিটারগুলি একটি অ্যারেতে সংগ্রহ করে, অসীম সংখ্যক আর্গুমেন্ট প্রতিনিধিত্ব করে।

3. **Destructuring**:
   - English: Destructuring allows you to extract values from arrays or objects and assign them to variables in a concise way.
   - Bangla: ডিস্ট্রাকচারিং আপনাকে অ্যারে বা অবজেক্ট থেকে মান উত্তোলন করে এবং তাদেরকে সংক্ষিপ্ত উপায়ে ভেরিয়েবলগুলিতে বর্তমান করতে দেয়। 

```js 
{
  //  spread operator
  //    rest operator
  //  distructure

  const bro1: string[] = ["hasib", "faruk"];
  const bro2: string[] = ["roton", "ratul"];
  bro1.push(...bro2);

  const mentors1 = {
    ts: "misba",
    redux: "mir",
  };
  const mentors2 = {
    prisma: "mizan",
    nextjs: "tonnmoy",
  };

  const mentorLIst = {
    ...mentors1,
    ...mentors2,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(freind));
  };

  greetFriends("abul", "kabul", "ubul", "babul");

  // 
}

//  distructuring
{
  const user = {
    id: 111,
    name: {
      fristName: "sadiya",
      middleName: "islam",
      lastName: "sinthiya",
    },
    conctactNo: "01754836031",
    address: "pabna",
  };

  const {
    conctactNo,
    name: { fristName },
  } = user;
}

//  array distructuring

const myFriends = ["chanler", "joey", "ross"];

const [, , besfreind, ...rest] = myFriends;


```

</details> 


<details>
<summary>
What is Type alias


</summary>
<br >
Type alias is a feature in TypeScript that allows you to create a new name for a type. It's useful for giving descriptive names to complex types or for creating shorter names for types that are used frequently. With type alias, you can create custom types based on existing types or combine multiple types into one. It helps make your code more readable and maintainable by providing meaningful names for types.

```js 
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
```

</details> 


<details>
<summary>
What is Ternary, Optional Chaining & Nullish Coalescing Operator


</summary>
<br >


1. **Ternary Operator**:
   - English: The ternary operator `condition ? expr1 : expr2` is a shorthand way of writing an if-else statement. It evaluates the `condition`, and if it's true, it returns `expr1`, otherwise it returns `expr2`.
   - Bangla: টার্নারি অপারেটর `condition ? expr1 : expr2` হলো একটি ছোট প্রকারের ইফ-এলস স্টেটমেন্ট লেখার উপায়। এটি `condition` এর মান এবং যদি সত্য হয়, তবে এটি `expr1` কে ফেরত দেয়, অন্যথায় এটি `expr2` কে ফেরত দেয়।

2. **Optional Chaining Operator**:
   - English: The optional chaining operator `?.` is used to access properties of an object without having to check if each property exists. It returns `undefined` if a property in the chain is null or undefined.
   - Bangla: অপশনাল চেইনিং অপারেটর `?.` ব্যবহার করা হয় অবজেক্টের প্রপার্টি অ্যাক্সেস করতে যেখানে প্রত্যেক প্রপার্টি বিদ্যমান কি না তা চেক করার প্রয়োজন না করে। যদি চেইনের কোনো প্রপার্টি null অথবা undefined হয়, তবে এটি `undefined` ফেরত দেয়।

3. **Nullish Coalescing Operator**:
   - English: The nullish coalescing operator `??` is used to provide a default value when a variable is null or undefined. It returns the right-hand operand if the left-hand operand is `null` or `undefined`, otherwise it returns the left-hand operand.
   - Bangla: নালিশ কো-অ্যালিসিং অপারেটর `??` ব্যবহার করা হয় যখন একটি ভ্যারিয়েবল null অথবা undefined হলে একটি ডিফল্ট মান সরবরাহ করতে। যদি বাম অপারেন্ড null বা undefined হয়, তবে এটি ডান অপারেন্ড ফেরত দেয়, অন্যথায় এটি বাম অপারেন্ড ফেরত দেয়।
</details> 

-----------------------------------
<details>
<summary>
What is Type Assertion/Type Narrowing (টাইপ অ্যাসারশন/টাইপ ন্যারোয়িং)


</summary>
<br >
Type Assertion/Type Narrowing (টাইপ অ্যাসারশন/টাইপ ন্যারোয়িং):
English: Type assertion or type narrowing allows you to tell TypeScript that you know more about the type of a value than it does.
Bangla: টাইপ অ্যাসারশন বা টাইপ ন্যারোয়িং আপনাকে বলে দেয় যে আপনি ভ্যালুর টাইপের সম্পর্কে টাইপস্ক্রিপ্ট থেকে অনেক কিছু জানেন।

```js 
{
  let anything: any;

  anything = "next level web development";

  //   anything = 222222;

  //   (anything as number).toFixed;

  const kgTogm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return convertValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgTogm(1000) as number;
  const result2 = kgTogm("1000") as string;
  type CustomError = {
    message: string;
  };
  try {
  } catch (erro) {
    console.log((erro as CustomError).message);
  }
}

```
</details> 


<details>
<summary>
What is Interface, Type Vs Interface (ইন্টারফেস, টাইপ বনাম ইন্টারফেস):

</summary>
<br >
English: Interfaces and types are similar in TypeScript but have some differences. Interfaces are more commonly used for defining shapes of objects, while types can represent many things including objects, unions, intersections, and more.
Bangla: ইন্টারফেস এবং টাইপগুলি টাইপস্ক্রিপ্টে প্রায়ই একই কাজ করে কিন্তু কিছু পার্থক্য রয়েছে। ইন্টারফেস প্রধানত অবজেক্টের আকার সংজ্ঞায়িত করার জন্য ব্যবহৃত হয়, যখন টাইপগুলি অবজেক্ট, ইউনিয়ন, ইন্টারসেকশন এবং আরও অনেক কিছু প্রতিনিধিত্ব করতে পারে।

```js

  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }
  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user1: UserWithRole2 = {
    name: "Rakib",
    age: 10,
    role: "Manager",
  };

  //  js --> object, array --> object function --> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollnumber: Roll2 = [12, 12, 12];

  // interface in function

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2; 
```


</details> 


<details>
<summary>

Introduction To Generics

</summary>
<br >
 Introduction To Generics (জেনেরিক্সের পরিচিতি):
English: Generics in TypeScript allow you to create reusable components that can work with a variety of data types while maintaining type safety.
Bangla: জেনেরিক্স টাইপস্ক্রিপ্টে পুনরাবৃত্তিমূলক কোড তৈরি করার সুযোগ দেয় এবং টাইপ সেফটি বজায় রাখার মধ্যে ভিন্ন ধরণের ডেটা টাইপ সহজেই কাজ করাতে পারে।

```js
{
  
  type GenericsArray<T> = Array<T>;

  //   const rollnumber: number[] = [12, 323, 23, 23];
  const rollnumber: GenericsArray<number> = [12, 323, 23, 23];

  //   const mentors: string[] = ["mr x", "mr y"];
  const mentors: GenericsArray<string> = ["mr x", "mr y"];
  //   const boolArrat: boolean[] = [true, false, true];
  const boolArrat: GenericsArray<boolean> = [true, false, true];

  const user: GenericsArray<{ name: string; age: number }> = [
    {
      name: "aa",
      age: 323,
    },
    {
      name: "aa",
      age: 323,
    },
  ];
  //  Generic Tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["mr x", "mr y"];
  const userId: GenericTuple<number, { name: string; email: string }> = [
    12,
    { name: "rakib", email: "rakib@gmail.com" },
  ];
}

```
</details> 


<details>
<summary>
Generics With Interfaces (ইন্টারফেস সহ জেনেরিক্স):
</summary>
<br >

English: You can use generics with interfaces to create flexible and reusable components that work with different types of data.
Bangla: আপনি ইন্টারফেসের সাথে জেনেরিক্স ব্যবহার করতে পারেন যাতে বিভিন্ন ধরণের ডেটার সাথে কাজ করতে সহজ এবং পুনরাবৃত্তিমূলক কোড তৈরি করা যায়।


```js

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    watch: T;
    bike?: X;
  }

  type Watch = { brand: string; model: string };
  const poorDeveloper: Developer<Watch> = {
    name: "rakib",
    computer: {
      brand: "Intel",
      model: "x-867",
      releaseYear: 2023,
    },
    watch: {
      brand: "xiomi",
      model: "mi-5",
    },
  };

  interface AplleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamhaBike {
    model: string;
    engine: string;
  }
  const ReachDeveloper: Developer<AplleWatch, YamhaBike> = {
    name: "rakib",
    computer: {
      brand: "HP",
      model: "x-25SUR",
      releaseYear: 2023,
    },
    watch: {
      brand: "apple",
      model: "apple-5",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamha",
      engine: "100cc",
    },
  };

```

</details> 


<details>
<summary>
Function With Generics (জেনেরিক্স সহ ফাংশন):


</summary>
<br >


English: Functions can also use generics to work with different types of data in a flexible and type-safe manner.
Bangla: ফাংশনগুলিও বিভিন্ন ধরণের ডেটা সহজেই এবং টাইপ সেফটি বজায় রাখার জন্য জেনেরিক্স ব্যবহার করতে পারে।

```js
{
  const creatArray = (param: string): string[] => {
    return [param];
  };
  const creatArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = creatArray("bangladesh");
  creatArrayWithGenerics;
  const resGenArr = creatArrayWithGenerics<string>("Bangladesh");

  type User = { id: number; name: string };
  const resGenObj = creatArrayWithGenerics<User>({
    id: 1212,
    name: "Mr pashan",
  });
  //   ------
  const creatArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result10 = creatArrayWithTuple<string, number>("bangladesh", 1221);
  creatArrayWithGenerics;
  const resGenArr1 = creatArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    { name: "asia" }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level web";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "mr x",
    email: "mr x@gmail.com",
  });
  const student2 = addCourseToStudent({
    name: "mr y",
    email: "mr y@gmail.com",
  });
}

```
</details> 

<details>
<summary>
What is


</summary>
<br >
Constraints In TypeScript (টাইপস্ক্রিপ্টে নিবন্ধন):
English: Constraints in TypeScript allow you to limit the types that can be used with generics, ensuring that only certain types are accepted.
Bangla: টাইপস্ক্রিপ্টে Constraints দ্বারা আপনি জেনেরিক্স সঙ্গে ব্যবহৃত হতে পারে টাইপগুলির সীমা নির্ধারণ করতে পারেন, যেন কেবল নির্দিষ্ট ধরণের টাইপগুলি গ্রহণ করা হয়।

```js
{
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string; devtype: string }
  >(
    student: T
  ) => {
    const course = "next level web";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devtype: string;
  }>({
    id: 32323,
    name: "mr x",
    email: "mr x@gmail.com",
    devtype: "Next level dev",
  });
  const student2 = addCourseToStudent({
    id: 323,
    name: "mr y",
    email: "mr y@gmail.com",
    devtype: "next level",
  });
}

```

</details> 
<details>
<summary> constraint using of key


</summary>
<br >


In simple terms, a constraint using a key in TypeScript means that you're applying a rule or condition to data using a specific identifier, or "key," to ensure data integrity.

এটা মানে হলো আপনি ডেটা সংরক্ষণের সময় নির্দিষ্ট ইউনিক আইডি বা কী ব্যবহার করে নিশ্চিত করছেন যে ডেটা সঠিকভাবে সংরক্ষিত হচ্ছে এবং কোনও ক্ষেত্রে ডেটা ভুলে যাচ্ছে না। 

```js 

{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; // manualy

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "mr rakib",
    age: 20,
    addres: "pabna",
  };
  const car = {
    model: "toyota 100",
    year: 2000,
  };

  const result = getPropertyValue(car, "model");
}
```

</details> 
