# Node.js – CRUD Operations with File System (FS)
*Learn how to handle data (Create, Read, Delete) using Node.js and JSON files.*

---

## 1. Understanding the `fs` Module

The **`fs` (File System)** module allows Node.js applications to read, write, and update files.

It’s a **core module**, meaning you don’t need to install it using npm.

### Common Methods:
| Method | Description |
|---------|--------------|
| `fs.readFile(path, encoding, callback)` | Reads a file asynchronously. |
| `fs.writeFile(path, data, callback)` | Writes (or replaces) data in a file. |
| `fs.appendFile(path, data, callback)` | Appends new data to the end of a file. |

---

## 2. Understanding JSON Handling

### `JSON.parse(data)`
Converts a **JSON string** (plain text) into a **JavaScript object**.

```js
const json = '{"name":"Aswin"}';
const obj = JSON.parse(json);
console.log(obj.name); // Output: "Aswin"
```
### `JSON.stringify(object)`
Converts a **JavaScript** object or array into a **JSON** string (for saving to a file).
```js
const obj = { name: "Aswin" };
const json = JSON.stringify(obj);
console.log(json); // Output: '{"name":"Aswin"}'
```
---

## 3. GET Route – Reading Todos
```js
app.get("/todos", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    const todos = JSON.parse(data);
    res.json(todos);
  });
});
```
**EXPLANATION**
1) Reads the JSON file using `fs.readFile`.

2) Converts the data (string) → JS object using `JSON.parse()`.

3) Sends the todos back as a JSON response using `res.json()`.

---

## 4. POST Route – Adding a New Todo
```js
app.post("/todos", (req, res) => {
  const newTodo = req.body;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    const todos = JSON.parse(data);
    todos.push(newTodo);

    fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to write file" });
      res.status(201).json({ message: "Todo added successfully!" });
    });
  });
});
```
**Explanation:**

Read → Parse → Modify → Stringify → Write

- Read the file.

- Parse JSON → JS Array.

- Push new todo into array.

- Convert array back to JSON (`JSON.stringify`).

- Write updated data to file.

---

## 5. DELETE Route – Deleting a Todo by Index
```js
app.delete("/todos/:index", (req, res) => {
  const index = parseInt(req.params.index);

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read file" });
    const todos = JSON.parse(data);

    if (index < 0 || index >= todos.length)
      return res.status(400).json({ error: "Invalid index" });

    todos.splice(index, 1);

    fs.writeFile(FILE_PATH, JSON.stringify(todos, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to update file" });
      res.json({ message: "Todo deleted successfully!" });
    });
  });
});
```
**Explanation**:

- Extract `index` from URL parameters (`req.params.index`).

- Read and parse the JSON file.

- Validate the index to avoid out-of-bound errors.

- Use `splice()` to remove the todo.

- Save the updated array back to the file.

---
## 6. Adding Multiple Todos at Once
You can add multiple todos in one go using Postman.

Example JSON Body:
```json
[
  { "title": "Go to gym" },
  { "title": "Learn Node.js" },
  { "title": "Drink water" }
]
```
Updated Code:
```js
if (Array.isArray(newTodo)) {
  todos.push(...newTodo); 
} else {
  todos.push(newTodo);
}
```
This enables bulk insertion of todos!

Entire Code for the assignment: **Create a filesystem-based TODO app where todos are stored in a file**
```js
const { error } = require('console');
const express=require('express')
const fs=require('fs')
const app=express();
app.use(express.json());

const FILE_PATH="todos.json";

app.get('/todos',(req,res)=>{
  fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
    if(err)
      return res.status(500).json({error:"failed to read the file"})
    const todos=JSON.parse(data)
    res.json(todos)
  })
})

app.post('/todos',(req,res)=>{
  const newTodos=req.body;
  fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
    if(err)
      return res.status(500).json({error:"faild to read the file"})
    const todos=JSON.parse(data)
    todos.push(newTodos)
    fs.writeFile(FILE_PATH,JSON.stringify(todos),(err)=>{
      if(err)
        return res.status(500).json({error:"failed to write the file"})
      res.status(201).json({message:"task added successfully"})
    })
  })
})

app.delete('/todos/:index',(req,res)=>{
  const index=parseInt(req.params.index)
  fs.readFile(FILE_PATH,"utf-8",(err,data)=>{
    if(err)
      return res.status(500).json({error:"failed to read file"})
    const todos=JSON.parse(data);
    if(index<0||index>=todos.length)
      return res.status(400).json({message:"invalid index"})
    todos.splice(index,1)
    fs.writeFile(FILE_PATH,JSON.stringify(todos),(err,data)=>{
      if(err)
        return res.status(500).json({error:"failed to update the file"})
      res.json({message:"task deleted successfully"})
    })
  })
})

app.listen(3000,()=>{
  console.log("server running on port 3000")
})
```
