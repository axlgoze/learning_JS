// Validar si una palabra comienza con los caracteres va o ba

let input = prompt("Enter your code");

let pattern = /^[va|ba]/;


pattern.test(input) ? console.log('ok') : console.log('not ok');