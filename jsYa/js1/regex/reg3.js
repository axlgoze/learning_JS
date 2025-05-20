// Ingresar una palabra y luego mostrar un mensaje si finaliza con vocal.


let input = prompt("Enter a sentence");

// let pattern = new RegExp('ón$');
let pattern = /[aeiuoAEIOUáéíóú]$/;

pattern.test(input) ? console.log("The sentence ends with a vocal") : console.log('error');