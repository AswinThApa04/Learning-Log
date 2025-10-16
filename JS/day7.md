# Introduction to the DOM (Document Object Model)

## 1. What is the DOM?

**DOM (Document Object Model)** is a programming interface for web documents.  
It represents the structure of a webpage as a **tree of objects** that can be accessed and manipulated using JavaScript.

### Example
```html
<html>
  <head>
    <title>Simple app</title>
    <meta name="description" content="A brief description of the webpage content for search engines and social media.">
  </head>
  <body>
    <h1>hi there</h1>
  </body>
</html>
```
---
## 2. Why Do We Need the DOM?

The DOM abstracts the structure of an HTML document into a tree of nodes, allowing scripts to:

- Dynamically manipulate content and structure.

- Add interactivity.

- Respond to user inputs and events.

Without the DOM, HTML would remain static, showing only pre-defined content.

---
## 3. Static HTML Example
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <h1>Todo list</h1>
    <h4>1. Take class</h4>
    <h4>2. Go out to eat</h4>
    <div>
      <input type="text" />
      <button>Add Todo</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
This page is static — no changes occur unless a user reloads or interacts via JavaScript.

---
## 4. The document Object
- In browsers, the document object represents the webpage currently loaded.
- It provides methods to access, read, and modify HTML elements dynamically.

---
## 5. Selecting Elements
a) `querySelector()`
Selects the first matching element.
```js
const inputEl = document.querySelector("input");
console.log(inputEl);
```
1) Example: Typing in the input box and checking the console shows the element.
```js
const h1Elem = document.querySelector("h1");
console.log(h1Elem.innerHTML);
```
This logs the content inside the <h1> tag.
2) Another example:
```js
document.querySelector("button").innerHTML;
```
Fetches the text inside the <button> element.

b) `querySelectorAll()`

Selects all elements matching a selector and returns a NodeList.

Example:
```js
document.querySelectorAll("h4");
```
If there are four `<h4>` elements, this returns:
```scss
NodeList(4) [h4, h4, h4, h4]
```
To access specific elements:
```js
document.querySelectorAll("h4")[0]; // First
document.querySelectorAll("h4")[1]; // Second
```
## 5. Using id and getElementById()\
```html
<h4 id="todo4"></h4>
```
```js
document.querySelector("#todo4");
document.getElementById("todo4");
```
Both methods select the element with the given ID.
---
## 6. Using Classes
```html
<style>
  .todo {
    background-color: yellow;
  }
</style>

<body>
  <h1 class="todo">Todo list</h1>
  <h4 class="todo">1. Take class</h4>
  <h4 class="todo">2. Go out to eat</h4>
</body>
```
### Why Use Classes Over IDs?

- IDs are unique — only used once.

- Classes can be reused for multiple elements (better for repeated styling).

You can select by class using:
```js
document.getElementsByClassName("todo");
```
or
```js
document.querySelectorAll(".todo");
```
`querySelectorAll` is generally more powerful and flexible.

---

## 7. Updating Elements Dynamically
Assignment: Update a Task Every 2 Seconds
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <style>
    .todo {
      background-color: yellow;
    }
  </style>

  <body>
    <h1 class="todo">Todo list</h1>
    <h4 class="todo">1. Take class</h4>
    <h4 class="todo">2. Go out to eat</h4>
    <div>
      <input id="searchBar" type="text" />
      <button>Add Todo</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
```js
let ctr = 0;

function callback() {
  document.querySelectorAll("h4")[1].innerHTML = ctr;
  ctr = ctr + 1;
}

setInterval(callback, 1000);
```
### Explanation

- `querySelectorAll("h4")[1]` selects the second <h4> element.

- Its content updates every second using setInterval().

- Demonstrates real-time DOM manipulation.

---
