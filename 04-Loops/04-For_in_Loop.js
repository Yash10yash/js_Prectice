let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
// The for-in loop is used to iterate over the properties of an object.
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}