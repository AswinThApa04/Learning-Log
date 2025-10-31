# Express.js Middleware & Error Handling
## Topics Covered

- Middleware functions in Express

- Route-level and global middleware

- Rate limiting using middleware

- Error handling middleware

- Practical middleware-based assignments

---

## What is Middleware?
In Express, middleware functions are functions that have access to the request (req), response (res), and the next function in the request-response cycle.
```js
function middleware(req, res, next) {
  // perform some operations
  next(); // pass control to the next middleware
}
```
An Express app is essentially a chain of middleware function calls.

**Middleware can**:

- Execute any code

- Modify req and res objects

- End the request-response cycle

- Call the next middleware in the stack
---

### Example 1 — Without Middleware

We first implemented a simple route that checks age before allowing access to a ride.
```js
const express = require('express');
const app = express();

function isOldEnough(age) {
  return age >= 14;
}

app.get('/ride1', (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({ message: "You have successfully rode the ride" });
  } else {
    res.status(400).json({ message: "You are not eligible" });
  }
});

app.listen(3000, () =>{
  console.log("Server running on port 3000")
});
```
### Example 2 — Using Middleware
Instead of repeating logic in every route, we moved the check into a middleware function.
```js
const express = require('express');
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next(); // continue to the route handler
  } else {
    res.status(400).json({ message: "You are not eligible" });
  }
}

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {
  res.json({ message: "You have successfully rode the ride1" });
});

app.get('/ride2', isOldEnoughMiddleware, (req, res) => {
  res.json({ message: "You have successfully rode the ride2" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```
### Example 3 — Global Middleware with app.use()
To avoid repeating the middleware for every route:
```js
app.use(isOldEnoughMiddleware);

app.get('/ride1', (req, res) => {
  res.json({ message: "You have successfully rode the ride1" });
});

app.get('/ride2', (req, res) => {
  res.json({ message: "You have successfully rode the ride2" });
});
```
*Note: Middleware order matters — routes declared before app.use() won’t use it.*
---
## Assignment 1 — Global Request Counter
Create a global middleware that tracks how many requests have been made.
```js
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestCount = 0;

app.use(function(req,res,next){
    requestCount=requestCount+1
    next();
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000,()=>{
    console.log("server running on port 3000")
})

module.exports = app;
```
## Assignment 2 — Rate Limiting Middleware
Limit each user (identified by `user-id` header) to 5 requests per second.
```
const express = require('express');
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use(function(req,res,next){
    const userId=req.headers["user-id"]
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[req.headers["user-id"]]++;
        if(numberOfRequestsForUser[userId]>5){
            res.status(404).send("no entry")
        }
        else{
            next();
        }
    } else{
        numberOfRequestsForUser[userId]=1;
        next();
    }

})
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000);
module.exports = app;
```
## Assignment 3 — Error Handling Middleware
Handle all exceptions with a custom error middleware.
```js
const express = require('express');

const app = express();
let errorCount = 0;


app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

app.use(function(err,req,res,next){
    res.status(404).send({})
    errorCount=errorCount+1;
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})

module.exports = app;
```

---
## Key Takeaways

- Middleware enables clean, modular request handling.

- `app.use()` applies middleware globally.

- Middleware order is crucial — Express executes top-down.

- Error-handling middleware requires 4 parameters.

- Rate limiting and request counting are real-world use cases of middleware.
---
