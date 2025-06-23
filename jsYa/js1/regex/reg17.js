// Elaborar una expresión regular que permita validar si se ingresó correctamente un valor
//  entero o real y que eventualmente lleve el caracter + o - al principio.
//  Validar que si se ingresa la coma debe ingresarse la parte real


let input = prompt("Enter a number");

let pattern = /^[+-]\d+(,?\d+)$/;


pattern.test(input) ? console.log('ok') : console.log('not ok');