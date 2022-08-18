/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`. 
*/

let name = prompt ("Enter your Name");
function sayHello(name){
return `Hello ${name}`
}
alert (`Hello ${name}`);

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

let firstName = prompt("Enter first Name");

let secondName = prompt("Enter second Name");

let fullName = firstName+" "+secondName ;

function getFullName(fullName){
  return `${fullName}`
}
alert (fullName);
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

let firstNum =  +prompt("Enter first number!");

let secondNum = +prompt("Enter second number!");

let sum = firstNum + secondNum ;

switch(true){
  case 1:
  alert (sum);
  break;
  default:
  alert(`Enter A Valid Input`)  
}
function addTwoNumbers(sum){
  return `${sum}`
}

alert(sum);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc(numA,numB,operation){

}
/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(){
  let year = +prompt(`Enter the year`);
  if (year % 400 === 0){
    alert(`true`);
  } else if(year % 100 === 0){
    alert (`false`);
  } else if (year % 4 === 0){
    alert (`true`);
  }else {
    alert (`false`)
  }
}

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
 function getFactorial(){
  let number = +prompt(`Enter a Number`);
  let final = 1;
  for (let i = number; i >= 1; i--){
    final *= 1;
  }
  alert(`The factorial is ${final}`);
 }