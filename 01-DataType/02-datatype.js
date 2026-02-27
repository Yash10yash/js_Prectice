// alert("hello"); // not display in node it is only work in browser.
console.log("hello"); // it is work in both browser and node.

// Data types in JavaScript

let a = "String";  // String data type
let b = 123;    // Number data type
let c = null;       // Null data type
let d = undefined;   // Undefined data type


console.log("a is of type: " + typeof a); // Output: a is of type: string
console.log("b is of type: " + typeof b);   // Output: b is of type: number
console.log("c is of type: " + typeof c);   // Output: c is of type: object (this is a known quirk in JavaScript)
console.log("d is of type: " + typeof d);   // Output: d is of type: undefined  