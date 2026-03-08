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
console.log(sumArray(arr));