// Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

let side, perimeter;

side=parseInt(prompt("Enter the side of a square"));

function calculatePerimeter(side){
    perimeter= side*4;
    return perimeter;
}


document.write(calculatePerimeter(side));