//Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. 

let high,x,sum;
x=0;
sum=0;
let average;
while(x<5){
    high=parseInt(prompt("Enter your highs"));
    sum=sum+high;
    average=sum/5;
    x=x+1;
}
document.write("The average between the high is: "+average);