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

const arr: number[] = [1, 3, 3, 4];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
