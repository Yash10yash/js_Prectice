// Arrow fuction is a more concise way to write functions in JavaScript. 
// It uses the "=>" syntax and does not have its own "this" context, 
// making it useful for certain situations like callbacks and methods.


//1. One Parameter, and a single return statement
const square = (x) => x * x;

// 2. Multiple statements in fuctionn expression  

const sumOfTwoNumbers = (a, b) => {
    console.log('Adding ${a} and ${b}')
    return a + b;
}