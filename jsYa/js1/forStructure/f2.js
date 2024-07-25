// Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde a la medida de la base y la altura de un triángulo. El programa deberá informar:
// a) De cada triángulo la medida de su base, su altura y su superficie.
// b) La cantidad de triángulos cuya superficie es mayor a 12.
let sum=0;
for(let f=1;f<=3;f++){
    let base = parseInt(prompt("Enter the base"));
    let height = parseInt(prompt("Enter the height"));

    let area=base*height/2;
    document.write("<br>");
    document.write("base: "+base);
    document.write("<br>");
    document.write("height: "+height);
    document.write("<br>");
    document.write("The area is: "+area);
    document.write("<br>");
    if(area>=12){
        sum++;
    }
}
document.write("<br>");
document.write("The amount of triangles upper than 12 is:" +sum);