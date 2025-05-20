// Ingresar una oración y mostrar un mensaje si la misma comienza con el carácter '-'.
// Otro mensaje si comienzo con la palabra 'hora'.

let input = prompt("Enter a sentence");
let input2 = prompt("Enter another sentence");

let pattern = new RegExp('^-');
let pattern2 = new RegExp('^hora');

pattern.test(input) ? console.log("starts with '-'") : console.log('error');
pattern2.test(input2) ? console.log("contains 'hora' word" ) : console.log('error');

