// Se ingresan por teclado dos números (emplear parseFloat para convertirlos)
//  mostrar un mensaje si alguno de los dos no es un número (isNaN).
//  Luego si son valores numéricos proceder a multiplicarlos y verificar si el resultado es finito (isFinite)
//  para mostrar el resultado.


let nmbr1 = parseFloat(prompt("Enter first number: "));
let nmbr2 = parseFloat(prompt("Enter second number: "));
let result = 0;

if(isNaN(nmbr1) || isNaN(nmbr2)){
    console.log(' some input is not a number');
}else{
    result = nmbr1 * nmbr2;
    if(isFinite(result)){
        console.log('multiply result: '+result);
    }else{
        console.log('infinte...');
    }
}