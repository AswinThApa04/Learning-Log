# JavaScript Async Concepts — Callback, Promises & Async/Await
## 1. Showcasing Callback Hell
Question:
Write code that:
logs `hi` after 1 second
logs `hello` 3 seconds after step 1
logs `hello` there 5 seconds after step 2

```js
setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
```

### Step-by-step flow:

- After 1 second → logs "hi".

- Waits another 3 seconds → logs "hello".

- Waits another 5 seconds → logs "hello there".

Total time: 1 + 3 + 5 = 9 seconds

---
#### Why It’s Called Callback Hell

Each setTimeout depends on the previous one.

As more async steps are added, code nests deeper and deeper → hard to read, debug, and maintain.

Forms a “pyramid of doom” pattern:
```js
doSomething(() => {
  doSomethingElse(() => {
    doThirdThing(() => {
      ...
    });
  });
});
```

## 2. Promises and Promise Chaining
We can avoid callback hell by using Promises.
Promisified `setTimeout`:
```js
function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
```
Using Promise chaining:
```js
setTimeoutPromisified(1000)
  .then(() => {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(() => {
    console.log("hello there");
  });
```
What Changed

Instead of nesting, you return the next Promise from each `.then()`.

Each `.then()` automatically waits for the previous Promise to finish.

Code is now flat, readable, and sequential.

---
## 3. Async / Await

Async/Await provides a way to write asynchronous code that looks synchronous.

- Built on top of Promises.

- Avoids chaining `.then()` and `.catch()`.

- Makes code easier to read and maintain.

```js
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");

  await setTimeoutPromisified(3000);
  console.log("hello");

  await setTimeoutPromisified(5000);
  console.log("hi there");
}

solve();
```
#### Notes:

`async` → marks a function that returns a Promise.

`await` → pauses the execution inside the async function until the Promise resolves.

*await cannot be used outside an async function.*
---
## 4. Promise Methods Recap

`.then()` → runs when Promise is resolved

`.catch()` → runs when Promise is rejected

`.finally()` → runs in both cases
#### Example: Promisified fs.readFile
```js
const fs = require("fs");

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

const p = readFile("a.txt");

function callback(contents) {
  console.log(contents);
}

p.then(callback).catch(err => console.error("Error:", err));
```
*Key Points*:

- If the file doesn’t exist and you ignore err, then .then() would still run → misleading output.

- By handling err, .catch() ensures actual errors are logged:
```pgsql
Error: ENOENT: no such file or directory, open 'a.txt'
    at Object.openSync (fs.js:443:3)
    ...
```
*Promises always return something:*
- Success → `.then()` executes
- Failure → `.catch()` executes 
