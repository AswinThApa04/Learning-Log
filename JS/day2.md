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
-Task: Create a function that takes an array of user objects and returns a new array containing only the males who are older than 18.
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
