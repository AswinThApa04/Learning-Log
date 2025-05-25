# 01 - Classes and Objects

## 🔸 What is a Class?
A class is like a **blueprint** or **template** for real-world entities. It defines attributes (data) and behaviors (functions/methods).

**Example:**
If Toyota creates a blueprint for their car:
- The **blueprint** = class  
- The **manufactured cars** = objects

Or in a college system:
- **Teacher** = class  
- **Data of each teacher** = objects

---

## 🔸 What is an Object?
An object is an **instance of a class** — a real-world entity created using the class blueprint.

---

## 🧱 Syntax: Creating a Class

```cpp
class Teacher {
    // Properties or attributes
    string name;
    string dept;
    string subject;
    double salary;

    // Methods or member functions
    void changeDept(string newDept) {
        dept = newDept;
    }
};

```
## 🧪 Syntax: Creating an Object
```cpp
int main() {
    Teacher t1; // t1 is the object
}
```
## 📝 Syntax: Assigning Values to an Object
```cpp
t1.name = "Aswin";
t1.dept = "CS";
t1.salary = 25000;
t1.subject = "C++";
```
⚠️ Note: Values declared for each object cannot be accessed directly if the class members are marked private. By default, class members in C++ are private.

## 🔐 Access Modifiers
| Modifier    | Scope / Accessibility                    |
| ----------- | ---------------------------------------- |
| `private`   | Only inside the class                    |
| `public`    | Accessible from anywhere                 |
| `protected` | Inside the class and its derived classes |


## ✅ Example Using private and public
```cpp
class Teacher {
private:
    double salary;  // Sensitive data should be private

public:
    string name;
    string dept;
    string subject;

    void changeDept(string newDept) {
        dept = newDept;
    }

    // Setter function
    void setSalary(double s) {
        salary = s;
    }

    // Getter function
    double getSalary() {
        return salary;
    }
};
```
🔄 Why use Setter & Getter?
We use setters to assign values to private members, and getters to access their values indirectly.
🔐 Can't access salary directly
✅ But can use setSalary() and getSalary() to interact with it


