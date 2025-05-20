// Ingresar una hora con el formato hh:mm:ss,
//  plantear una expresión regular que valide si es correcta.


let input = prompt("Enter the hour in the format hh:mm:ss");

let pattern = /\d{2}\:\d{2}\:\d{2}/;
// let pattern = /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/;


pattern.test(input) ? console.log('ok') : console.log('not ok');
