// Crear un vector de 10 elementos y almacenar valores aleatorios
// Luego borrar los elementos de las posiciones pares
// imprimir el vector antes y después de borrar las componentes
// , inclusive tratar de acceder a las componentes que acabamos de borrar.


let vector = new Array(10);

let randomNumber;

for(let i=0;i<vector.length;i++){
    randomNumber = parseInt(Math.random() * 5);
    vector[i] = randomNumber;
}

console.log("before",vector);

for(let i=0;i<vector.length;i++){
    if(vector[i] % 2 == 0){
        delete vector[i];
    }
}
console.log("after",vector);

// for(let i=0;i<vector.length;i++){
//     vector[i]
// }