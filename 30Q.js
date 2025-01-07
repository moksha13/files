Basic Level:
What is JavaScript?

JavaScript is a lightweight, interpreted, or just-in-time compiled programming language that is primarily used for creating interactive effects within web browsers.
What are the differences between var, let, and const?

var: Function-scoped or globally-scoped variable, can be re-declared and updated.
let: Block-scoped variable, can be updated but not re-declared within the same scope.
const: Block-scoped, cannot be updated or re-declared; used for constant values.
What are data types in JavaScript?

Primitive: undefined, null, boolean, number, string, symbol, bigint.
Non-primitive (Reference): Object (arrays, functions, etc.).
What is undefined vs null?

undefined: A variable that is declared but not assigned any value.
null: An assignment value representing no value or no object.
What is a closure in JavaScript?

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
What is hoisting in JavaScript?

Hoisting is JavaScript’s default behavior of moving declarations (but not initializations) to the top of the current scope (execution context) during compilation.
Explain event delegation.

Event delegation is a technique where you attach a single event listener to a parent element instead of attaching it to individual child elements. This helps in managing events more efficiently, especially when child elements are dynamically added.
What is the this keyword in JavaScript?

The value of this depends on how the function is called. It refers to the object that owns the method or function.
Intermediate Level:
What are JavaScript closures and how do they work?

A closure is created when a function is defined inside another function and gains access to the outer function’s variables. Closures help maintain state across function calls.
What are arrow functions?

Arrow functions are a shorthand for defining functions. They do not have their own this, arguments, super, or new.target, and they inherit this from the enclosing scope.
Example:

javascript
Copy code
const add = (a, b) => a + b;
Explain bind(), call(), and apply() in JavaScript.

bind(): Creates a new function with a specified this value and arguments.
call(): Invokes a function immediately with a specified this and arguments.
apply(): Similar to call(), but arguments are passed as an array.
What is the event loop in JavaScript?

The event loop is a mechanism in JavaScript that handles asynchronous operations by placing callback functions in the message queue and executing them when the call stack is empty.
What is a promise in JavaScript?

A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It has three states: pending, resolved (fulfilled), or rejected.
What is the difference between == and === in JavaScript?

==: Loose equality comparison, which performs type coercion before comparison.
===: Strict equality comparison, which does not perform type coercion.
What are higher-order functions?

A higher-order function is a function that takes another function as an argument or returns a function as its result.
What is setTimeout and setInterval?

setTimeout: Executes a function after a specified number of milliseconds.
setInterval: Executes a function repeatedly at specified intervals in milliseconds.
What is an IIFE (Immediately Invoked Function Expression)?

An IIFE is a function that is defined and executed immediately after its creation.
Example:

javascript
Copy code
(function() {
    console.log("I am an IIFE!");
})();
Advanced Level:
What are the different ways to handle asynchronous code in JavaScript?

Callbacks: Pass a function to another function to be executed later.
Promises: Use .then(), .catch(), and .finally() to handle asynchronous results.
async/await: Syntactic sugar over Promises to make asynchronous code look synchronous.
What is the difference between Object.freeze() and Object.seal()?

Object.freeze(): Prevents any modifications to the object, including adding, removing, or changing properties.
Object.seal(): Prevents adding or removing properties, but allows modification of existing properties.
What is the prototype in JavaScript?

Every JavaScript object has a prototype object. The prototype object contains properties and methods that are shared by all instances of a given object.
What is a JavaScript generator?

A generator is a special type of function that can yield multiple values over time. It allows pausing and resuming execution of a function using the yield keyword.
Example:

javascript
Copy code
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
What are WeakMap and WeakSet?

WeakMap: A collection of key-value pairs where keys are objects and values can be any arbitrary value. It doesn’t prevent garbage collection of keys.
WeakSet: A collection of objects, and the objects are weakly held (can be garbage collected).
Explain the concept of "debouncing" and "throttling."

Debouncing: Delays the execution of a function until a certain amount of idle time has passed since the last event.
Throttling: Limits the execution of a function to only once in a specified period, even if the event is triggered multiple times.
What is memoization?

Memoization is an optimization technique where you store the results of expensive function calls and reuse the cached result when the same inputs occur again.
What is destructuring in JavaScript?

Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.
Example (array):

javascript
Copy code
const [a, b] = [1, 2];
Example (object):

javascript
Copy code
const {name, age} = {name: "John", age: 30};
What are async functions and await?

async functions are functions that always return a Promise. The await keyword is used inside async functions to pause the function execution until the Promise is resolved.
Example:

javascript
Copy code
async function fetchData() {
    let data = await fetch('url');
    let result = await data.json();
    return result;
}
What is the difference between call, apply, and bind in JavaScript?

call: Immediately invokes the function with a specific this context and arguments passed individually.
apply: Similar to call, but arguments are passed as an array.
bind: Returns a new function with a specified this context and arguments, without immediately invoking it.
What are promises and how do you use them?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. You can use .then() to handle resolved values and .catch() for errors.
Performance and Optimization Questions:
How can you optimize JavaScript performance?

Minimize DOM manipulations, avoid memory leaks, use efficient algorithms, lazy loading, and optimize image sizes.
Use requestAnimationFrame for smoother animations.
What are some methods to improve website load time using JavaScript?

Lazy loading images, minifying JavaScript and CSS, using a CDN, deferring non-essential scripts, and reducing the number of HTTP requests.
These questions should cover the broad spectrum of JavaScript topics, from fundamental knowledge to advanced concepts and optimizations, helping you prepare for an interview effectively.
