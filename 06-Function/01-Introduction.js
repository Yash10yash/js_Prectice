//Functions are the building blocks of JavaScript. A function is a reusable block of code that performs a specific task. Functions can take parameters, perform operations, and return values.

// Simple function without parameters
function ab(){
    console.log("This is a function.");
}
ab(); // Output: This is a function.

// fuction with parameters, type of parameter is number.
function subtract(a,b) {
    console.log("The difference is: " + (a - b));
}
subtract(10, 5); // Output: The difference is: 5

// function with parameters, type of parameter is string.
function greet(name) {  
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!


// function with parameters, and return value.
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8