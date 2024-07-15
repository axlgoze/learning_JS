// Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
// Emplear el operador "%" en la condición de la estructura condicional.

// 	if (valor%2==0)

// El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1. 


let number,x,y,z;
x=0;
y=0;
z=0;

while(x<5){
    number=parseInt(prompt("Enter a number"));
    x++;
    if(number%2==0){
        y++;
    }else{
        z++;
    }
}
document.write("The number of even numbers is: "+y);
document.write("<br>")
document.write("The number of odd numbers is: "+z);