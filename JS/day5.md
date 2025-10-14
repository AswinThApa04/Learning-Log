# 📘 JavaScript Notes – Inbuilt Classes & Promises

## 🧩 Inbuilt JavaScript Classes

### 1. `Map`
The **`Map`** class in JavaScript allows you to store **key-value pairs** similar to objects, but with more flexibility and built-in methods.

#### Example:
```js
const map = new Map();
map.set('name', 'Aswin'); // Setting a key-value pair

console.log(map.get('name')); // Fetches the value for the given key
```
#### Understanding:
- Works similarly to objects (object.key), but uses set() and get() methods.
- The first argument in set() is the key, and the second is the value.
- Unlike objects, keys in a Map can be of any data type (numbers, objects, functions, etc.).
- Maintains insertion order of keys.
---
### 2. Date
The `Date()` class helps in working with real-world date and time in JavaScript.
#### Example:
```js
const today = new Date();
console.log(today.getDay());        // Returns day of the week (0–6)
console.log(today.getFullYear());   // Returns the year
```
#### Common Methods:

- `.getDate()` → Returns the day of the month.

- `.getMonth()` → Returns the month (0–11).

- `.getFullYear()` → Returns the full year.

- `.getDay()` → Returns the day of the week.

- `.getHours(), .getMinutes(), .getSeconds()` → Time components.
---
## Promises
### What is a Promise?
A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

Earlier we handled async operations using callbacks like:
`setTimeout(callback, 3000);`
This works but becomes messy when multiple async operations depend on each other (callback hell).
So we use Promises to make things cleaner and easier to manage.
`setTimeoutPromisified(3000).then(callback);`

#### Example:
```js
function callback() {
  console.log("3 seconds have passed");
}

let p = setTimeoutPromisified(3000);
console.log(p);
```
Output of the code would be `Promise { <pending> }`
- Instead of immediately printing a message, it returns a Promise object — meaning it’s currently waiting to be fulfilled or rejected.

---
## Creating a Promisified Version of setTimeout\
Implementation:
```js
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // ms = milliseconds
}

function callback() {
  console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);
```
#### How It Works:

- `setTimeoutPromisified(ms)` returns a new Promise.

- The Promise resolves after ms milliseconds.

- `.then(callback)` executes after the promise is resolved.

- So the message prints after 3 seconds.
#### Comparison Example
```js
function waitfor3S(resolve) {
  setTimeout(resolve, 3000);
}

function main() {
  console.log("main is called");
}

waitfor3S(main);
```
#### How the above code works

- waitfor3S() takes another function (resolve) as a parameter.

- Inside it, setTimeout(resolve, 3000) schedules that function to run after 3 seconds.

- When we call waitfor3S(main);, the function main is passed as an argument to resolve.

- After 3 seconds, setTimeout executes resolve(), which is actually main().

- So the console logs:
```pgsql
main is called
```
after a 3-second delay.

#### Basic Understanding 
It’s not that “resolve is being called” — instead,
`main` is passed as a function argument, and then called later after 3 seconds.
This mimics how resolve works in Promises — it’s a function that’s triggered once the asynchronous task finishes.


