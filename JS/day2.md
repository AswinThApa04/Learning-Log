## Day 2: August 26, 2025 - JavaScript Objects

### Understanding JavaScript Objects

An object in JavaScript is a collection of key-value pairs, similar to a `map` in C++ or a `HashMap` in Rust. It's an incredibly useful way to group related data together.

**Before Objects:** To store information about a user, I would have needed multiple variables.
```javascript
let user1Name = "aswin";
let user1Age = 21;
let user1Gender = "male";
```
**With Objects:** I can store all of this information in a single, structured variable.
```javascript
let user1 = {
    name: "aswin",
    age: 21,
    gender: "male"
};
```
### Accessing Object Properties
You can access the values within an object in two ways:

- Dot Notation: `console.log(user1.name);`

- Bracket Notation: `console.log(user1["name"]);`
---

## Assignments & Practice
### Assignment #1: Simple Greeting
- Task: Write a function that takes a user object as input and greets them.
```javascript
function greet(user) {
    console.log("hi " + user.name + ", your age is " + user.age);
}

let user = {
    name: "aswin",
    age: 21
};
greet(user);
```
### Assignment #2: Greeting with Conditionals
- Task: Greet a user with the appropriate title (Mr./Mrs./Others) based on their gender.
```javascript
function greetWithTitle(user) {
    if (user.gender === "male") {
        console.log("hi Mr. " + user.name + ", your age is " + user.age);
    } else if (user.gender === "female") {
        console.log("hi Mrs. " + user.name + ", your age is " + user.age);
    } else {
        console.log("hi " + user.name + ", your age is " + user.age);
    }
}
```
### Assignment #3: Check Voting Eligibility
- Task: Greet a user and also inform them if they are legally allowed to vote.
```javascript
function greetAndCheckVotingAge(user) {
    let title;
    if (user.gender === "male") {
        title = "Mr.";
    } else if (user.gender === "female") {
        title = "Mrs.";
    } else {
        title = "others";
    }

    let votingMessage;
    if (user.age >= 18) {
        votingMessage = "You are eligible to vote.";
    } else {
        votingMessage = "You are not yet eligible to vote.";
    }

    // Discovered and used Template Literals here!
    console.log(`Hi ${title} ${user.name}, your age is ${user.age}. ${votingMessage}`);
}

let person1 = { name: "Aswin", age: 21, gender: "male" };
greetAndCheckVotingAge(person1);

let person2 = { name: "Riya", age: 16, gender: "female" };
greetAndCheckVotingAge(person2);
```
**Key Discovery:** While working on the assignment, I learned about Template Literals. Using backticks (`) allows you to embed variables directly into a string with the ${variable} syntax, which is much cleaner than joining strings with +. I also learned you can declare a variable (let title;) and assign its value later within a conditional block.
---
## Working with Arrays of Objects
Objects are often stored inside arrays. This is very common for representing lists of data, like a list of users.
### Assignment #4: Filtering an Array of Objects
- Task: Create a function that takes an array of user objects and returns a new array containing only the males who are older than 18.
```javascript
const users = [{
    name: "Aswin",
    age: 21,
    gender: "male"
}, {
    name: "Aswina",
    age: 25,
    gender: "female"
}, {
    name: "Dishant",
    age: 11,
    gender: "male"
}, {
    name: "Karan",
    age: 24,
    gender: "male"
}];

function findAdultMales(userArray) {
    let adultMales = [];
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].gender === "male" && userArray[i].age > 18) {
            adultMales.push(userArray[i]);
        }
    }
    return adultMales;
}

const result = findAdultMales(users);
console.log(result);
```
## Synchronous vs. Asynchronous JavaScript

Today's focus was on how JavaScript executes code, especially when dealing with time-consuming operations like reading files.

### Synchronous Code Execution

Synchronous code is executed line by line, in the order it's written. Each operation must wait for the previous one to complete before the next one can start. Most of the basic JavaScript I've written so far has been synchronous.

**Example: A CPU-Bound Task**
A task that is limited by the CPU's speed is **CPU-bound**. This `for` loop is a good example because the CPU is doing intense work and is the bottleneck.
```javascript
// This function calculates the sum of numbers from 1 to n.
// Note: The loop condition is i <= n to correctly include n in the sum.
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// The code waits for sum(100) to finish before starting sum(1000), and so on.
const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
```
### Utility Learned: parseInt()
The `parseInt()` function is useful for converting a string into an integer, ensuring that mathematical operations work as expected.
`let result = parseInt("20") + 3; // result is 23`

---

## Asynchronous Code & The File System (fs)
Asynchronous code allows JavaScript to start a long-running task (like reading a file) and continue executing other code without waiting for it to finish. This is key for building fast, non-blocking applications.

A great way to practice this is with the Node.js File System module (fs).

- To use this module, you must first import it: const fs = require('fs');

