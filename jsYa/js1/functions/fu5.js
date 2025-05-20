// declare una función que reciba tres parámetros, el último de ellos es una función:

// function calcular(x,y,fu){
//     let result = fu(x,y);
//     return result;
// }

// let s1 = calcular(1,1,function(n1,n2){
//     return n1+n2;
// });

// console.log(s1);


// function sum(x,y){
//     return x+y;
// }

// function rest(x,y){
//     return x-y;
// }


// function multiply(x,y){
//     return x*y;
// }

// function operates(x,y,fu){
//     let result = fu(x,y);
//     return result;
// }

// console.log(operates(4,4,sum));
// console.log(operates(4,4,rest));
// console.log(operates(4,4423432,rest));
// console.log(operates(4,4423432,multiply));


function calcular(x,y,f){
    let fu = f(x,y);
    return fu;
}

function sum(x,y){
    return x+y;
}

let result = calcular(4,4,sum);

console.log(result);
