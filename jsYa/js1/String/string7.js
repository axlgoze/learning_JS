// Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.

// Por ejemplo si cargo:
// 	La mañana está fría.
// Debe aparecer:
// La
// mañana
// está
// fría.

let input=prompt("enter a phrase");
let result = (input) => {
    let words = input.replace(/ /g,"<br>");
    return words;
}

document.write(result(input));

