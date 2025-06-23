// Confeccionar una función que reciba un conjunto variable de enteros
//  y nos retorne su suma:

// function sum(x,y){
//     let result = arguments[0] + arguments[1];
//     return result
// }

// console.log(sum(49,4));


function sumArgs(){
let s=0;
for(let j=0;j<arguments.length;j++){
    s=s+arguments[j];
}
return s;
}

console.log('sum: '+sumArgs(1,2,3,4));
console.log('sum: '+sumArgs(100,200,30,4));
console.log('sum: '+sumArgs(100,200,30,4,5,4,78,23,90,777,1));
