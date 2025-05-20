// Confeccionar una función que obtenga y retorne el mayor valor de una lista de enteros
// que le pasamos como parámetros.

function reMax(){
    let max;
    let newArr = new Array();
    for (let j = 0; j < arguments.length; j++) {
        newArr[j] = arguments[j];
        newArr.sort((a,b)=>b-a);
        max = newArr.slice(0,1);
    }
    return max;
}

console.log(reMax(1,2,645,8678,1,34534,999999));

// let ve = [1,543,7,88,213,0,444,9]
// ve.sort((a,b)=>b-a);
// let sli=ve.slice(0,1)
// console.log(ve);
// console.log(sli);


// site solution
// function mayor() {
//     let may = arguments[0];
//     for (let f = 1; f < arguments.length; f++) {
//         if (arguments[f] > may) {
//             may = arguments[f];
//         }
//     }
//     return may;
// }