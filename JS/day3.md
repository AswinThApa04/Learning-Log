## Day 3: August 28, 2025 - Introduction to Classes in JavaScript

Started the lecture on Promises, which began with an introduction to Classes. This felt more complex than classes and objects in C++, but I've jotted down my initial understanding.

### What is a Class in JavaScript?

In JavaScript, a **class** is a blueprint for creating objects. It bundles data (properties) and functions that operate on that data (methods) into a single, reusable template.

**Example: Defining and Using a `Rectangle` Class**

```javascript
// 1. The class definition acts as a blueprint.
class Rectangle {
    // 2. The constructor is a special method that runs when a new object is created.
    //    It initializes the object's properties.
    constructor(width, height, color) {
        // 3. The 'this' keyword refers to the specific object instance being created.
        //    It assigns the passed-in arguments to the new object's properties.
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // 4. Methods are functions that belong to the class.
    //    They can access the object's properties using 'this'.
    area() {
        return this.width * this.height;
    }

    paint() {
        // Template literals make this clean!
        console.log(`Painting the rectangle with ${this.color}`);
    }
}

// 5. The 'new' keyword creates an "instance" (a real object) from the class blueprint.
const rect = new Rectangle(2, 4, "red");

// 6. We can now call the methods on our new object.
const area = rect.area();
console.log(area); // Output: 8
rect.paint();      // Output: Painting the rectangle with red
```
---
## Key Question: class vs. Plain {} Objects
I was trying to understand the difference between the objects created by classes and the plain objects (`let user = {}`) we learned about before. My initial thought was that plain objects are just for properties, while classes can also have functions.

This is a great intuition, but let's refine it slightly. Plain objects can have functions, but classes provide a much better structure for doing so.
```javascript
const area = rect.area();
console.log(area); // Output: 8
rect.paint();      // Output: Painting the rectangle with red
```
### A Plain Object with a Function:
```javascript
const plainRect = {
    width: 2,
    height: 4,
    color: "red",
    // You can attach functions to plain objects!
    area: function() {
        return this.width * this.height;
    }
};
console.log(plainRect.area()); // This works! Output: 8
```
So, if plain objects can have functions, why use a `class`?

Reusability (The Blueprint): With the `Rectangle` class, we can easily create many different rectangle objects, and they will all reliably have the same structure and methods. With plain objects, we'd have to copy and paste the entire structure for every new rectangle.

Inheritance: As I correctly noted, classes support core Object-Oriented Programming (OOP) principles like inheritance. We can create a `Square` class that `extends` the `Rectangle` class, inheriting its methods. This isn't possible with plain objects.

Clearer Intent: Using the `class` keyword makes it very clear to other developers that you are creating a specific "type" of object that is meant to be reused.

---

### Understanding the `new` Keyword (Analogy)
Think of it like building a house:

- Blueprint (`class Rectangle`) → Just a plan, not a real object.

- Construction crew (`new`) → Takes the plan and builds a real object.

- The finished house (`rect`) → The usable object in memory.

#### Step-by-step: what `new` does behind the scenes
`const rect = new Rectangle(2, 4, "red");`
- Creates a New, Empty Object
→ `const rect = {};`

- Sets the this keyword
→ Inside the constructor, this now points to that new object.

- Calls the constructor
→ Runs with given arguments and assigns properties:

`this.width = width; → rect.width = 2;`
`this.height = height; → rect.height = 4;`
`this.color = color; → rect.color = "red";`

- Returns the New Object
→ The fully initialized object is returned and stored in `rect`.

---



