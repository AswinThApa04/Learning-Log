## Day 4: September 25, 2025 - Bash and Terminal Basics

Today's learning focused on the fundamentals of using the terminal, an essential interface for interacting with a computer through text-based commands.

---

### Navigational Commands 🗺️

These commands are used to find your current location and move around the file system.

-   **`pwd` (Print Working Directory):** Shows the full path of the directory you are currently in.
-   **`cd` (Change Directory):** Used to navigate between folders.
    -   `cd folder_name`: Moves into a specified folder.
    -   `cd ..`: Moves one level up to the parent directory.
    -   `cd ../..`: Moves two levels up.

---

### File and Directory Manipulation 📂

These commands allow you to view, create, and inspect files and folders.

-   **`ls` (List):** Lists all files and subdirectories within the current directory.
-   **`mkdir` (Make Directory):** Creates a new, empty folder.
    -   Example: `mkdir my-project`
-   **`touch` (Create File):** Creates a new, empty file.
    -   Example: `touch index.js`
    -   **Note for Windows:** In PowerShell, the equivalent command is `ni` (New-Item). A great cross-platform alternative is to install and use **Git Bash**, which supports `touch` and other standard Unix commands.
-   **`cat` (Concatenate):** Prints the contents of a file directly to the terminal.
    -   Example: `cat my_notes.txt`

---

### Editing, Moving, and Copying ✍️

-   **`vi` (Visual Editor):** A powerful in-terminal text editor.
    -   To start typing, press `i` to enter "Insert Mode".
    -   To save and quit, press `Esc`, then type `:wq` and press `Enter`.
    -   To quit without saving, press `Esc`, then type `:q!` and press `Enter`.
-   **`mv` (Move):** Moves a file or folder to a new location. It's also used to rename files.
    -   Move: `mv file.txt ./new_folder/`
    -   Rename: `mv old_name.txt new_name.txt`
-   **`cp` (Copy):** Copies a file or folder.
    -   Copy file: `cp source.txt destination.txt`
    -   To copy a directory and its contents, you must use the `-r` (recursive) flag: `cp -r source_directory/ new_directory/`

---

### The Node.js Ecosystem 🌐

These commands are essential for JavaScript development outside of the browser.

-   **`nvm` (Node Version Manager):** A tool that lets you install and manage multiple versions of Node.js on your machine.
-   **`node`:** The command to run the Node.js runtime. You can use it to execute a JavaScript file (`node index.js`) or open an interactive JS shell.
-   **`npm` (Node Package Manager):** The default package manager for Node.js. It's used to install external libraries and tools (called packages) from the npm registry.
    -   For example, to use popular libraries like `express`, you first need to install them into your project with a command like `npm install express`.
