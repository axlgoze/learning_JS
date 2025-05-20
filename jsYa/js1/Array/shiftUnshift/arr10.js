// Ingresar valores por teclado.
//  Los valores menores a 100 ingresarlos al principio del vector
// los mayores o iguales a 100 ingresarlos al final.
// Se finaliza la carga de datos al ingresar el cero.
// Cuando sale del do/while extraer el último valor ingresado que es el cero del vector.
// Imprimir el vector en la página
let vec = new Array();
let input;
do {
    input = parseInt(prompt("Enter a number"));
    if(input!=0){
        if(input < 100){
            vec.unshift(input);
        }else if(input>= 100){
            vec.push(input);
        }
    }
} while (input!=0);

console.log(vec);