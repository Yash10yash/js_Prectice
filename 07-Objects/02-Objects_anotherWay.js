// Another way to create an object in JavaScript is by using the Object constructor.
// The Object constructor creates an empty object, and we can add properties and methods to it.
  
 let emp = new Object();
 emp.name = "Yash Gupta";
 emp.age = 22;
 emp.designation = "Software Engineer";
 emp.college = "TIT&S";

console.log("Employee Details:");
console.log("Name:", emp.name);
console.log("Age:", emp.age);
console.log("Designation:", emp.designation);
console.log("College:", emp.college);


// creating an object using a fuction
function Person(name, age, designation) {
    this.name = name;
    this.age = age;
    this.designation = designation;
}

const a = new Person("Yash Gupta", 22, "Software Engineer");
console.log(a); // This will print the object created using the constructor function


console.log("Using Constructor Function:");
console.log("Name:", a.name);
console.log("Age:", a.age);
console.log("Designation:", a.designation);