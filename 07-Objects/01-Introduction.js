// An object is an entity (poroperties and mathods) with a certain state and behavior. 
// Obects can contain many values.
// object values are written as key: value pairs (Key and value separated by a colon :)

// Creating an object using object literal syntax

const car = {
    company: "Maruti Suzuki",
    year: 2020,
    color: "Red",
    owner: "Yash Gupta", // these are attributes 
    start: function( a) {// these are behaviors or methods
       if(a==true) {
       return "Car is starting...";
       }
       else {
        return "Car is not starting.";
       }
    },
}

 // calling the method of the object
console.log(car.start(true));
console.log(car.company); // accessing the property of the object
console.log(car.year);
console.log(car.color);
console.log(car.owner);

// We can also add new properties and methods to an existing object.
car.model = "Swift Dzire"; // adding a new property to the car object
car.stop = function() { // adding a new method to the car object
    return "Car is stopping...";
}
console.log(car);