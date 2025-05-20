// Realizar la carga de dos valores enteros por teclado utilizando la función prompt.
//  Calcular la suma previo controlar que los dos valores sean de tipo numérico.


let nmbr1 = parseInt(prompt("Enter first number: "));
let nmbr2 = parseInt(prompt("Enter second number: "));
let sum=0;

if(isNaN(nmbr1)){
    console.log(' first is not a number');
}else{
    sum = sum + nmbr1;
    console.log(' first is a number');
}

if(isNaN(nmbr2)){
    console.log(' second is not a number');
}else{
    sum = sum + nmbr2;
    console.log(' second is a number');
}

console.log('sum: '+sum);