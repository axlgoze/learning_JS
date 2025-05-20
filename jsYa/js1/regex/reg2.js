// Controlar si la palabra ingresada comienza con el primer carácter alfabético ya sea en mayúsculas o en minúsculas

let input = prompt("Enter a word");

let pattern = /^[a-zA-Z]/;

pattern.test(input) ? console.log('The word contains capital or lower case letter at the beginning') : console.log('error');
