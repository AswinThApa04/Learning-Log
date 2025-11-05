# HTTP Requests: Fetch vs Axios — Continued Notes
### Calling APIs in JavaScript

There are two common ways to make HTTP requests from JS:
| Method    | Source               | Notes                                            |
| --------- | -------------------- | ------------------------------------------------ |
| `fetch()` | Built-in browser API | Returns a `Promise`, requires `.json()` to parse |
| `axios`   | External library     | Automatically parses JSON, shorter syntax        |

### Using `fetch()`
- Example — GET request
  ```js
  async function main(){
    const response = await fetch("https://localhost:3000/todos");
    const json = await response.json();  // convert response to JS object
    console.log(json.todos);
  }
  main();
  ```
- Same logic using `.then()` syntax:
  ```js
  function main(){
    fetch("https://localhost:3000/todos")
        .then(async response => {
            const json = await response.json();
            console.log(json.todos);
        });
  }
  main();
  ```
### Using `axios`
```js
const axios = require("axios");

async function main(){
    const response = await axios.get("https://localhost:3000/todos");
    console.log(response.data.todos); // axios already parsed JSON
}
main();
```
*Axios automatically converts JSON → Object, unlike fetch where you manually do `response.json()`*

### POST request with Fetch
```js
async function main(){
    const response = await axios.post("https://localhost:3000/todos");
    console.log(response.data);
}
```
---

## Sending Body & Headers
### Example — POST request (Axios) with body + headers
```js
const axios = require("axios");

async function main(){
    const response = await axios.post(
        "https://httpdump.app/dumps/1234",
        { username: "aswin", password: "1234567" },
        { headers: { Authorization: "Bearer 123" } }
    );

    console.log(response.data);
}
main();
```
### Same request, GET version (query params + headers)
```js
async function main(){
    const response = await axios.get(
        "https://httpdump.app/dumps/1234?a=b",
        { headers: { Authorization: "Bearer 123" } }
    );

    console.log(response.data);
}
main();
```
*GET requests do not support request body, only query params.*

### Universal Axios Syntax
Cleaner style using config object:
```js
async function main(){
    const response = await axios({
        url: "https://httpdump.app/dumps/1234",
        method: "POST",
        headers: { Authorization: "Bearer 123" },
        data: { username: "Aswin" }
    });

    console.log(response.data);
}
main();
```
