Solving Assignments & String Manipulation

Today's learning was focused on applying concepts to solve specific problems, which led to a deeper understanding of string manipulation and asynchronous JavaScript.

---

### Assignment 1: Checking for Anagrams 

The first task was to write a function `isAnagram(str1, str2)` that returns `true` if two strings are anagrams of each other.

-   **Anagram Definition:** A word formed by rearranging the letters of another (e.g., "spar" and "rasp").

The core logic is that if two strings are anagrams, they are just different arrangements of the exact same letters. Therefore, if you sort the letters of both strings, the results should be identical.

#### Sorting a String in JavaScript

My initial attempt `str.sort()` failed because strings don't have a built-in sort method. The correct process involves three steps:

1.  **`.split('')`:** Convert the string into an array of its characters.
2.  **`.sort()`:** Sort the array alphabetically.
3.  **`.join('')`:** Join the elements of the array back into a single string.

#### Final Code
```javascript
function isAnagram(str1, str2) {
    // 1. Convert both strings to lowercase to handle case-insensitivity (e.g., "Listen" vs "silent").
    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();

    // 2. Split into an array, sort the array, and join back into a string.
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // 3. Compare the sorted strings.
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("spar", "rasp")); // true
console.log(isAnagram("hello", "world")); // false
```
---
### Key Methods & Concepts Learned
- `.split(delimiter)`: Splits a string into an array of substrings. The delimiter is the character at which to split. For example, str.split('a') on "sunam" results in ['sun', 'm'], as the 'a' is removed. Using an empty string '' as the delimiter splits every character.

- `.join(separator)`: Joins all elements of an array into a string. The original array is not changed.

- Mutation: I discovered an important distinction:

- `.sort()` is mutating; it changes the original array.

- `.join()` is non-mutating; it returns a new string without changing the original array.

- `.toLowerCase()`: Converts an entire string to lowercase, which is crucial for making accurate, case-insensitive comparisons.
---
### Assignment 2: Asynchronous Counter 
The second task was to create a simple counter that logs a new number to the console every second.

This was a great exercise in asynchronous programming, using setInterval.
```javascript
let counter = 1;

function printCounter() {
    // console.clear() helps keep the output clean by clearing the console each time.
    console.clear();
    console.log(counter);
    counter = counter + 1;
}

// setInterval calls the printCounter function every 1000 milliseconds (1 second).
setInterval(printCounter, 1000);
```
I learned that `setInterval` and `setTimeout` are closely related. The key difference is that `setTimeout` calls a function once after a delay, while setInterval calls a function repeatedly at a given interval.
