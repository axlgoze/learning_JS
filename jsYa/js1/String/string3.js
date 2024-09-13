// Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la posición, de lo contrario una leyenda que indique que no está.

let phrase = prompt('Enter a phrase');
let key = prompt("Enter a Key to find");
let keyPosition = phrase.indexOf(key);

if(keyPosition !==-1){
    document.write(keyPosition);
}