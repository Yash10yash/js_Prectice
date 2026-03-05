let emp = {
    name: "John Doe",
    age: 30,
    designation: "Software Engineer",
}
// Methods of an object are functions that are defined as properties of the object.
let keys = Object.keys(emp); // This will return an array of the keys of the emp object
console.log("Keys of emp object:", keys);

//Values of an object can be accessed using the Object.values() method, which returns an array of the values of the object's properties.
let values = Object.values(emp);    
console.log("Values of emp object:", values);

// Entries of an object can be accessed using the Object.entries() method, which returns an array of key-value pairs of the object's properties.
let entries = Object.entries(emp);    
console.log("Entries of emp object:", entries);

// FREEZING AN OBJECT
// The Object.freeze() method freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed.
Object.freeze(emp);
emp.name = "Jane Doe"; // This will not change the name property of the emp object
console.log("After freezing the emp object:", emp);

// SEALING AN OBJECT
// The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. However, it allows existing properties to be modified.
Object.seal(emp);
emp.age = 35; // This will change the age property of the emp object
console.log("After sealing the emp object:", emp);

// assign method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
let o = Object.assign({x: 9}, emp); // This will create a new object o with the same properties and values as the emp object
console.log("New object created using Object.assign():", o);