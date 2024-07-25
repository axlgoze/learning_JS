// Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
// Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:

// 4 5 6 7 8 9 10

let minor,major,input;
let sequence=0;
minor=0;
major=0;


function enter(){
    minor=parseInt(prompt("Enter the minor number "));
    major=parseInt(prompt("Enter the major number "));
    return minor, major;
}

function doSequence(minor,major){
    for(f=minor;f<=major;f++){
        // sequence=minor++;
        document.write(f+" ");
    }
}

enter();
doSequence(minor,major);
