// Ingresar una palabra y mostrar un mensaje si la misma finaliza con el string 'ón'

let input = prompt("Enter a sentence");

// let pattern = new RegExp('ón$');
let pattern = /ón$/;

pattern.test(input) ? console.log("The sentence ends with 'ón'") : console.log('error');

