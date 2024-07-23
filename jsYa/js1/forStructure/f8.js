// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// a) La cantidad de valores negativos ingresados.
// b) La cantidad de valores positivos ingresados.
// c) La cantidad de múltiplos de 15.
// d) El valor acumulado de los números ingresados que son pares.

let f,negatives,positives,multiple,sum,input, multipleNumbers;
f=0;
negatives=0;
positives=0;
multiple=15;
multipleNumbers=0;
sum=0;

for(f=0;f<10;f++){
    input=parseInt(prompt("Enter a number"));
    sum = sum+input;
    if(input%multiple ===0){
        multipleNumbers++;
    }
    if(input<0){
        negatives++;
    }else{
        if(input>0){
            positives++;
        }
    }
}

document.write("Numbers multiple of 15: "+multipleNumbers);
document.write("<br>");
document.write("The number of positive data is: "+positives);
document.write("<br>");
document.write("The number of negative data is:"+negatives);
document.write("<br>");
document.write("The Total is: " + sum);