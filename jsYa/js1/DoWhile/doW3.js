// Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino')
// Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:

// a)	Cantidad total de personas censadas.
// b)	Cantidad de varones.
// c)	Cantidad de mujeres.
// d)	Cantidad de varones cuya edad varía entre 16 y 65 años.


let documentNumber, age, sex;
let sum=0;
let males=0;
let females=0;
let malesInRange=0;

do{
    documentNumber=parseInt(prompt("Enter the number of the document (Enter 0 to exit)"));
    age=parseInt(prompt("Enter the age"));
    sex=prompt("Enter the sex ('m' or 'f')");

    sum++;

    if(sex=='m'){
        if(age>=16 && age<=65){
            malesInRange++;
            console.log(malesInRange)
        }
        males++;
    }else{
        if(sex=='f'){
            females++;
        }
    }
    document.write("<br>");
}while(documentNumber!=0);

document.write("The total of people interviewed: "+sum);
document.write("<br>");
document.write("<br>");
document.write("The total of males interviewed is: "+males);
document.write("<br>");
document.write("<br>");
document.write("The total of females interviewed is: "+females);
document.write("<br>");
document.write("<br>");
document.write("The total of males between 16 and 65 is: "+malesInRange);