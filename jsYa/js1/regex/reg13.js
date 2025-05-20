// Validar el ingreso de un típo y nro de factura. Para que sea correcto
// el primer carácter debe ser a,b o c y el nro debe tener uno o más dígitos.

let input = prompt("Enter your code");

let pattern = /^[a|b|c]\d+$/;


pattern.test(input) ? console.log('ok') : console.log('not ok');