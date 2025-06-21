# 03 - Container and Empty Tags in HTML

---

## 🧱 What are HTML Tags?

HTML uses predefined tags to instruct the browser on how to format and display content. Tags are enclosed within angle brackets `< >`.

There are **two main types of tags** in HTML:

- **Container Tags** (with opening + closing)
- **Empty Tags** (self-closing or no closing tag)

---

## 📦 Container Tags

Container tags consist of: >Opening tag + Content + Closing tag


These tags:
- Wrap around content
- Apply styles or behaviors
- Must be closed properly

### ✅ Syntax:
```html
<tagname> content </tagname>
```

## 📌 Common Container Tags:
| Tag           | Description                                  |
| ------------- | -------------------------------------------- |
| `<html>`      | Root of the HTML document                    |
| `<head>`      | Metadata section                             |
| `<title>`     | Tab name in the browser                      |
| `<body>`      | Visible content section                      |
| `<h1> - <h6>` | Headings from largest to smallest            |
| `<p>`         | Paragraph                                    |
| `<b>`         | Bold text                                    |
| `<i>`         | Italic text                                  |
| `<a>`         | Hyperlink anchor tag                         |
| `<button>`    | Clickable button                             |
| `<div>`       | Section or division                          |
| `<iframe>`    | Embed external content (e.g., YouTube, maps) |
| `<nav>`       | Defines navigation menus                     |
| `<script>`    | Embeds JavaScript code                       |
| `<ul>`        | Unordered list                               |
| `<ol>`        | Ordered list                                 |
| `<li>`        | List item                                    |

## 🧩 Empty Tags

Empty tags:

- Do not have a closing tag
- Are self-contained
- Perform specific actions like inserting breaks or metadata

✅ Syntax:
```html
<tagname>
```

## 📌 Common Empty Tags:

| Tag        | Purpose                                       |
| ---------- | --------------------------------------------- |
| `<br>`     | Line break                                    |
| `<hr>`     | Horizontal line separator                     |
| `<img>`    | Displays an image                             |
| `<input>`  | User input field                              |
| `<meta>`   | Metadata (charset, description, author, etc.) |
| `<link>`   | Links external CSS files                      |
| `<source>` | Media source in audio/video tags              |

## 🧪 Example Code

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta data -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daily Learning Log</title>
</head>
<body>

    <!-- Headings -->
    <h1>Aswin Thapa</h1>
    <h2>Learning Log</h2>
    <h3>Repos</h3>
    <h4>Tracking</h4>
    <h5>Progress Repo</h5>
    <h6>Daily Learning</h6>

    <!-- Paragraphs -->
    <p>This is a paragraph.</p>
    <hr>
    <p>Documentation for whatever I'm learning throughout</p>
    <hr>

    <!-- Line Break -->
    <p>This is a <br> line break</p>

    <!-- Hyperlink -->
    <h4>Link</h4>
    <a href="https://www.geeksforgeeks.org/">Geeks for Geeks</a>

    <!-- Ordered List -->
    <ol>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
    </ol>

</body>
</html>
