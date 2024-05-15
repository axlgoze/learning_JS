// solo operaciones, entradas y salidas = estructuras secuenciales

// Programa que carga dos números por teclado e imprime su suma y su producto:

let num1, num2, sum, prod;

num1 = parseInt(prompt("Ingresa un número: "));
num2 = parseInt(prompt("Ingresa otro número: "));

sum = num1 + num2;
prod = num1 * num2;

document.write("La suma de los números ingresados es: "+sum);
document.write('<br>');
document.write("El producto de los números ingresados es: "+prod);

