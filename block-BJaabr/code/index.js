// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(numA){
return 1 + numA;
}

// - Write a Function Expression

let addOne = function (numA) {
  return 1 + numA;
};

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (numA) => 1 + numA;

// - Write an Arrow Function with curly brackets

let addOne = (numA) => {
  return 1 + numA;
};

// - Execute the function

addOne(2);

// - Execute the function and store the return value in a variable.

let returnedValue =addOne(2);

// - What is the typeof returnValue

// typeof return value is Number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(numA){
  return  numA - 1;
  }
// - Write a Function Expression

let substractOne = function (numA){
  return numA - 1;
  };

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (numA) => numA - 1;

// - Write an Arrow Function with curly brackets

let substractOne = (numA) => {
  return numA - 1;
};
// - Execute the function

substractOne(21);

// - Execute the function and store the return value in a variable.

let retunedValue = substractOne(21);

// - What is the typeof returnValue
// typeof returnValue is Number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(numberA, numberB){
  return numberA + numberB;
}
// - Write a Function Expression

let sum = function(numberA, numberB){
   return numberA + numberB;
};

// - Write an Arrow Function without curly brackets(if possible)

let sum = (numberA, numberB) => numberA + numberB;

// - Write an Arrow Function with curly brackets

let sum = (numberA, numberB) => {
  return numberA + numberB;
};

// - Execute the function

sum(21,21)

// - Execute the function and store the return value in a variable

let retuedValue = sum(21,21);

// - What is the typeof returnValue

// typeof returnValue is Number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(numberA){
  return numberA * numberA;
}

// - Write a Function Expression

let square = function(numberA){
  return numberA * numberA;
};

// - Write an Arrow Function without curly brackets(if possible)

let square = (numberA) => numberA * numberA;

// - Write an Arrow Function with curly brackets

let square = (numberA) => {
  return numberA * numberA;
};

// - Execute the function

square(21);

// - Execute the function and store the return value in a variable

let retedValue = square(21);

// - What is the typeof returnValue

// typeof returnValue is Number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y){
  return x > y === true || false;
}

// - Write a Function Expression

let isGreater = function(x, y){
  return x > y === true || false;
};

// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => x > y === true || false;

// - Write an Arrow Function with curly brackets

let isGreater = (x, y) => {
  return x > y === true || false;  
};

// - Execute the function

isGreater(22,21)
// - Execute the function and store the return value in a variable

let reedValue = isGreater(22,21);

// - What is the typeof returnValue

// typeof returnValue is Number

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number){
  return (number % 2  == 0) ? "Number is even" : "Number is odd";
}

// - Write an anonymous Function Expression

const oddOrEven = function (number){
  return (number % 2  == 0) ? "Number is even" : "Number is odd";
}
// - Write an named Function Expression

const oddEven = function oddOrEven(number){
  return (number % 2  == 0) ? "Number is even" : "Number is odd";
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (number) => (number % 2  == 0) ? "Number is even" : "Number is odd";


// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  return (number % 2  == 0) ? "Number is even" : "Number is odd";  
};

// - Execute the function
 oddOrEven(21);
// - Execute the function and store the return value in a variable

let reetdValue = oddOrEven(21);

// - What is the typeof returnValue
// typeof returnValue is String
