# Authentication & JWT (JSON Web Token)
## What is Authentication?
Authentication is the process of allowing users to sign in or sign out of a website and ensuring routes are protected — meaning users can only access their own data.

> **Note:** A token stores session information and acts as a secret identifier for the user.
---
### Real-life Analogy (Bank Example)

When you open a bank account:

1) You submit your details to the bank.

2) They give you a cheque book (your identity proof).

3) Each time you make a transaction, you use that cheque.

4) The bank verifies your cheque to confirm your identity.
   
> Similarly, a token works like your cheque — a secret you send to the server in each request.

---

### Basic Auth Workflow

1) User visits website (e.g., `courses.com`)

2) User sends a POST request to /signin with `username` & `password`

3) Server returns a token

5) User includes token in all future requests

6) Server verifies token → grants access

Tokens are visible in request headers (under “Authorization” or “token”).
---

### Basic Authentication Example
```js
const express=require("express");

const app= express();
app.use(express.json());
const users=[];

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"you are signed up"
    })
    console.log(users)
})


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken();
        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});
```
### Authenticated Endpoint — `/me`
```js
app.get("/me",(req,res)=>{
    const token=req.headers.token
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
            foundUser=users[i]
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            message:"invalid token"
        })
    }
})
```
Why JWTs(json web tokens) come into picture now although we could have done the same using stateful tokens

### Stateful

By stateful here, we mean that we need to store these tokens in a variable right now (and eventually in a database). 

### Problem

The problem is that we need to `send a request to the database` every time the user wants to hit an `authenticated endpoint`.

Example:
```js
for (let i = 0; i < users.length; i++) {
  if (users[i].token == token) {
    foundUser = users[i];
  }
}
```
> As your user base grows, this becomes inefficient.

### Why JWTs Came Into Picture

JWT (JSON Web Token) solves this by making authentication stateless.
A JWT contains all user information in itself — no database check required.
So now what is JWTs:
- JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for authentication and information exchange in web applications.

- **WTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. All the `data` is stored in the token itself.

#### Real-life Analogy (Movie Ticket)
1) You show your ID → they verify & give you a ticket (JWT).
2) You don’t show your ID again, just the ticket.
3) The gatekeeper checks if the ticket is valid → lets you in.
> JWT = that ticket. It contains your info & a server-verified signature.

## JWT-based Authentication Example
```js
const express=require("express");
const jwt=require("jsonwebtoken")
const app= express();
app.use(express.json());
const users=[];
const JWT_SECRET="aswinthapa123";

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message:"you are signed up"
    })
    console.log(users)
})


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token =jwt.sign({
            username:username
        },JWT_SECRET);
        res.json({
            token:token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.get("/me",(req,res)=>{
    const token=req.headers.token
    const decodedInformation=jwt.verify(token,JWT_SECRET);//this dI returns the json object eg:{username:aswinthapa16@gmail.com}
    const username=decodedInformation.username
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i];
            break;
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            message:"invalid token"
        })
    }
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
});
```

#### JWT Structure

A JWT looks like this:
```
xxxxx.yyyyy.zzzzz
```
this is what a JWT looks like `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzd2luIiwiaWF0IjoxNzYyNDI1NTAyfQ.L7oPKwCLyD2nnwTAjBYS8iMEimS5wrEr4infnK3QTDg`
where each block is separated by `.`


| Part          | Description                                     |
| ------------- | ----------------------------------------------- |
| **Header** (xxxxx)   | Specifies algorithm (e.g., HS256)               |
| **Payload**  (yyyyy)  | Contains user data (like username, ID)          |
| **Signature** (zzzzz) | Created using secret key — ensures authenticity |

---
#### Key Takeaways

 - Built manual token-based authentication
 - Created /signup, /signin, /me routes
 - Understood problems of stateful tokens
 - Replaced logic using JWTs
 - Learned about JWT structure (Header, Payload, Signature)
---
