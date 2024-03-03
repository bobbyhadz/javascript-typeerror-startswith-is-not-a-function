// TypeError: startsWith is not a function in JavaScript

// EXAMPLE 1 - Only call the `startsWith` method on strings

const str = 123;

const result = str.toString().startsWith('1');

console.log(result); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is of type `string` before calling `startsWith()`

// const str = null;

// const result =
//   typeof str === 'string' ? str.startsWith('a') : false;

// console.log(result); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement

// const str = null;

// let result = false;

// if (typeof str === 'string') {
//   result = str.startsWith('a');
// }

// console.log(result); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Accessing a string property on an object before calling `startsWith()`

// // ✅ with objects
// const obj = {
//   name: 'bobby',
// };

// const result1 = obj.name.startsWith('bo');
// console.log(result1); // 👉️ true

// // -----------------------------------------
// // ✅ with arrays

// const arr = ['bobby', 'hadz', 'com'];

// const result2 = arr[0].startsWith('bo');
// console.log(result2); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if all strings in an array start with a specific substring

// const arr = ['ab', 'ac', 'ad'];

// const result = arr.every(str => str.startsWith('a'));

// console.log(result); // 👉️ true
