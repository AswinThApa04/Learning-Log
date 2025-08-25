# Day 1: August 25, 2025 - Core Fundamentals

Today, I began my journey into JavaScript, covering the foundational concepts of the language, its properties, and its core syntax.

### High-Level Concepts

* **JavaScript's Place in Web Development:** Learned about the role of JavaScript and its relationship with Web Assembly.
* **Comparison with Other Languages (like C++):**
    * Unlike C++, which compiles to binary, JavaScript is an interpreted language that is processed at runtime.
    * JavaScript is dynamically typed, meaning a variable's type can be changed during execution. For example, `let a = 1;` can be followed by `a = "aswin";`.
    * The language is single-threaded, meaning it executes one command at a time on a single CPU core.
* **Introduction to TypeScript:** Understood that TypeScript adds a layer of type safety to JavaScript to help catch errors before runtime, which is especially useful given JavaScript's dynamic nature.

---

### JavaScript Syntax & Fundamentals

#### 1. Variables

A variable is a container for storing data values. In JavaScript, variables can be declared in three ways:

* `var`: The older way of declaring variables. Best to avoid in modern code.
* `let`: Used for variables whose values may change.
* `const`: Used for constant variables whose values will not be reassigned.

**Example:**

```javascript
// 'let' allows the variable to be updated
let choice = true;
console.log(choice); // Output: true
choice = false;
console.log(choice); // Output: false

// 'const' throws an error if you try to reassign it
const favColor = "black";
console.log(favColor); // Output: black
// favColor = "red"; // This line would cause an error
```
#### 2. Data Types
Learned about the basic data types in JavaScript:

- Numbers: let age = 19;

- Strings: let name = "aswin";

- Booleans: let isStudent = true;

- Arrays: A way to store multiple values in a single variable.

**Example**
```javascript
// Instead of this:
// let user1 = "aswin";
// let user2 = "harkirat";

// We can use an array:
let users = ["aswin", "harkirat", "asd"];
console.log(users[0]); // Output: aswin (Arrays are 0-indexed)
```
#### 3. Operators 
Arithmetic: `let sum = 10 + 5;`

Comparison: `let isEqual = (10 === 10);`

Logical: `let isTrue = (true && false);`

#### 4. Functions
Functions are reusable blocks of code designed to perform a specific task.
```javascript
// This function takes two arguments, a and b, and returns their sum.
function sum(a, b) {
    let totalSum = a + b;
    return totalSum;
}

let ans = sum(1, 2); // ans is 3
console.log(ans);
```
#### 5. Conditional Logic `(if/else)`
Used to execute different blocks of code based on a condition.
```javascript
function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canVote(19)); // Output: true
```
#### 6. Loops (for)
Loops are used to execute a block of code a number of times.
```javascript
let users = ["aswin", "harkirat", "asd"];

// Initialization; Condition; Incrementation
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
```
## Assignments and Practice
### 1. Sum of Two Numbers
- Task: Write a function that finds the sum of two numbers.
- Side Quest: See what happens when a string is passed instead of a number.
- Result: Discovered that adding a number and a string results in string concatenation `(e.g., 1 + "aswin" becomes "1aswin").`
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 3));      // Output: 4
console.log(sum(1, "aswin")); // Output: "1aswin"
```
### 2. Sum of Numbers from 1 to n
- Task: Write a function that calculates the sum of all numbers from 1 up to a given number n.

- Key Learning: Struggled initially but learned the accumulator pattern, where a variable is initialized outside a loop to keep track of the total sum.
```javascript
function findSum(n) {
    // 1. Initialize an "accumulator" to 0
    let sum = 0;
    // 2. Loop from 1 to n
    for (let i = 1; i <= n; i++) {
        // 3. Add the current number to the accumulator
        sum = sum + i;
    }
    // 4. Return the final sum
    return sum;
}

console.log(findSum(5)); // Output: 15 (1+2+3+4+5)
```
