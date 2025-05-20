// Ingresar una palabra por teclado y validar que tenga al menos una vocal.

let input = prompt("Enter a word");
// one or more coincidence +
let pattern = /[aeiuoAEIOUáéíóú]+/;

pattern.test(input) ? console.log('it has a vocal') : console.log('no vocals here');
