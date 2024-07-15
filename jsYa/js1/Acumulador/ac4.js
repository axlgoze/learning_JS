//Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)

let x,y,z;
x=0;
z=0;
y=1;
while(x<20){
    z=z+5;
    document.write(y+".- "+z);
    document.write("<br>");
    y=y+1;
    x++;
}