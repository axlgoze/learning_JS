// Ingresar el sueldo bruto de un trabajador.
//  Si supera a 10000 aplicar un descuento del 10%, en caso contrario el descuento es del 5%.

let input=parseInt(prompt("Enter salary"));
let max = 10000;

// if(input>max){
//     input = input - (input*.10)
// }else{
//     input = input - (input*.5)
// }

input>max ? input = input - (input*.10) : input = input - (input*.5);

console.log(input);