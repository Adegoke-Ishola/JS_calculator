// a simple calculator without a frontend display//
console.log("Hey, I feel it is a beautiful day for some calculation");
console.log("let's jump on it then");
// variable placeholder //
var symbol = ("'+' ; '-' ; '/' ; '*' ; '&' ?");
var choice = prompt(" what would you like to do '+' ; '-' ; '/' ; '*' ; '&' ?");

// take the operator input
//const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const num1 = Number(prompt('Enter first number: '));
const num2 = Number(prompt('Enter second number: '));

let result;

// using if comparison
if (choice == '+') {
    result = num1 + num2;
}
else if (choice == '-') {
    result = num1 - num2;
}
else if (choice == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

// display the result
console.log(`${num1} ${choice} ${num2} = ${result}`);
