let a = 10;
// there are 0 to 9 iterations in this loop, because the loop starts with i = 0 and 
// continues as long as i is less than a (10).
console.log("For Loop:");
for (let i = 0; i < a; i++) {
    console.log("Iteration:", i);
}    
console.log("Sum of numbers from 1 to 10:");
let sum = 0;    
for (let i = 1; i <= a; i++) {
    sum += i;
}
console.log("Sum:", sum);