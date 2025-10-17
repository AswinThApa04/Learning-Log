# Practical DOM Manipulation - Building a To-Do App

Today was all about putting theory into practice! I applied the concepts of DOM manipulation learned on Day 7 to build a functional, interactive To-Do application. This project helped solidify my understanding of how to dynamically create, modify, and delete HTML elements using JavaScript.

## Mini Project – Interactive To-Do App

The goal was to create a simple web page where a user can type a task into an input field, click a button to add it to a list, and then delete tasks from that list.

### 1. The HTML Structure

The foundation is a simple HTML file with an `input` for the user to type in, a `button` to trigger the action, and a `body` element to which the new to-do items will be appended.

```html
<html>
    <body>
        <input type="text"></input>
        <button onclick="addTodo()">Add Todo!</button>
    </body>
    <script>
        // JavaScript code goes here
    </script>
</html>
```
### 2. The JavaScript Logic
This is where the DOM manipulation happens. I created two main functions: `addTodo()` and `deleteTodo()`.
#### Adding a To-Do Item
The `addTodo()` function is responsible for:

- Reading the text from the input field.

- Creating a new div element to hold the to-do item and its delete button.

- Assigning a unique id to the new div so it can be targeted later.

- Adding the user's text and a "Delete" button inside the new div.

- Appending the fully constructed div to the body of the document.

```js
let ctr=0; 

function addTodo(){
    const inputEl=document.querySelector("input");
    const value=inputEl.value;

    const newDivEl=document.createElement("div");
    newDivEl.setAttribute("id",ctr);
    newDivEl.innerHTML="<div>"+value+'</div><button onclick="deleteTodo('+ctr+')">Delete</button>';
    document.querySelector("body").appendChild(newDivEl)
    ctr=ctr+1;
}
```
#### Deleting a To-Do Item
The `deleteTodo(index)` function is called when a "Delete" button is clicked. It:

- Takes the unique id (index) of the to-do item that needs to be removed.

- Uses `document.getElementById()` to find the specific `div` to delete.

- Removes that element from its parent, effectively deleting it from the page.

```js
function deleteTodo(index){
    const element=document.getElementById(index);
    element.parentNode.removeChild(element);
}
```
---
### Key Concepts Reinforced:
- `document.querySelector()`: Used to grab the input element.

- `document.createElement()`: To create the new div for each to-do item.

- `.setAttribute()`: To assign a unique id to each new div.

- `.appendChild()`: To add the new div to the document's body.

- `.innerHTML`: To populate the new div with the to-do text and a delete button.

- `document.getElementById()`: To find the specific to-do div that needs to be deleted.

- `.parentNode.removeChild()`: The standard way to remove an element from the DOM.
