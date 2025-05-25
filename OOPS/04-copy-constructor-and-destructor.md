# 04 - Shallow Copy, Deep Copy & Destructor

---

## 🔹 Shallow Copy

A **shallow copy** copies all member values from one object to another, including pointers **by reference** — meaning both objects share the same memory address.

### ✅ Example:

```cpp
Teacher t1("Aswin", "CS", "C++", 25000);
Teacher t2(t1);  // shallow copy
```
This works fine until dynamic memory allocation comes into play.
### ⚠️ Problem with Shallow Copy
When you copy an object with dynamically allocated memory (like new), both objects end up pointing to the same memory, causing one object’s changes to affect the other.
```cpp
#include <iostream>
using namespace std;

class Student {
public:
    string name;
    double *cgpaPtr;

    Student(string name, double cgpa) {
        this->name = name;
        cgpaPtr = new double;
        *cgpaPtr = cgpa;
    }

    // Shallow Copy Constructor
    Student(Student &obj) {
        this->name = obj.name;
        this->cgpaPtr = obj.cgpaPtr;
    }

    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "CGPA: " << *cgpaPtr << endl;
    }
};

int main() {
    Student s1("Rahul", 8.9);
    s1.getInfo();

    Student s2(s1);  // shallow copy
    s2.name = "Aswin";
    *(s2.cgpaPtr) = 9.2;

    s1.getInfo();  // will print updated value (problem!)
    return 0;
}
```
### 🔸 Deep Copy
A deep copy creates a completely new memory allocation for the dynamically allocated variables. Each object manages its own memory safely.
### ✅ Modified Copy Constructor for Deep Copy:
```cpp
Student(Student &obj) {
    this->name = obj.name;
    cgpaPtr = new double;
    *cgpaPtr = *obj.cgpaPtr;
}
```
### 🔁 Full Deep Copy Example:
```cpp
#include <iostream>
using namespace std;

class Student {
public:
    string name;
    double *cgpaPtr;

    Student(string name, double cgpa) {
        this->name = name;
        cgpaPtr = new double;
        *cgpaPtr = cgpa;
    }

    // Deep Copy Constructor
    Student(Student &obj) {
        this->name = obj.name;
        cgpaPtr = new double;
        *cgpaPtr = *obj.cgpaPtr;
    }

    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "CGPA: " << *cgpaPtr << endl;
    }
};

int main() {
    Student s1("Rahul", 8.9);
    Student s2(s1);
    s2.name = "Aswin";
    *(s2.cgpaPtr) = 9.2;

    s1.getInfo();  // original object
    s2.getInfo();  // copied object
    return 0;
}
```
✅ Now both objects are completely independent.
### 🔻 Destructor
A Destructor is the opposite of a constructor. It’s used to deallocate memory and is called automatically when the object goes out of scope.
### ✅ Syntax:
```cpp
~Student() {
    cout << "Destructor called\n";
    delete cgpaPtr;  // to free heap memory
}
```
### ❗ Why Destructors Matter
- Automatically called at the end of program

- Essential when using new (heap allocation)

- Prevents memory leaks

- Especially important in large-scale applications

