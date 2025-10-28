# DOM Manipulation & Todo App (Dynamic Rendering)
## Topics Covered

- DOM Manipulation using `document.createElement`, `appendChild`, and `innerHTML`

- Handling events dynamically with `addEventListener`

- Rendering elements from an array dynamically

- Implementing CRUD-like behavior (Add & Delete)

- Understanding scope, indexing, and re-rendering logic

---

## Key Learnings
### 1. Adding Todos Dynamically

- We started by creating an input field and a button to add new todos.

- Each todo is stored as an object inside an array.
```js
let todos = [];

function addTodo() {
  todos.push({
    title: document.querySelector("input").value
  });
  render();
}
```
- The `render()` function is called every time a new todo is added, to update the DOM.
---

### 2.Rendering Todos on Screen

- Instead of manually creating HTML tags, we dynamically created them using `document.createElement()`.
```js
function createToDoComponent(todo, index) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");

  button.innerHTML = "Delete Todo";
  h1.innerHTML = todo.title;

  div.append(h1);
  div.append(button);

  return div;
}
```
- Each `todo` is represented as a `<div>` containing a title `(<h1>)` and a delete button.
---
### 3. Re-Rendering the Todo List

- The `render()` function clears the container each time before re-adding elements.
```js
function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createToDoComponent(todos[i], i);
    document.querySelector("#todos").appendChild(element);
  }
}
```
*This ensures the list is always up-to-date and reflects the current todos array.*

---
### 4. Deleting the First and Last Todo

- Implemented functionality to remove the first or last item using splice().
```js
function deleteLastTodo() {
  todos.splice(todos.length - 1, 1);
  render();
}

function deleteFirstTodo() {
  todos.splice(0, 1);
  render();
}
```

- `splice(start, deleteCount)` removes elements directly from the array.
---
### 5. Deleting a Specific Todo (by Index)

- Inside each todo component, we attached a click event listener that deletes that specific item.
```js
button.addEventListener("click", () => {
  todos.splice(index, 1);
  render();
});
```

#### Key Understanding:

- `index` is passed dynamically when rendering the list.

- `render()` is re-called to refresh the UI after deletion.

- This taught the concept of state-driven UI — where UI reflects data, not the other way around.

---

## Final Code
```js
<body>
  <input type="text" />
  <button onclick="addTodo()">Add todo!</button>
  <button onclick="deleteLastTodo()">Delete Last Todo</button>
  <button onclick="deleteFirstTodo()">Delete First Todo</button>

  <div id="todos"></div>

  <script>
    let todos = [];

    function addTodo() {
      todos.push({
        title: document.querySelector("input").value
      });
      render();
    }

    function deleteLastTodo() {
      todos.splice(todos.length - 1, 1);
      render();
    }

    function deleteFirstTodo() {
      todos.splice(0, 1);
      render();
    }

    function createToDoComponent(todo, index) {
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      const button = document.createElement("button");

      button.innerHTML = "Delete Todo";
      button.addEventListener("click", () => {
        todos.splice(index, 1);
        render();
      });

      h1.innerHTML = todo.title;
      div.append(h1);
      div.append(button);
      return div;
    }

    function render() {
      document.querySelector("#todos").innerHTML = "";
      for (let i = 0; i < todos.length; i++) {
        const element = createToDoComponent(todos[i], i);
        document.querySelector("#todos").appendChild(element);
      }
    }
  </script>
</body>
```
