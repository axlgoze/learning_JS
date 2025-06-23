// Validar que se ingrese un número de 3 dígitos enteros, el carácter punto y 2 dígitos decimales.

let input = prompt("Enter a sentence");

let pattern = /^[0-9]{3}\.[0-9]{2}$/;

pattern.test(input) ? console.log("The sentence is ok'") : console.log('The sentence is not ok');
