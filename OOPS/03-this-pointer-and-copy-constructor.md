# 03 - `this` Pointer and Copy Constructor

---

## 🔹 What is `this` Pointer?

- `this` is a special pointer in C++ that **points to the current object**.
- It stores the **memory address** of the object that invokes the method.

### 🧠 Key Notes:
- It’s implicitly available inside all non-static member functions.
- You can use `this->property` to refer explicitly to the object's members.
- `this->prop` is equivalent to `(*this).prop`.

### 📌 Real-World Analogy:
If an object has the memory address `100`, then `this` will internally store `100`.

---

### 🧱 Example: Using `this` Pointer in a Constructor

```cpp
class Teacher {
private:
    double salary;

public:
    string name;
    string dept;
    string subject;

    // Non-parameterized constructor
    Teacher() {
        dept = "Computer Science";
    }

    // Parameterized constructor using `this` pointer
    Teacher(string name, string dept, string subject, double salary) {
        this->name = name;
        this->dept = dept;
        this->subject = subject;
        this->salary = salary;
    }

    // Member functions
    void changeDept(string newDept) {
        dept = newDept;
    }

    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "Subject: " << subject << endl;
    }
};

```
### 🧪 Example: Calling the Constructor and Accessing Methods
```cpp
int main() {
    Teacher t1("Aswin", "CS", "C++", 25000);
    t1.getInfo();
    return 0;
}
```
### 🔁 Copy Constructor
A Copy Constructor is a special constructor that creates a new object by copying the values of an existing object.

🧠 Syntax:
```cpp
ClassName(const ClassName &oldObj) {
    // copy values from oldObj
}
```
## 🧱 Example: Copy Constructor in Action
```cpp
class Teacher {
private:
    double salary;

public:
    string name;
    string dept;
    string subject;

    // Parameterized constructor
    Teacher(string name, string dept, string subject, double salary) {
        this->name = name;
        this->dept = dept;
        this->subject = subject;
        this->salary = salary;
    }

    // Copy constructor
    Teacher(Teacher &obj) {
        cout << "I am the Copy Constructor" << endl;
        this->name = obj.name;
        this->dept = obj.dept;
        this->subject = obj.subject;
        this->salary = obj.salary;
    }

    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "Subject: " << subject << endl;
    }
};
```
## 🧪 Example: Using the Copy Constructor
```cpp
int main() {
    Teacher t1("Aswin", "CS", "C++", 25000);
    Teacher t2(t1); // Invokes copy constructor
    t2.getInfo();
    return 0;
}
```
