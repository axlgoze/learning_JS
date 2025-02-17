// Crear un vector vacío. Mediante una estructura repetitiva solicitar la carga de elementos por teclado hasta que se ingrese el cero. No almacenar dicho valor en el vector. Luego sumar todas las componentes del vector, mostrar dicha suma y el tamaño del vector.

let input;
let emptyArr = new Array();
let sum = 0;

do{
    input = parseInt("Enter a number: ");
    
    if(input!=0){
        for(let f=0; f<emptyArr.length; f++){
            emptyArr[f] = input;
        }
    }
}while(input!=0){

    for(let f=0; f<emptyArr.length; f++){
        sum = sum + emptyArr[f];
    }

    console.log('emptyArr', emptyArr);

}