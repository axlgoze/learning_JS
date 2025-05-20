// Confeccionar una función que retorne una cadena con el día, mes y año actual.
// Utilizar una plantilla de cadena de caracteres para generarla.

let day = prompt("enter the day: ");
let month = prompt("enter the month: ");
let year = prompt("enter the year: ");

let text = `Day: ${day}, Month: ${month}, Year: ${year}`;

let section = document.getElementById("es6");
let span = document.createElement('span');

section.appendChild(span);

span.innerHTML = text
