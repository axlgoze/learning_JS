// Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresa el 9999 (no sumar dicho valor, solamente indica que ha finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero. 

let sum=0;
let number;

do {
    number=parseInt(prompt("Enter a number between 0 - 9999"));
    sum=sum+number;
} while (number!= 9999);

if(sum>0){
    document.write("The sum is bigger than 0");
}else{
    if(sum<0){
        document.write("The sum is lower than 0")
    }else{
        document.write("The sum is equal to 0");
    }
}
document.write("<br>");
document.write("The total is: "+sum);