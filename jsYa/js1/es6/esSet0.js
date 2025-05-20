// Almacenar en un Set los días feriados del año actual.
// Guardar cada fecha con formato de tipo string: "día/mes/año"
// Ingresar por teclado una fecha cualquiera y
// luego verificar si dicha fecha es un feriado.


const calendar = new Set(
    [
        "03/03/2025",
        "05/21/2025",
        "07/09/2025",
        "08/05/2025",
        "11/13/2025",
    ]
);

let input = prompt("Enter a date");

console.log(calendar.has(input));
