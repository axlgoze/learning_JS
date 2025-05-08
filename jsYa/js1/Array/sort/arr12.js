// Crear un vector con 10 elementos enteros con valores aleatorios. 
// Ordenarlos de menor a mayor. 
// Luego invertir el vector para verlo de mayor a menor.


let vector = new Array(10);

let randomNumber;

for(let i=0;i<vector.length;i++){
    randomNumber = parseInt(Math.random() * 14);
    vector[i] = randomNumber;
}
console.log("before",vector);

vector.sort();
console.log("sorted",vector);

vector.sort((a, b) => b - a);

console.log("inverse",vector);