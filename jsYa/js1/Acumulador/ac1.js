//Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.

let y,x,z;
let nota;
x=0;
y=0;
z=0;
while(x<10){
    nota=parseInt(prompt("Enter the student mark: "));
    if(nota>=7){
        y=y+1;
    }else{
        z=z+1;
    }
    x=x+1;
}
    document.write("Marks upper than 7: "+y);
    document.write("<br>");
    document.write("Marks less than 7: "+z);