// Ingresar una clave que no finalice en vocal.

// let pattern = new RegExp('ón$');

let input;
let pattern = /[aeiuoAEIOUáéíóú]$/;

do {
    input = prompt("Enter a sentence:");
    result = pattern.test(input);
    console.log(result);
    !result ? alert("Good Job") : alert('Ends with vocal. Try again');
} while (result);