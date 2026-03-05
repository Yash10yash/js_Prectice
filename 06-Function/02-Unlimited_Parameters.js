// Use of Arguments keyword to access unlimited parameters passed to a function
function sumOfAllParameters() {
    let sum =0;
    for(let i=0; i<arguments.length; i++){
        sum +=arguments[i];
    }
    return sum;
}

let result = sumOfAllParameters(1, 2, 3, 4, 5);
console.log("The sum of all parameters is:", result);

// Output: The sum of all parameters is: 15