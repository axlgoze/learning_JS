// Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de puntos a procesar

let cantidadPuntos, f, x,y,z, q1,q2,q3,q4;
q1=0;
q2=0;
q3=0;
q4=0;

cantidadPuntos=parseInt(prompt("Enter the numbers to be processed:"));

for(f=0;f<cantidadPuntos;f++){
    x=parseInt(prompt("Enter X coordinate:"));
    y=parseInt(prompt("Enter Y coordinate:"));
    if(x>0 && y>0){
        q1++;
    }else{
        if(x<0 && y>0){
            q2++;
        }else{
            if(x>0 && y<0){
                q3++;
            }else{
                if(x<0 && y<0){
                    q4++;
                }
            }
        }
    }
}

document.write("The number of coordinates in the first quadrant were: "+q1);
document.write("<br>");
document.write("The number of coordinates in the second quadrant were: "+q2);
document.write("<br>");
document.write("The number of coordinates in the third quadrant were: "+q3);
document.write("<br>");
document.write("The number of coordinates in the fourth quadrant were: "+q4);
document.write("<br>");