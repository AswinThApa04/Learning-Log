# 06 - Abstraction and Static Keyword

---

## 🧊 Abstraction

**Abstraction** means hiding all **unnecessary internal details** and exposing only **essential features** to the user.

### ✅ Benefits:
- Reduces complexity
- Increases code readability
- Enhances security by limiting access

### 💡 How to Achieve Abstraction:
- Using **access modifiers** (`private`, `public`)
- Using **abstract classes and pure virtual functions**

---

## 🔲 Abstract Class

An **abstract class** is a class that contains at least one **pure virtual function**.

- Cannot be instantiated
- Designed to be **inherited**
- Used to define a **common interface**

### 🧱 Syntax:

```cpp
class Shape {  // Abstract class
    virtual void draw() = 0;  // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() {
        cout << "Drawing a circle" << endl;
    }
};

int main() {
    Circle c1;
    c1.draw();
    return 0;
}
```
Once a class contains a pure virtual function, it becomes an abstract class.\

## 🧷 Static Keyword
The static keyword can be used for:

- Variables (inside functions or classes)

- Objects (with limited scope but extended lifetime)

##  📌 Static Variable in Function
- Created and initialized only once

- Retains its value across multiple function calls

```cpp
void fun() {
    static int x = 0;
    cout << "x: " << x << endl;
    x++;
}

int main() {
    fun();  // x: 0
    fun();  // x: 1
    fun();  // x: 2
}
```
##  🏷️ Static Variable in Class
- Shared by all objects of the class

- Not tied to a specific instance
```cpp
class Test {
public:
    static int count;
    Test() { count++; }
};

int Test::count = 0;
```
##  🧱 Static Object
- A static object is destroyed only at the end of the program

- Its destructor is called last, after main() exits

```cpp
class ABC {
public:
    ABC() {
        cout << "Constructor\n";
    }
    ~ABC() {
        cout << "Destructor\n";
    }
};

int main() {
    if (true) {
        static ABC obj;  // Created once, destroyed last
    }
    cout << "End of main\n";
    return 0;
}
```

