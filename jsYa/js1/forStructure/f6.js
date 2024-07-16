// Realizar un programa que lea los lados de 4 triángulos, e informar:
// a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
// b) Cantidad de triángulos de cada tipo.
// c) Tipo de triángulo del que hay menor cantidad.

let counter, type, side1, side2, side3, eCounter, iCounter, gCounter, i,e,s;
i=0;
e=0;
s=0;

for(counter=1;counter<=3;counter++){
    side1=parseInt(prompt("Enter the first side measurement"));
    side2=parseInt(prompt("Enter the second side measurement"));
    side3=parseInt(prompt("Enter the third side measurement"));
    if(side1 == side2 || side1==side3 || side2==side3){
        type="Isosceles";
        document.write("<br>");
        document.write("This triangle number "+counter+ " is: "+type);
        document.write("<br>");
        i++;
    }else{
        if(side1 == side2 && side2 == side3){
            type="Equilateral";
            document.write("<br>");
            document.write("This triangle number "+counter+ " is: "+type);
            document.write("<br>");
            e++;
        }else{
            type="Scalene";
            document.write("<br>");
            document.write("This triangle number "+counter+ " is: "+type);
            document.write("<br>");
            s++;
        }
    }

    if(i<e && i<s){
        let minor = "Isosceles";
    }else{
        if(e<i && e<s){
            minor = "Equilateral";
        }else{
            minor = "Scalene";
        }
    }
}
document.write("<br>");
document.write("the amount of Isosceles triangles is: "+i);
document.write("<br>");
document.write("the amount of Equilateral triangles is: "+e);
document.write("<br>");
document.write("the amount of Scalene triangles is: "+s);
document.write("<br>");
document.write("<br>");
document.write("The smallest type of triangle is: " +minor);
document.write("<br>");



