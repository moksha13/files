Basic Level

1. What is JavaScript?
A programming language that allows you to implement complex features on web pages, such as dynamic content, interactive forms, and animations.

2.What are the different data types in JavaScript?
Primitive types: string, number, boolean, undefined, null, symbol, bigint.
Non-primitive types: object (arrays, functions, etc.).
    
3.What is the difference between undefined and null?
undefined means a variable has been declared but has not been assigned a value.
null is an assignment value representing no value or no object.
    
4.What is the difference between == and ===?
== (Loose equality): Compares values with type coercion.
=== (Strict equality): Compares both value and type without coercion.
    
5.What are variables in JavaScript? Explain var, let, and const.
var: Function-scoped or globally-scoped, can be re-declared and updated.
let: Block-scoped, can be updated but not re-declared.
const: Block-scoped, cannot be updated or re-declared.
    
6.What is a function in JavaScript?
A block of reusable code that performs a specific task.
    
7.What is an object in JavaScript?
A collection of key-value pairs, where the keys are strings and values can be any data type (including functions).
    
8.What is a for loop?
A control flow statement that repeats a block of code a specified number of times.
    
9.What is a while loop?
A control flow statement that repeats a block of code as long as a specified condition is true.
    
10.What is the difference between let and var?
let is block-scoped, var is function-scoped. let cannot be re-declared in the same block scope, while var can.
    
11.What are JavaScript’s scope and lexical scope?
Scope refers to the region in code where a variable is accessible.
Lexical scope means that a function’s scope is determined by its position in the source code.
    
12.What are template literals in JavaScript?
Template literals are string literals allowing embedded expressions, and they support multi-line strings.
javascript
Copy code
const name = 'John';
console.log(`Hello, ${name}`);

13What is an array in JavaScript?
An array is an ordered list of values indexed by numbers.

14.What is a callback function?
A function passed as an argument to another function that is executed after the first function completes.

15.What is an anonymous function?
A function defined without a name, typically used as a callback or argument.

    
Intermediate Level

16.What is a closure?
A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope.
    
17.What is the this keyword in JavaScript?
this refers to the object the function is currently executing in. It changes based on how a function is called.
    
18.What is a promise?
A Promise is an object representing the eventual completion or failure of an asynchronous operation, providing .then(), .catch(), and .finally() methods to handle success or error.
    
19.What is event delegation?
Event delegation is the practice of attaching a single event listener to a parent element rather than multiple event listeners on child elements.

20.What is the difference between null and undefined?
null is an intentional absence of any value, whereas undefined indicates a variable has been declared but not assigned a value.

21.What is the bind() method?
The bind() method creates a new function with a specified this value and initial arguments, without invoking it immediately.

22.What is the call() method?
The call() method invokes a function immediately with a specified this value and arguments passed individually.

23.What is the apply() method?
The apply() method is similar to call(), but the arguments are passed as an array.
What is the event loop?

The event loop is the mechanism that allows JavaScript to handle asynchronous operations by processing the event queue and executing callback functions.
What is the difference between setTimeout() and setInterval()?

setTimeout() executes a function after a specified delay once, while setInterval() repeatedly executes a function at fixed intervals.
Explain the difference between synchronous and asynchronous code.

Synchronous code runs sequentially, one line after the other.
Asynchronous code allows other tasks to run while waiting for an operation to finish.
What is the spread operator (...) in JavaScript?

The spread operator allows you to unpack elements from an array or object and expand them into individual elements or properties.
Example:

javascript
Copy code
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1, 2, 3, 4]
What is the rest operator (...) in JavaScript?

The rest operator collects multiple elements into an array.
Example:

javascript
Copy code
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
What is destructuring?

Destructuring allows unpacking of values from arrays or properties from objects into distinct variables.
Example:

javascript
Copy code
const [a, b] = [1, 2];
const {name, age} = {name: "John", age: 30};
What are arrow functions?

Arrow functions provide a shorter syntax for writing functions. They don’t have their own this context, so they inherit this from the outer scope.
Example:

javascript
Copy code
const add = (a, b) => a + b;
Advanced Level
What is the prototype chain in JavaScript?

The prototype chain is a series of linked objects. Each object has a prototype property, which refers to another object. JavaScript objects inherit properties and methods from their prototypes.
What is a generator function?

A generator function is a special type of function that can yield multiple values one by one using the yield keyword.
Example:

javascript
Copy code
function* countUpTo(limit) {
    let count = 0;
    while (count < limit) {
        yield count++;
    }
}
What is an IIFE (Immediately Invoked Function Expression)?

An IIFE is a function that is defined and executed immediately after being created, often used to create a local scope.
Example:

javascript
Copy code
(function() {
    console.log('I am an IIFE!');
})();
What is memoization?

Memoization is an optimization technique where results of expensive function calls are cached, so they don’t need to be recomputed for the same inputs.
What are WeakMap and WeakSet?

WeakMap and WeakSet are similar to Map and Set, but they allow garbage collection of objects when they are no longer referenced.
What is the difference between Object.freeze() and Object.seal()?

Object.freeze() makes an object immutable (cannot be modified), while Object.seal() prevents adding or removing properties but allows modifications to existing properties.
What are Promises and how do you use them?

Promises represent the eventual result of an asynchronous operation. They are used with .then(), .catch(), and .finally() to handle success, error, or cleanup tasks.
What is async/await?

async functions always return a promise, and await pauses the execution of the async function until a promise is resolved.
Explain destructuring with nested objects/arrays.

You can destructure objects or arrays that are nested, allowing you to unpack deeper values.
Example:

javascript
Copy code
const person = { name: "Alice", address: { city: "New York", zip: 10001 } };
const { name, address: { city, zip } } = person;
How does bind() work in JavaScript?

bind() creates a new function that, when invoked, has its this set to a specific value and prepends arguments to the function.
What is the module pattern in JavaScript?

The module pattern helps organize code by encapsulating functionality into modules and exposing only the necessary parts.
What is the difference between call(), apply(), and bind()?

call(): Immediately invokes the function with a specified this and arguments.
apply(): Similar to call(), but the arguments are passed as an array.
bind(): Returns a new function with the specified this and arguments, but doesn’t invoke it immediately.
What is the "this" keyword in arrow functions?

In arrow functions, this is lexically inherited from the outer context and does not get redefined when the function is called.
What is the difference between synchronous and asynchronous execution in JavaScript?

Synchronous execution occurs line by line, blocking subsequent code until the current task is completed.
Asynchronous execution allows other tasks to run while waiting for long-running operations to complete.
Explain the concept of "debouncing" and "throttling" in JavaScript.

Debouncing: Delays the execution of a function until after a certain period of inactivity.
Throttling: Limits the number of times a function can be invoked over a period.
