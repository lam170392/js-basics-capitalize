// test.js
const capitalize = require("./capitalize");

console.log(capitalize("hello") === "Hello"); // true
console.log(capitalize("javaScript") === "JavaScript"); // true
console.log(capitalize("") === ""); // true
console.log(capitalize(" ") === " "); // true
console.log(capitalize(" hello") === " hello"); // false
console.log(capitalize("123abc") === "123abc"); // false
console.log(capitalize("!abc") === "!abc"); // false
console.log(capitalize("a") === "A"); // true
