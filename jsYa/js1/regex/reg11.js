// Ingresar una oración y mostrar un mensaje si tiene al menos una palabra de 4 caracteres.

let input = prompt("Enter a sentence");

// let pattern = new RegExp('^\d{4}$');
// let pattern = /^\d{4}$/
let pattern = /\s?\w{4}\s?/

pattern.test(input) ? console.log('ok') : console.log('not ok');