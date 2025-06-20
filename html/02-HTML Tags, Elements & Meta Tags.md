# 02 - HTML Tags, Elements & Meta Tags

---

## 🏷️ HTML Tags

HTML **tags** are keywords enclosed in angle brackets `< >` that tell the browser how to format and display content.

### 📌 Example:
```html
<head></head>
```

- Tags usually come in pairs: an opening <tag> and a closing </tag>.

- Some tags are self-closing (called empty tags).

---
### HTML Elements
An HTML element consists of:
>`Opening tag + Content + Closing tag`
📌 Example:
```html
<head>I am an HTML element</head>
```
---

### 🧱 Types of Tags in HTML
## 1. Container Tags
These have:

- Opening tag

- Content

- Closing tag

- Used in most elements (like paragraphs, lists, etc.)

✅ Syntax:
```html
<tagname> ... </tagname>
```
Example:
```html
<h1>Heading</h1>
<ul><li>List item</li></ul>
<button>Click</button>
```
---

## 2. Empty Tags
These do not require a closing tag. They are self-contained and still perform a function.

✅ Syntax:
```html
<tagname>
```

Example
```html
<img src="image.jpg">
<br>
<hr>
<meta>
```
---

## 🔧 HTML Attributes
Attributes give additional information about HTML elements. They're added inside the opening tag.

✅ Syntax:
```html
<tagname attribute_name="value">
```

📌 Example:
```html
<img src="photo.png" height="300px" width="300px">
```
- src → path to the image
- height, width → image dimensions
---

## 🌍 Global Attributes
These are supported by most HTML tags.

🧠 Example:
```html
<img src="photo.png" hidden>
```
hidden is a boolean global attribute. If used, the element is not displayed in the browser.

---

### 🧾 HTML Meta Tags
Meta tags provide metadata (data about data) for an HTML document. They are placed inside the <head> and not visible on the page.

🧠 Why Use Meta Tags?
- Improve SEO (Search Engine Optimization)

- Control page behavior (auto-refresh, character set)

- Provide author or revision info

✅ Meta Tag Syntax:
```html
<meta attribute-name="value">
```
📄 Example with Meta Tags:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Documentation of what I'm learning in computer science.">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
    <h2>Daily Learning Log</h2>
    <p>This is an example of a meta tag</p>
</body>
</html>
```

## 🧩 Common Use Cases for Meta Tags
## 📌 1. Keywords for SEO
```html
<meta name="keywords" content="HTML, Meta Tags, SEO">
```

## 📌 2. Page Description
```html
<meta name="description" content="This page tracks my daily learning log.">
```

## 📌 3. Auto-Refresh the Page
```html
<meta http-equiv="refresh" content="30">
```
⏱ Refreshes the page every 30 seconds.

## 📌 4. Author Info
```html
<meta name="author" content="Aswin Thapa">
```

## 📌 5. Last Modified or Revised Date
```html
<meta name="revised" content="Wednesday, June 19th, 2025, 10:00 am">
```

