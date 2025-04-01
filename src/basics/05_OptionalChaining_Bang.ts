// Declare an array of objects, where each object has a "name" property.
const arr = [{ name: "rishi" }, { name: "sam" }];

// Use the `.pop()` method to remove the last element from the array
// and access its "name" property using optional chaining (`?.`).
let element = arr.pop()?.name;

// Log the value of "element" to the console.
// If `pop()` successfully removes an element, `element` will store its "name".
// If the array was empty before calling `pop()`, `element` will be `undefined`.
console.log(element); // Output: "sam" (since "sam" was the last element in the array)

/*
?.name ensures that if pop() returns undefined (in case the array is empty)
, it won't throw an error Instead, element will be assigned undefined.

console.log(element) prints "sam", which was the last element in the array before p
*/
let el = arr.pop()!.name;
console.log(el);

/*
Explanation of ! (Non-Null Assertion Operator)
The ! (non-null assertion operator) tells TypeScript that arr.pop() will never return undefined.

This means you're forcing TypeScript to assume that arr.pop() always returns an object 
(even if the array is empty).

Usually a bad practice to do so 
*/