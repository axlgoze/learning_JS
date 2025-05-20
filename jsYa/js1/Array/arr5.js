// Crear un vector vacío. 
// Mediante una estructura repetitiva solicitar la carga de elementos por teclado hasta que se ingrese el cero. No almacenar dicho valor en el vector. 
// Luego sumar todas las componentes del vector, 
// mostrar dicha suma
// mostrar tamaño del vector.


// empty array
let emptyArr = new Array();

let input;
let sum = 0;
let i=0;

// repetitive structure
do{
    input = parseInt(prompt("Enter a number: "));

    // add input to the empty array
    if(input!=0){
        emptyArr[i]=input;
        i++;
    }
}while(input!=0);
    //sum elements of vector
    for(let f=0; f<emptyArr.length; f++){
        sum = sum + emptyArr[f];
    }
    //show vector size
    console.log('Array: ' +emptyArr + ' length:' + emptyArr.length);
    //show sum
    console.log('sum', sum);
