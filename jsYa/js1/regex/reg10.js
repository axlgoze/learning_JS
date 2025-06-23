// Ingresar un valor numérico entero o real,
//  se debe validar que se ingrese al menos un número previo al operador punto
// que es opcional y finalizar con un número obligatoriamente.

let input = prompt("Enter a number");

let pattern = new RegExp('^[0-9]+\.?[1-9]+$');

pattern.test(input) ? console.log('ok') : console.log('not ok');
