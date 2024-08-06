// Desarrollar un programa que permita ingresar un vector de 8 elementos, e informe:
// El valor acumulado de todos los elementos del vector.
// El valor acumulado de los elementos del vector que sean mayores a 36.
// Cantidad de valores mayores a 50.

let vector = new Array(8);
let input,f;
let sum1=0;
let sum2=0;
let sum3=0;
console.log(vector.length)

for(f=0;f<vector.length;f++){
    input = parseInt(prompt("Enter a number"));
    vector[f]=input;
    sum1=sum1+input;
    if(input>=36){
        sum2=sum2+input;
    }
    if(input>=50){
        sum3++;
    }
}

document.write("The total is: "+sum1);
document.write("<br>");
document.write("The total sum of numbers bigger than 36 is: "+sum2);
document.write("<br>");
document.write("The total of numbers bigger than 50 is: "+sum3);