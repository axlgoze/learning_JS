// Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

let side=parseInt(prompt("Enter the side of a square"));

function calculatePerimeter(side){
    let perimeter= side*4;
    return perimeter;
}

document.write("The perimeter is: "+calculatePerimeter(side));