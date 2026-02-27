let score = "yash"

let valueInNumber = Number(score);
console.log(valueInNumber); // NaN

let valueInString = String(score);
console.log(valueInString); // "Yash"   

// "33" => 33
// "33abc" => NaN
// "abc33" => NaN
// "33.33" => 33.33
// "   33   " => 33
// true => 1
// false => 0S

let isLoggedIn = "yash"
let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue); // true

// 1 => true
// 0 => false
// "" => false
// "yash" => true

let someNumber = 14;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // "14"  
console.log(stringNumber)