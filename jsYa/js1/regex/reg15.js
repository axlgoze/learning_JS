// Confeccionar una er que valide el ingreso del nombre de un día de la semana,
//  un espacio y un número de 1 o 2 dígitos.

let input = prompt("Enter your day");
// complete secuence using ()
let pattern = /(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s\d{1,2}/;

// characters using []

pattern.test(input) ? console.log('ok') : console.log('not ok');
