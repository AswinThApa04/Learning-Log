## `map()` & `filter()` in JavaScript

---

### **The `map()` Function**

#### Goal  
Transform each value in an array and return a new array.

#### Traditional approach
```js
const input=[1,2,3,4,5];
const newArray=[];
for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2);
}
console.log(newArray);
```
#### Using `.map()` — cleaner & functional
```js
const input=[1,2,3,4,5];

function transform(i){
  return i * 2;
}

const ans = input.map(transform);
console.log(ans);
```
Even cleaner with arrow function
```js
const input=[1,2,3,4,5]

const ans=input.map((i)=>{
	return i*2
});
console.log(ans)
```
---

### The `filter()` Function
#### Goal

Return only the elements that satisfy a condition.

#### Traditional method
```js
const arr=[1,2,3,4,5];
const newArr=[];
for(let i=0;i<arr.length;i++){
  if(arr[i] % 2 === 0){
    newArr.push(arr[i]);
  }
}
console.log(newArr);
```
#### Using `.filter()`
```js
const arr=[1,2,3,4,5];

function filterLogic(n){
  return n % 2 === 0; 
}

const ans = arr.filter(filterLogic);
console.log(ans);
```
Arrow function version
```js
const arr=[1,2,3,4,5]
const ans=arr.filter((n)=>{
	if(n%2==0){
		return true
	}else{
			return false
		}
	});
console.log(ans)
```
#### Another Example — Filtering names starting with "a"
```js
const name=["aswin","raman","pawan","alex"]
const ans=name.filter((n)=>{
	if(n.startsWith("a")){
		return true
	}else{
			return false
		}
	});
console.log(ans)
```
or we could just do
```js
const name=["aswin","raman","pawan","alex"];

const ans = name.filter(n => n.startsWith("a"));
console.log(ans);
```
---

### Key Takeaways
| Concept                   | Description                                 |
| ------------------------- | ------------------------------------------- |
| `map()`                   | Transforms each element → returns new array |
| `filter()`                | Keeps only values that satisfy condition    |
| Both are **non-mutating** | They do **not change original array**       |
| Arrow functions           | Shorter, cleaner callback syntax            |

