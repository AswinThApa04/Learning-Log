# HTTP Servers & Express Basics

## Why the HTTP Protocol?
HTTP (HyperText Transfer Protocol) was introduced so that **servers could communicate with each other** and share resources like web pages and APIs.  
Whenever we visit a website, a request is sent to an HTTP server, which returns a response.

### Example from Browser (Inspect → Network):
| Property | Description |
|-----------|-------------|
| **Request URL** | https://www.google.com/ |
| **Request Method** | GET |
| **Status Code** | 200 OK |
| **Remote Address** | [2404:6800:4007:815::2004]:443 |
| **Referrer Policy** | strict-origin-when-cross-origin |

---

## Request-Response Model
HTTP uses the **Request-Response Model**, where:
- A **Client** sends a request (like a browser or Postman)
- A **Server** processes it and sends a response back

### Other Communication Protocols
1. **WebSockets** – Real-time communication  
2. **WebRTC** – Peer-to-peer connections  
3. **gRPC** – High-performance communication between microservices  

---

## Domain Names & IP Addresses
- **Domain Name**: Human-readable name (e.g., `google.com`)  
- **IP Address**: Actual numeric address of the server  
- Use `ping google.com` to find the underlying IP  

*Analogy:*  
Domain = Phone Contact  
IP = Actual Phone Number  

---

## 🔌 Ports
Ports help identify **specific processes** running on a server.

| Protocol | Default Port |
|-----------|--------------|
| HTTP | 80 |
| HTTPS | 443 |
| SSH | 22 |

---

## HTTP Methods
HTTP methods specify what action the client wants the server to perform.

| Method | Description |
|---------|-------------|
| **GET** | Retrieve data (e.g., Get all todos) |
| **POST** | Send data to create something (e.g., Add new todo) |
| **PUT** | Update existing data |
| **DELETE** | Remove data |

---

## Response Types
The server can respond with:
1. **Plain text**
2. **HTML**
3. **JSON** (most common in APIs)

### Example JSON:
```json
{
  "name": "John Doe",
  "age": 30,
  "isEmployed": true,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "phoneNumbers": ["123-456-7890", "987-654-3210"]
}
```
## Status Codes
| Code                          | Meaning         | Description                          |
| ----------------------------- | --------------- | ------------------------------------ |
| **200 OK**                    |  Success       | Request completed successfully       |
| **204 No Content**            |  Success       | No content to send                   |
| **301 Moved Permanently**     |  Redirect     | Resource moved                       |
| **304 Not Modified**          |  Cache        | Use cached version                   |
| **400 Bad Request**           |  Client Error  | Invalid syntax                       |
| **401 Unauthorized**          |  Client Error | Authentication required              |
| **403 Forbidden**             |  Client Error | Access denied                        |
| **404 Not Found**             |  Client Error | Resource not found                   |
| **500 Internal Server Error** |  Server Error | Something went wrong                 |
| **502 Bad Gateway**           |  Server Error | Invalid response from another server |
---
## HTTP Body
The body (or payload) contains the actual data sent in a request (commonly JSON).
**Example:**
```json
{
  "todo": "Go to the gym"
}
```
## Routes

Routes define how a server handles specific requests.
Each route corresponds to a specific URL path and HTTP method.

**Example:**
```js
app.get('/todos', (req, res) => {
  res.json({ message: 'Get all todos' });
});
```

*Flask in Python = Express in JavaScript*
---
## Creating a Basic HTTP Server with Express
**Code Example:**
```js
const express=require('express');
const app = express();

// Route Handlers
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000); // Server listens on port 3000
```
### Key Notes

- `app.listen(3000)` keeps the Node.js process alive, listening for requests.

- We can test routes using Postman or directly via the browser.

  - `GET http://localhost:3000` → "Hello World"

- Adding another route:
  ```js
  app.get('/asd', (req, res) => {
  res.send('Hello World from /asd endpoint');
  });
  ```
- Using POST method:
  ```js
  app.post('/', (req, res) => {
  res.send('Hello World from the POST endpoint');
  });
  ```
---
### Behind the Scenes

In the code:

- `req` → gives access to request data

- `res` → used to send a response
*Example:*
```js
res.json({ name: "Aswin" });
```

*You can only send one response per request:*
```js
res.send("Hello");
res.send("Hi again"); // this will throw an error in the console or the terminal
```

