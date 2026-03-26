let arr = [4,5,6,3,8,7];
arr.forEach(function(element,index,arr){
  console.log(index, element,arr);
})

arr.forEach((element, index, arr)=>{
    console.log("arrow: ", index, element, arr);
})

const heros = ['ironman', 'spiderman', 'hulk', "thor", "superman", "batman"];

heros.forEach((el, idx)=>{
    heros[idx] = el[idx][0].toUpperCase()
 console.log(heros[idx]);
})