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