**1.**  Synchronous File Reading: `readFileSync`
This function reads a file and blocks the rest of the code from executing until the file is fully read.
```javascript
const fs = require('fs');

// The program pauses here until a.txt is read.
const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

console.log("This message will only appear after the file is read.");
```
- Note on `utf-8`: This encoding is crucial. Without it, Node.js returns the raw data as a `<Buffer ...>`, not as a human-readable string.
**2.** Asynchronous File Reading: `readFile`
This function starts reading a file and does not block execution. It uses a callback function that runs only after the file has been successfully read.
```javascript
const fs = require('fs');

// The file reading process starts, but the code below runs immediately.
fs.readFile("a.txt", "utf-8", function (err, contents) {
    // This callback function runs once the file is read.
    // 'contents' holds the file data.
    console.log(contents);
});

console.log("This message will likely appear BEFORE the file contents.");
```
---
## I/O-Bound vs. CPU-Bound Tasks
This was a key concept for understanding when to use asynchronous code.

- CPU-Bound: A task limited by the CPU's processing speed (e.g., complex calculations, a massive loop).

- I/O-Bound (Input/Output): A task limited by waiting for an external resource, like a disk or a network. The CPU is mostly idle during this time.

**Why Asynchronous is Better for I/O**
If you have multiple I/O tasks, the asynchronous approach is far more efficient.

**Synchronous (Slow):** Each file is read one after the other.
```javascript
// Reads a.txt, waits, then reads b.txt, waits, etc.
const contents1 = fs.readFileSync("a.txt", "utf-8");
console.log("File A read.");
const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log("File B read.");
```
**Asynchronous (Fast):** You can start reading all files at once. They will finish when they finish, without blocking each other.
```javascript
// All three file-reading operations start at roughly the same time.
fs.readFile("a.txt", "utf-8", (err, contents) => { console.log("File A contents are ready.") });
fs.readFile("b.txt", "utf-8", (err, contents) => { console.log("File B contents are ready.") });
fs.readFile("c.txt", "utf-8", (err, contents) => { console.log("File C contents are ready.") });
```
---

##  Functions as Arguments

A core concept in JavaScript is that functions are "first-class citizens." This means they can be treated like any other variable—stored, returned, or, most importantly, passed as arguments to other functions.

**Example: A Calculator Function**
I created a single function, `doOperation`, that takes two numbers and a third argument, `op`, which is expected to be a function itself. This allows `doOperation` to be a flexible calculator.
```javascript
function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function doOperation(a, b, op) {
    return op(a, b);
}

// Here, we pass the `sum` function as an argument.
console.log(doOperation(1, 2, sum));       // Output: 3
// We could also pass the `multiply` function.
console.log(doOperation(1, 2, multiply));  // Output: 2
```
### Callbacks in Action
The concept of passing functions as arguments is the foundation of *callbacks*. A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

This is especially important for asynchronous operations, like reading a file.
```javascript
const fs = require('fs');

// This is our callback function.
// It handles both the error and the data when the file is read.
function onFileRead(err, data) {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log(data);
    }
}

// We pass the `onFileRead` function as the callback to `fs.readFile`.
// JavaScript will execute it *later*, once the file has been read.
fs.readFile("a.txt", "utf-8", onFileRead);
fs.readFile("b.txt", "utf-8", onFileRead);

console.log("done");
```
The output is `done`, then the contents of `a.txt`, then `b.txt`. This is because `fs.readFile` is asynchronous. It starts the task but doesn't wait for it to finish. The main thread continues, logs `"done"`, and only when the file operations are complete do their callbacks get executed.
---
### The Event Loop: How Async JS Really Works
To understand why callbacks are executed later, I learned about the JavaScript runtime environment.

A key experiment was running a `setTimeout` (an I/O-bound task provided by the browser/Node.js) alongside a heavy, synchronous `for` loop (a CPU-bound task).
```javascript
console.log("Hi!");

// This is an async Web API function.
setTimeout(function timeOut() {
    console.log("Click the button");
}, 1000); // 1-second delay

console.log("Welcome to the loupe");

// This is a heavy, synchronous, CPU-bound task.
let c = 0;
for (let i = 0; i < 1000000000; i++) {
    c = c + 1;
}
console.log("Expensive operation finished");

// Correct Output Order:
// 1. Hi!
// 2. Welcome to the loupe
// 3. Expensive operation finished
// 4. Click the button
```
---
The "Click the button" message logs last, even after the long `for` loop, because the main thread was blocked by the CPU-intensive task. The `setTimeout` callback had to wait in a queue until the main thread was free.

This process is managed by four key components:

- Call Stack: Keeps track of the functions currently being executed (Last In, First Out).

- Web APIs: Features provided by the browser or Node.js environment (like `setTimeout`, `fs.readFile`, DOM events) that run outside of the main JavaScript thread.

- Callback Queue: A queue where completed asynchronous tasks (their callbacks) wait to be executed.

- Event Loop: The orchestrator. Its job is to constantly check: "Is the call stack empty?" If it is, the event loop takes the first item from the callback queue and pushes it onto the call stack to be run.
---

