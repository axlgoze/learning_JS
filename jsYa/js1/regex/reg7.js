// Solicitar el ingreso de la coordenada de un punto. El formato a ingresar por teclado es:

// (999,999)

// Los números pueden tener entre 1 y 3 dígitos.
let input = prompt("Enter a sentence");

let pattern = new RegExp('\([0-9]{1,3}\,[0-9]{1,3}\)');
// let pattern = /\([0-9]{1,3}\,[0-9]{1,3}\)/;

pattern.test(input) ? console.log("The sentence is ok") : console.log('The sentence is not ok');