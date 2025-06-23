// Definir un vector con un conjunto de elementos.
// Generar un nuevo vector llamando al método filter
// pasando una función de flecha para definir cuales rescatar.

let vec = [12,123,43,365,13,0];

let newVect = vec.filter(e => e> 100);

console.log(newVect.toString());