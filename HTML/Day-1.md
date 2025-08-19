# 📘 Day 1 – HTML Basics

## 1. Basic HTML Structure
- `<!DOCTYPE html>` → Declares the document as HTML5.  
- `<html>` → Root element that contains everything.  
- `<head>` → Holds meta-information like title, charset, etc.  
- `<title>` → Sets the page title (seen in the browser tab).  
- `<body>` → Contains all visible content of the webpage.  

---

## 2. Core Content Tags
- **Headings** (`<h1>` to `<h6>`) → Titles and subtitles, `<h1>` being the most important.  
- **Paragraphs** (`<p>`) → Blocks of text.  

---

## 3. Lists
- **Unordered List (`<ul>`)** → Bulleted list where order doesn’t matter.  
- **Ordered List (`<ol>`)** → Numbered list where order is important.  
- **List Item (`<li>`)** → Items inside `<ul>` or `<ol>`.  

---

## 4. Links & Images
- **Anchor Tag (`<a>`)** → Clickable links (`href` attribute).  
- **Image Tag (`<img>`)** → Embeds images (`src` and `alt` attributes).  

---

## 5. Semantic HTML (for Layout)
- `<header>` → Top section (logo, title, navigation).  
- `<nav>` → Container for main navigation links.  
- `<main>` → Wraps primary unique content.  
- `<section>` → Groups related content.  
- `<article>` → Self-contained content (e.g., blog post).  
- `<footer>` → Bottom section (copyright, contact).  

---

## 📝 Practice Code – *About Me Page*
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>About Me:</title>
  </head>
  <body>
    <header>
      <h1>About Me:</h1>
    </header>
    <main>
      <section>
        <h2>My Introduction</h2>
        <p>Hello Everyone. I'm Aswin currently graduated from Cambridge Institute of Technology, Bangalore. I was pursuing B.E. in ECE but later hooked on to CS core subjects because of my friends circle.</p>
      </section>

      <section>
        <h2>My Hobbies</h2>
        <ul>
          <li>Play Guitar.</li>
          <li>Play Valo and shit talk with the boys.</li>
          <li>Solve Coding Problems.</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>&copy; Aswin Thapa, 2025</p>
    </footer>
  </body>
</html>
```
---
## 📝 Practice Code – Hobbies, Goals & Movies
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Favourite Hobbies</title>
  </head>
  <body>
    <!-- Task 1: Headings & Lists -->
    <h1>My Favourite Hobbies</h1>
    <p>In this I'll be describing what are my favourite hobbies. Stay Tuned!</p>

    <h2>My Hobbies</h2>
    <ul>
      <li>Playing Guitar</li>
      <li>When I get motivated, I like coding and solving problems</li>
      <li>Learning about new tech</li>
    </ul>

    <h3>Career Goals</h3>
    <ol>
      <li>Learn HTML, CSS, & JS</li>
      <li>Move into a framework like React</li>
      <li>Learn the MERN stack and then DevOps</li>
      <li>Contribute to open source projects</li>
      <li>Build a strong LinkedIn and GitHub profile</li>
    </ol>

    <!-- Task 2: Movie Ranking -->
    <h1>My Favourite Movies</h1>
    <ol>
      <li>Iron Man</li>
      <li>One Piece: Stampede</li>
      <li>Black Hawk Down</li>
    </ol>

    <!-- Task 3: Links & Images -->
    <h1>My Favourite Website</h1>
    <a href="https://music.youtube.com/">Youtube Music</a>
    <img src="https://thumbs.dreamstime.com/b/youtube-music-application-mobile-phone-screen-august-chiang-mai-thailand-226214184.jpg" alt="Youtube Music">
  </body>
</html>
```
# HTML Forms & Mini Project

## 1. The Form Container
- `<form>` → The main tag that wraps all form elements together.

---

## 2. Labels and Inputs
- `<label>` → Visible text description for a field (e.g., “Username”).  
- `<input>` → The actual field where the user enters data.  
- **Connection:** Use `id` on `<input>` and `for` on `<label>` with the same value (important for accessibility).  

---

## 3. Common Input Types
- `type="text"` → Single-line text input.  
- `type="password"` → Hidden characters when typing.  
- `type="email"` → For email addresses (helps with validation and correct mobile keyboard).  

---

## 4. Multi-line Input
- `<textarea>` → Used for longer, multi-line input (comments, messages, etc.).  

---

## 5. Submitting the Form
- `<button type="submit">` → Submits the form’s data.  

---

## 📝 Practice Code – *Contact Form*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form</title>
</head>
<body>
    <form>
        <h2>Contact Us</h2>
      
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="user_email">
      
        <br><br>
      
        <label for="message">Your Message:</label>
        <textarea id="message" name="user_message"></textarea>
      
        <br><br>
      
        <button type="submit">Send Message</button>
    </form>
</body>
</html>
```
---
## 🚀 Mini Project – Personal Bio Page
A small project combining everything I’ve learned so far: headings, lists, links, images, and semantic HTML.
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>MINI PROJECT (PERSONAL BIO PAGE)</title>
</head>
<body>
    <header>
        <h1>Aswin Thapa</h1>
    </header>
    <main>
        <section>
            <h2>About Me:</h2>
            <img src="https://cdn.vectorstock.com/i/preview-1x/64/17/user-account-circle-glyph-color-icon-vector-28806417.jpg" alt="User Photo">
            <p>Hello Everyone. This is Aswin Thapa. Currently hooked into web development things and gradually upskilling myself in this field. Join this journey with me where I turn myself into a developer in the coming days.</p>
        </section>

        <section>
            <h2>My Skills and Hobbies</h2>
            <ul>
                <li>Play Guitar.</li>
                <li>Play Valo and shit talk with the boys.</li>
                <li>Solve Coding Problems.</li>
            </ul>
            <p>
                <a href="https://aswinthapa04.github.io/portfolio-website/">Portfolio Website</a>
                <br><a href="https://leetcode.com/u/aswinthapa/">Leetcode</a>
                <br><a href="https://www.linkedin.com/in/aswin-thapa/">LinkedIn</a>
            </p>
        </section>
    </main>
    <footer>
        <p>&copy; 2025, Aswin Thapa</p>
    </footer>
</body>
</html>
```
