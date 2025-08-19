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
