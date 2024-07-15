//Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. 

let height,x,sum;
x=0;
sum=0;
let average;

while(x<5){
    height=parseInt(prompt("Enter your heights"));
    sum=sum+height;
    average=sum/5;
    x=x+1;
}
document.write("The average between the height is: "+average);