# 00 - How the Internet Works

---

## 🌐 What is the Internet?

The **Internet** is a global network that connects millions of computers and devices around the world. It enables users to:
- Browse websites
- Send/receive emails
- Watch videos
- Communicate globally

It functions as a massive web of interconnected systems that facilitates **data sharing**, **communication**, and **remote access to services**.

---

## 📡 What is HTTP?

**HTTP (Hypertext Transfer Protocol)** is the protocol used for transferring web content between a browser (client) and a server.

### 📌 How it Works:
- You type a URL → browser sends an **HTTP request** to the server
- The server responds with the webpage (HTML/CSS/JS files)
- Each HTTP request is **stateless** — the server does not remember previous requests

### 🛡️ HTTPS:
- A secure version of HTTP
- Uses **encryption (SSL/TLS)** for secure communication
- Protects sensitive data like login info, payment details

### 🧠 Common HTTP Methods:
| Method | Purpose               |
|--------|------------------------|
| GET    | Retrieve data          |
| POST   | Submit data to server  |
| PUT    | Update a resource      |
| DELETE | Remove a resource      |

---

## 🌍 Domain Name

A **domain name** is a human-friendly address used to access websites (like `google.com`).

- It replaces hard-to-remember IP addresses like `142.250.190.78`
- Composed of:
  - **Second-Level Domain**: `google`
  - **Top-Level Domain**: `.com`

### 📌 Registered via:
- Domain registrars like GoDaddy, Namecheap, etc.

---

## 🖥️ Web Hosting

**Web hosting** is the service that stores your website's files on a server and makes them accessible online.

### 🏠 Hosting Types:
| Type            | Description                                           |
|-----------------|-------------------------------------------------------|
| Shared Hosting  | One server shared by many websites (affordable)       |
| VPS Hosting     | Virtual servers with dedicated resources               |
| Dedicated Hosting | You get an entire server to yourself (expensive)   |
| Cloud Hosting   | Scalable hosting via cloud platforms                  |

> Hosting providers may also offer:  
> Email accounts, SSL certificates, domain management, backups, etc.

---

## 🌐 DNS (Domain Name System)

**DNS** translates human-readable domain names (like `www.example.com`) into machine-readable **IP addresses**.

### 🔁 DNS Process:
1. You enter a domain in the browser
2. DNS server finds its IP address
3. Browser connects to that IP and loads the site

> DNS is what makes the web usable — you don’t need to remember IP numbers.

---

## 🌐 Browsers

**Web browsers** are applications that fetch, render, and display web content.

### 🔧 What browsers do:
- Send HTTP requests to web servers
- Receive HTML, CSS, and JS files
- Use rendering engines to display pages visually

### ⚙️ Browser Components:
| Component         | Description                        |
|------------------|------------------------------------|
| Rendering Engine  | Converts HTML/CSS to visuals (e.g., Blink, Gecko) |
| JavaScript Engine | Runs JavaScript (e.g., V8, SpiderMonkey) |
| UI Features       | Tabs, bookmarks, history, security |

Popular browsers: Chrome, Firefox, Safari, Edge, Brave

---

## 🧠 Summary

- **Internet** = Global communication network
- **HTTP/HTTPS** = Rules for transferring web content
- **Domain Name** = Human-friendly web address
- **Hosting** = Where your site lives
- **DNS** = Finds IP address of a domain
- **Browser** = Renders and displays websites

