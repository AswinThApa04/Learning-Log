## Middleware (Continued), express.json() & CORS  

### `express.json()` Middleware  
`express.json()` is a built-in Express middleware that parses **incoming JSON request bodies**.  
Without it, `req.body` will be `undefined` when sending JSON from frontend/Postman.

**Why needed?**
When frontend sends JSON in POST/PUT request:  
```json
{ "a": 10, "b": 20 }
```
`express.json()` converts it into a usable JS object:
```js
req.body  // { a: 10, b: 20 }
```
---
## Understanding CORS (Cross-Origin Resource Sharing)

*CORS* = Browser security mechanism to control API access from another domain.

When frontend (e.g., localhost:5000) tries to request backend (localhost:3000):

- Different origin → Browser blocks request (security rule)

- Backend must explicitly allow cross-origin requests

**Why CORS exists?**
To prevent malicious websites from secretly sending requests to other servers using your browser cookies.
--- 

### Using CORS Middleware
Install & enable CORS:
```js
const cors = require("cors");
app.use(cors());
```
Now the backend accepts requests from other domains(eg:React, Our Frontend App,etc.)
## Assignment Done — Frontend calling Node Backend
1) Backend (`server.js`)
```js
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        answer: a + b
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
```
2) Frontend (`public/index.html`)
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.6/axios.min.js"></script>
    <script>
        async function sendRequest() {
            const response = await axios.post("http://localhost:3000/sum", {
                a: document.getElementById("a").value,
                b: document.getElementById("b").value
            });
            alert("Sum is: " + response.data.answer);
        }
    </script>
</head>
<body>
    <input id="a" placeholder="First Value" />
    <input id="b" placeholder="Second Value" />
    <button onclick="sendRequest()">Find Sum</button>
</body>
</html>
```
3) Run static frontend server

Inside public folder:
```bash
npx serve
```
Now:
- Frontend: `http://localhost:xxxx/`

- Backend: `http://localhost:3000/sum`

Browser sends request → CORS allows → Backend calculates sum → Frontend shows result

#### Key Takeaways
| Topic                          | Understanding                                        |
| ------------------------------ | ---------------------------------------------------- |
| `express.json()`               | Converts JSON body → JS object                       |
| CORS                           | Security system that blocks cross-origin calls       |
| `cors()` middleware            | Allows cross-domain frontend ↔ backend communication |
| Fetch / Axios                  | Used browser to call backend APIs                    |
