
// Anonymous Function : A function without a name is called an anonymous function.
// Anonymous functions are often used as arguments to other functions, 
// such as in callbacks or event handlers.

// Example of an anonymous function used as a callback in setTimeout

let x = function() {
    console.log("This is an anonymous function.");
}

x(); // This will call the anonymous function and print the message to the console.

// immediately invoked function expression (IIFE) is a common use case for anonymous functions.
(function() {
    console.log("This is an immediately invoked function expression (IIFE).");
})(); // This will immediately execute the function and print the message to the console.

// Anonymous function used as a callback in an event listener
