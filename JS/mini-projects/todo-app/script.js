const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let todos = [];

addButton.addEventListener("click", addTodo);

function addTodo() {
  const inputValue = taskInput.value.trim();

  if (inputValue === "") {
    alert("Task cannot be empty");
    return;
  }

  todos.push({ title: inputValue });
  taskInput.value = ""; 
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  todos.forEach((todo, index) => {
    const element = createTodoComponent(todo, index);
    taskList.appendChild(element);
  });
}

function createTodoComponent(todo, index) {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const button = document.createElement("button");

  h1.textContent = todo.title;
  button.textContent = "Delete Todo";

  button.addEventListener("click", () => {
    todos.splice(index, 1);
    renderTasks();
  });

  div.appendChild(h1);
  div.appendChild(button);
  return div;
}
