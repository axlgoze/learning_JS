// Ingrese una cadena de cinco caracteres que comience y finalice con a


let input = prompt("Enter a word of 5 characters that begins with a and ends with a");

// let pattern = /^a...a$/;
let pattern = /^a.{3}a$/;

pattern.test(input) ? console.log('ok') : console.log('not ok');