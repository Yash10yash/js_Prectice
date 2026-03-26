// function return funtion 
function sayHello() {
    return ()=> {
        console.log("Hello Yash");
    }
}
// Question is... how can we execute is
// Option 1.
let guessValue = sayHello();
console.log(guessValue);  // Output is : [Fuction (anonymous)] // Not sutable

// Option 2.
guessValue();// This is the right way



const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p;
        }
        return twoFun;
    }
    return oneFun;
}

console.log(higherOrder(5)(10)(15));

let arr = [1, 2, 3, 4, 5];

const sumArray = arr => {
    let total =0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}
console.log(sumArray(arr));

function OneMoreHello() {
    console.log("Hello YASH! ");
}
setTimeout(OneMoreHello,1000);
