// Crear un vector de 10 elementos.
//  Inicializar los valores del vector cuando se crea.
// Inicializar dos variables 
// que resulten de llamar primero al método toString()
//  y la segunda variable inicializarla llamando al método join()
//  sin parámetros.
//  Mostrar un mensaje si el resultado de la ejecución de los dos métodos retorna el mismo valor 
// (empleando un if para comparar los string)

let arr = [
    "Axel1",
    "Axel2",
    "Axel3",
    "Axel4",
    "Axel5",
    "Axel",
    "Axel",
    "Axel",
    "Axel",
    "Axel",
]
let toS = arr.toString();
console.log(toS);

let jo = arr.join();
console.log("jo: "+jo);

if(toS == jo){
    console.log('same');
}else{
    console.log("not same");
}