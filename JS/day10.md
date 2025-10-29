# Introduction to Node.js, NPM & CLI Building

## What is Node.js?
- **Node.js** is a JavaScript runtime built on **Google’s V8 engine**.
- It allows JavaScript to run outside of the browser, mainly used for backend development.
- Discovered **Bun**, a Node.js competitor written in **Zig** (a low-level language like Rust).
- Learnt about **ECMAScript**, the standard that defines JavaScript features.

---

## Project Initialization

1. Created a new project folder and initialized it:
   ```bash
   npm init -y
   ```
This generates a default package.json file.

2. Understanding `package.json` fields:
   ```json
   {
    "name": "harkirat-node",      // App or package name
    "version": "1.0.0",           // Current version
    "main": "index.js",           // Entry point
    "scripts": {
    "start": "node index.js"    // Run command shortcut
    },
    "license": "ISC"              // Default license metadata
    }
   ```
3. Running scripts:
   - Run directly:
     ```bash
     node index.js
     ```
   - Run via NPM script:
     ```bash
     npm run start
     ```
---
## Understanding NPM (Node Package Manager)
NPM manages libraries and dependencies for Node.js projects.

### Common uses

- Initialize project → `npm init`

- Run scripts → `npm run <script-name>`

- Install dependencies → `npm install <package-name>`

#### Example – Installing chalk
```bash
npm install chalk
```

- This created a new folder: node_modules/

- Updated `package.json`:
```json
"dependencies": {
  "chalk": "^5.6.2"
}
```

- A new file `package-lock.json` was created to lock dependency versions.

#### Running Chalk (ES Module)

Created `index.mjs` and ran with:
```bash
node --experimental-modules index.mjs
```

**Code Example**:
```js
import chalk from "chalk";
console.log(chalk.blue('Hello World'));
```
--- 

## Internal vs External Packages
### Internal Packages
- These come bundled with Node.js.
Example – `fs`, `path`, `http`, etc.

#### Example: Reading a file
```js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'a.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
```
### External Packages

Packages installed via NPM, created by others.

Examples:

`chalk` (for coloring console output)

`express` (for building servers)

---

### Semantic Versioning (semver)

Each version number follows the format:
`major.minor.patch`
| Type      | Description                       |
| --------- | --------------------------------- |
| **MAJOR** | Breaking changes                  |
| **MINOR** | New features, backward compatible |
| **PATCH** | Bug fixes, small improvements     |

### package-lock.json

- Ensures dependency version consistency across installations.

- Stores exact versions of all installed packages and their dependencies.


### Assignment – Building a CLI (Command Line Interface)
#### Goal
Create a CLI that counts lines or words in a file.
#### Line Counter Example
```js
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) console.log(err);
      else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();
```

**Example Output**:
```css
There are 1 lines in a.txt
```
#### Word Counter Example
```js
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) console.log(err);
      else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === " ") words++;
        }
        console.log(`There are ${words + 1} words in ${file}`);
      }
    });
  });

program.parse();
```
**Output Example:**
```css
There are 5 words in a.txt
```
