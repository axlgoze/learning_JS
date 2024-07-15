//Mostrar los múltiplos de 10 hasta el valor 1500. Debe aparecer en pantalla 10 - 20 -30 etc.

let x,y,z;
x=0;
z=0;
y=1;
while(x<1500){
    z=z+10;
    document.write(y+".- "+z);
    document.write("<br>");
    y=y+1;
    x++;
}