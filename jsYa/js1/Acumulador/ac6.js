// Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
// Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

let list1, list2, sum,x,number;

x=0;
sum=0;

while(x<3){
    number=parseInt(prompt("Enter three numbers of list 1"));
    sum=sum+number;
    list1=sum;
    x++;
}

if(list1!=NaN){
    x=0;
    sum=0;
    while(x<3){
        number=parseInt(prompt("Enter three numbers of list 2"));
        sum=sum+number;
        list2=sum;
        x++;
    }
}

if(list1==list2){
    document.write("Lists are equal");
}else{
    if(list1<list2){
        document.write("List 2 is upper than list 1");
        document.write("<br>");
    }else{
        document.write("List 1 is upper than list 2");
        document.write("<br>");
    }
}


document.write("The sum of list1 is: "+list1);
document.write("<br>");
document.write("The sum of list2 is: "+list2);