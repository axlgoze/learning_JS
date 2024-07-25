// Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la tabla de multiplicar del mismo (los primeros 12 términos)
// Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.

let number=parseInt(prompt("Enter a number:"));
// for(let f=1;f<=12;f++){
//     let m=f*number;
//     document.write(m+" ");
// }
let result = number;
for(let f=1; f<=12; f++){
    document.write(result+" ");
    result = result + number;
}