// Methods of Id

let a = document.getElementById("one");

// Methods of DOM
//1. InnerHTML
console.log(a.innerHTML); // Show inner HTML of the element with id "one";

//2. InnerText
console.log(a.innerText); // Show inner text of the element with id "one";

// Method of Class

let b = document.getElementsByClassName("tech"); // get all the elements with class "tech";

 // if you want to access the first element with class "tech"

let c = document.getElementsByClassName("tech")[0]; // get the first element with class "tech";
console.log(c.innerText); // Show inner text of the first element with class "tech";
c.innerText = "Node.js"; // Change the inner text of the first element with class "tech" to "Node.js";
console.log(c.innerText); // Show the updated inner text of the first element with class "tech";

let d = document.getElementsByClassName("h4");
d[1].innerText = "This is a heading"; // Change the inner text of the first element with class "h4" to "This is a heading";
console.log(d[1].innerText); // Show the updated inner text of the first element with class "h4";

// Query Selector
let e = document.querySelector("#one"); // get the first element with id "one";
console.log(e.innerText); // Show inner text of the first element with id "one";

let f = document.querySelector(".tech"); // get the first element with class "tech";
console.log(f.innerText); // Show inner text of the first element with class "tech";

let g = document.querySelector("h2"); // get the first h2 element;


let var2 = document.querySelector(".classs");
var2.classList = "hello helo hola"; // Change the class of the first element with class "classs" to "hello helo hola";
var2.setAttribute("class", "hello helo hola"); // Change the class of the first element with class "classs" to "hello helo hola";
console.log(var2); // Show the updated class of the first element with class "classs";