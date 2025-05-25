# 05 - Inheritance and Polymorphism

---

## 🧬 Inheritance

Inheritance allows a class (child/derived) to **acquire properties and methods** from another class (parent/base).

### ✅ Syntax: Non-Parameterized Inheritance

```cpp
class Person {
public:
    string name;
    int age;

    Person() {
        cout << "Hi, I'm parent constructor\n";
    }
    ~Person() {
        cout << "Hi, I'm parent destructor\n";
    }
};

class Student : public Person {
public:
    int rollno;

    Student() {
        cout << "Hi, I'm student constructor\n";
    }

    ~Student() {
        cout << "Hi, I'm student destructor\n";
    }

    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Roll No: " << rollno << endl;
    }
};
```
### ✅ Parameterized Inheritance
```cpp
class Person {
public:
    string name;
    int age;

    Person(string name, int age) {
        this->name = name;
        this->age = age;
    }

    ~Person() {
        cout << "Hi, I'm parent destructor\n";
    }
};

class Student : public Person {
public:
    int rollno;

    Student(string name, int age, int rollno) : Person(name, age) {
        this->rollno = rollno;
    }

    ~Student() {
        cout << "Hi, I'm student destructor\n";
    }

    void getInfo() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Roll No: " << rollno << endl;
    }
};
```
## 📚 Types of Inheritance
### 1. Single Inheritance
```cpp
class Person {
public: string name;
};

class Student : public Person {
public: int rollno;
};
```
### 2. Multilevel Inheritance
```cpp
class Person {
public: string name;
};

class Student : public Person {
public: int rollno;
};

class GradStudent : public Student {
public: string researchArea;
};
```
### 3. Multiple Inheritance
```cpp
class Student {
public: string name;
};

class Teacher {
public: string subject;
};

class TA : public Student, public Teacher {
public: string researchArea;
};
```
### 4. Hierarchical Inheritance
```cpp
class Person {
public: string name;
};

class Student : public Person {
public: int rollno;
};

class Teacher : public Person {
public: string subject;
};
```
### 5. Hybrid Inheritance
- A combination of two or more types (e.g., multiple + multilevel).
- Can lead to the diamond problem, resolved using virtual inheritance.

## 🔄 Polymorphism
Polymorphism = "Many Forms"
It allows an object to behave differently based on context.

## 📌 Types of Polymorphism
### ✅ 1. Compile-time Polymorphism
### a) Function Overloading
It is an example of compile time polymorphism i.e it occurs when we are defining two or more functions with the same name in the same class but differ only through parameters
```cpp
class Print {
public:
    void show(int x) {
        cout << "int: " << x << endl;
    }
    void show(char ch) {
        cout << "char: " << ch << endl;
    }
};

int main() {
    Print p;
    p.show(101);
    p.show('h');
}
```
### b) Constructor Overloading
```cpp
class Teacher {
public:
    string name;
    Teacher() { name = "Default"; }
    Teacher(string n) { name = n; }
};
```
### ✅ 2. Runtime Polymorphism
### a) Function Overriding
parent and child function has same name but different implementation
```cpp
class Parent {
public:
    void getInfo() {
        cout << "parent class\n";
    }
};

class Child : public Parent {
public:
    void getInfo() {
        cout << "child class\n";
    }
};
```
### b) Virtual Function
it is a member function that you expect to be redefined in the derived classes. it is similar to function overriding
```cpp
class Parent {
public:
    void getInfo() {
        cout << "parent class\n";
    }

    virtual void hello() {
        cout << "hello from parent\n";
    }
};

class Child : public Parent {
public:
    void hello() {
        cout << "hello from child\n";
    }
};
```
### 🧠 Key Points about Virtual Functions:

- Defined using the virtual keyword in base class

- Expected to be overridden in derived classes

- Resolved at runtime (dynamic dispatch)
