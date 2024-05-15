let num1, num2, num3, num4, sum, prod;

num1 = parseInt(prompt("Ingresa un número: "));
num2 = parseInt(prompt("Ingresa otro número: "));
num3 = parseInt(prompt("Ingresa otro número: "));
num4 = parseInt(prompt("Ingresa otro número: "));

sum = num1+num2+num3+num4;
prod = num1*num2*num3*num4;

document.write("La suma de los números es: " + sum);
document.write('<br>');
document.write("EL producto de los números es: " + prod);