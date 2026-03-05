// Push and Pop methods are used to add and remove elements from the end of an array, respectively.
let arr = [10, 20, 30];
console.log("Original array:", arr);

// Push method
arr.push(40);
console.log("After push(40):", arr); // Output: [10, 20, 30, 40]

// Pop method
arr.pop();
console.log("After pop():", arr); // Output: [10, 20, 30]

// Shift and Unshift methods are used to add and remove elements from the beginning of an array, respectively.
// Shift method
arr.shift();
console.log("After shift():", arr); // Output: [20, 30]
// Unshift method
arr.unshift(5);
console.log("After unshift(5):", arr); // Output: [5, 20, 30]  

//Concatenate method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = arr1.concat(arr2);
console.log("Merged array:", mergedArr); // Output: [1, 2, 3, 4, 5, 6]      


// Join method is used to join all elements of an array into a string. You can specify a separator to separate the elements in the resulting string.
let arr3 = ["Yash", "John", "Alice"];

let joinedStr = arr3.join(" Gupta, ");
console.log("Joined string:", joinedStr); // Output: "Yash Gupta, John Gupta, Alice"
// isme last bale par " Gupta" nahi aayega kyunki wo last element hai. or ye method array ke elements ke beech hi vass add karta hai na ki end me. agar hum separator nahi denge to by default comma (,) use hota hai.


// Reverse method is used to reverse the order of the elements in an array. It modifies the original array.
let arr4 = [1, 2, 3, 4, 5];
arr4.reverse();
console.log("Reversed array:", arr4); // Output: [5, 4, 3, 2, 1]

// indexOf method is used to find the index of the first occurrence of a specified element in an array. It returns -1 if the element is not found.  
let arr5 = [10, 20, 30, 40, 50];
let index = arr5.indexOf(30);
console.log("Index of 30:", index); // Output: 2


// includes method is used to check if an array contains a specified element. It returns true if the element is found, and false otherwise.
let arr6 = [10, 20, 30, 40, 50];
let isPresent = arr6.includes(20);
console.log("Is 20 present in the array?", isPresent); // Output: true


// slice method is used to extract a portion of an array and return it as a new array. It does not modify the original array.
let arr7 = [10, 20, 30, 40, 50];
let slicedArr = arr7.slice(1, 4);// access element from index 1 to index 3 (4-1) because end index is exclusive
console.log("Sliced array:", slicedArr); // Output: [20, 30, 40]