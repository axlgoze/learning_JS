// Confeccionar una función que muestre la tabla de multiplicar.
// Si no llegan datos muestra por defecto la tabla del 2.
// Por defecto se muestran 10 términos de la tabla salvo que se indique un valor en contrario.
// La función debe tener 2 parámetros y ambos deben tener un valor por defecto.

function multiplyTable(operator=2,items=10){
    for (let index = 1; index<=items; index++) {
        console.log(operator * index);
    }
}

multiplyTable(9,12);