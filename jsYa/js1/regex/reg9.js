// Ingresar un valor numérico entero
// que podemos opcionalmente antecederle alguno de los caracteres: + o -.

let input = prompt("Enter a number");

let pattern = new RegExp('^[\+\-]?[1-9]+$');

pattern.test(input) ? console.log('ok') : console.log('not ok');