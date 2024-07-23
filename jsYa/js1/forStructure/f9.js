// Se cuenta con la siguiente información:
// Las edades de 5 estudiantes del turno mañana.
// Las edades de 6 estudiantes del turno tarde.
// Las edades de 11 estudiantes del turno noche.
// Las edades de cada estudiante deben ingresarse por teclado.
// a) Obtener el promedio de las edades de cada turno (tres promedios).
// b) Imprimir dichos promedios (promedio de cada turno).
// c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

let edad,f,sum,average;
sum=0;

for (f = 0; f < 5; f++) {
    edad = parseInt(prompt("Ingrese la edad del estudiante del turno mañana"));
    sum = sum+edad;
    average = sum/5;
}
document.write("<br>");
document.write("El promedio de las edades de los alumnos del turno de la mañana es: "+average);
for (f = 0; f < 6; f++) {
    edad = parseInt(prompt("Ingrese la edad del estudiante del turno tarde"));
    sum = sum+edad;
    average = sum/6;
}
document.write("<br>");
document.write("El promedio de las edades de los alumnos del turno de la tarde es: "+average);
for (f = 0; f < 11; f++) {
    edad = parseInt(prompt("Ingrese la edad del estudiante del turno noche"));
    sum = sum+edad;
    average = sum/11;
}
document.write("<br>");
document.write("El promedio de las edades de los alumnos del turno de la noche es: "+average);

