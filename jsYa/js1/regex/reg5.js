// Ingresar una palabra y luego mostrar un mensaje si contiene una vocal en alguna parte de la palabra.

let pattern = /[aeiuoAEIOUáéíóú]/;

let input = prompt("Enter a sentence:");

result = pattern.test(input);

result ? alert("Contains a vocal") : alert('Does not contains a vocal');