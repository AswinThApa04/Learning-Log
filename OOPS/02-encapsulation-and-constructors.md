# 02 - Encapsulation and Constructors

---

## 🔐 Encapsulation

**Definition:**  
Encapsulation is the process of **wrapping data (attributes) and methods (functions)** into a single unit — a **class**.

> `Data Properties + Member Functions = Encapsulation`

### ✅ Purpose:
- Organizes code neatly into classes
- Enables **data hiding** by using access modifiers (`private`, `public`, `protected`)

### 🧱 Example:

```cpp
class Teacher {
private:
    double salary;  // Hidden from direct access

public:
    string name;
    string dept;
    string subject;

    void changeDept(string newDept) {
        dept = newDept;
    }
};
```
## 🏗️ Constructors
Definition:
A constructor is a special method that is automatically invoked when an object is created. It is mainly used for initialization.

📝 Key Rules:
- Has the same name as the class

- No return type (not even void)

- Called only once when object is created

- Memory allocation happens during constructor call

- Must always be public

### 🔹 Non-Parameterized Constructor
```cpp
class Teacher {
public:
    string name;
    string dept;
    string subject;

    Teacher() {
        dept = "Computer Science"; // Default value
    }
};
```
This sets a default value for dept during object creation.

### 🔹 Parameterized Constructor
```cpp
class Teacher {
public:
    string name;
    string dept;
    string subject;
    double salary;

    Teacher(string n, string d, string s, double sal) {
        name = n;
        dept = d;
        subject = s;
        salary = sal;
    }
};
```
### 🔁 Constructor Overloading
You can have multiple constructors in a class, differentiated by the number or type of parameters.
```cpp
class Teacher {
public:
    string name;
    string dept;

    Teacher() {
        dept = "CS";
    }

    Teacher(string d) {
        dept = d;
    }
};
```
🧠 Only the constructor that matches the parameters during object creation will be called.




