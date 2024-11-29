
/*1.create mathematical operation using let,
 var and const methods using javascript and print the values in 
 console accordingly.*/

 // Using let (block-scoped)
let x = 10;
let y = 5;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Using var (function-scoped)
var a = 20;
var b = 10;
var addition = a + b;
var subtraction = a - b;
var multiplication = a * b;
var division = a / b;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
const radius = 5;
const area = PI * radius * radius;

console.log("Area of circle:", area);


//2.write a function to implement map, reduce, filter, and flatmap using javascript.

const numbers = [1, 2, 3, 4, 5];

// Map: Applies a function to each element and returns a new array
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Reduce: Reduces an array to a single value
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sumOfNumbers);

// Filter: Creates a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// FlatMap: Maps each element to an array and then flattens the result
const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.flatMap(arr => arr);
console.log("Flattened array:", flattenedArray);


// 3.Give an example of creating a callback function in javascript.

function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


//4.write a program to reverse a string using arrays in javascript

function reverseString(str) {
  const charArray = str.split('');
  const reversedArray = charArray.reverse();
  const reversedString = reversedArray.join('');
  return reversedString;
}

const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString);