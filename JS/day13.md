# Deep Diving into HTTP  
---

## 1. Understanding Servers and Ports  

- A **single machine** can run **multiple HTTP servers** on different ports.  
  For example:  
  - `google.com` → running on **port 3000**  
  - `app.100xdevs.com` → running on **port 3001**  

- Each port can handle different workloads or services.  
- You **cannot run two processes** on the **same port** simultaneously.

---

##  2. HTTP Method Handlers  

HTTP methods typically follow the **CRUD** pattern:  
- **C** – Create → `POST`  
- **R** – Read → `GET`  
- **U** – Update → `PUT/PATCH`  
- **D** – Delete → `DELETE`

---

##  3. HTTP Headers Explained  

HTTP **headers** are **key–value pairs** exchanged between client and server to send **metadata** about the request or response.

###  Common Headers
| Header | Description |
|--------|-------------|
| `Authorization` | Sends user authentication info |
| `Content-Type` | Specifies data type (e.g., JSON, HTML, binary) |
| `Referer` | Indicates the URL the request originated from |

---

###  Request Headers  
Sent **from the client → to the server**.  
Contain info like authentication tokens, cookies, and content type.

###  Response Headers  
Sent **from the server → to the client**.  
Contain info like status codes, content length, and caching instructions.

---

###  Example Scenario:
When you’re logged in to a website, the browser automatically includes **user credentials** in the request headers.  
That’s how the server knows to return **your personalized HTML** (with profile pic, etc.).  
If not logged in, it returns a different (generic) HTML response.

 **Use Case:**  
Sensitive data (like auth tokens) should be sent in headers — not in the URL query params — for better security.

---

## 4. Fetch API  

The **Fetch API** is a built-in browser function (like `setTimeout` or `alert`) for making network requests.

### Syntax:
```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "POST",
  headers: {
    Cookie: "asd",
  },
  body: {
    // request body data here
  },
});
```
---
## 5. Why Fetch Returns a Promise

Because `fetch()` performs a network operation, the browser doesn’t get an immediate response — it must wait for the server to reply.
Hence, the operation is *asynchronous*, and `fetch` returns a Promise that resolves once the response arrives.

---
### Example: Fetching Data and Displaying in Browser
```html
<body>
  <div id="posts">Posts</div>

  <script>
    async function getRecentPost() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();

      console.log(data);
      // Example output:
      // {
      //   "userId": 1,
      //   "id": 1,
      //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      //   "body": "quia et suscipit..."
      // }

      document.getElementById("posts").innerHTML = data.body;
      // Displays the post body in the browser
    }

    getRecentPost();
  </script>
</body>
```
---
## 6. Async–Await vs `.then()`
### Using `async/await`
```js
async function getRecentPost() {
  console.log("before sending data");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
  document.getElementById("posts").innerHTML = data.body;
}
```
### Equivalent `.then()` version
*async await is just a syntactic sugar making the code look a little better*
```js
async function getRecentPost() {
  console.log("before sending request");
  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      response.json().then((data) => {
        console.log(data);
        document.getElementById("posts").innerHTML = data.body;
      });
    });
}
```
---
## 7. Fetch API Overview
There are two main ways browsers send HTTP requests:
1) From Browser URL (Default GET request)

- Typing a URL and hitting Enter sends an HTTP GET request.

- Retrieves resources like HTML pages, images, etc.

2) From HTML Form or JavaScript (Various request types)

- HTML Forms: Uses method="GET" or method="POST".

- JavaScript (Fetch API): Can make GET, POST, PUT, or DELETE requests asynchronously — ideal for dynamic data (AJAX).
**Using Axios (Simpler Alternative)**
  Axios simplifies HTTP requests — same as fetch, but with cleaner syntax.
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.6/axios.min.js"></script>
  </head>
  <body>
    <div id="posts"></div>
    <script>
      async function fetchPosts() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        document.getElementById("posts").innerHTML = res.data.title;
      }
      fetchPosts();
    </script>
  </body>
</html>
```
*In Node.js we install axios using npm install axios and require('axios'),
but in browser-based HTML we use a <script> tag from CDN.*
---
## 8. Creating Our Own HTTP Server (Calculator API)
**Build a server with 4 routes performing basic arithmetic.**
### Endpoints
```bash
http://localhost:3000/add?a=1&b=2
http://localhost:3000/multiply?a=1&b=2
http://localhost:3000/divide?a=1&b=2
http://localhost:3000/subtract?a=1&b=2
```
### Code
```js
const express = require("express");

const app = express();

app.get("/sum", (req, res)=> {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", (req, res)=> {
    const a=req.query.a
    const b=req.query.b
    res.json({
        ans:a*b
    })
});

app.get("/divide", (req, res)=> {
    const a=req.query.a
    const b=req.query.b
    res.json({
        ans:a/b
    })

});

app.get("/subtract", (req, res)=> {
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    res.json({
        ans:a-b
    })
});

app.listen(3000,()=>{
    console.log("server running at port 3000")
});
```
### Understanding req.query

`req.query` is used to extract query parameters from the URL.
Example:
`http://localhost:3000/add?a=1&b=2` →
`req.query.a = "1"` and `req.query.b = "2"`

#### Why use `parseInt()` or `Number()`?

Query parameters are **strings by default**, so:
```js
"2" + "3" → "23" (string concatenation)
"2" * "3" → 6 (auto converts to number)
```
Hence, always convert before adding/subtracting:
```js
const sum = parseInt(a) + parseInt(b);
```
---
### Key Concepts

- `req.query` extracts query parameters from a GET request.
- Example: `/add?a=1&b=2` → `req.query.a = "1"`, `req.query.b = "2"`.

- Use parseInt() or Number() to convert strings before arithmetic.

- JavaScript automatically converts for * and /, but not for + and -.

- async/await is syntactic sugar over .then() for handling promises.

- Axios simplifies API calls compared to the native Fetch API.

---
