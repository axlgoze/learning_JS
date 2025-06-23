// Validar si un string contiene 4 números de 3 dígitos cada uno separados por coma.

let input = prompt("Enter a sentence");

let pattern = /^\d{3}\,\d{3}\,\d{3}\,\d{3}$/


pattern.test(input) ? console.log('ok') : console.log('not ok');