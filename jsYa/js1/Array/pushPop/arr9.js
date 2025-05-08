// Crear un vector con 5 valores aleatorios comprendidos entre 1 y 1000.
// Luego extraer los dos últimos elementos sumarlos y mostrarlos.
// Imprimir también el tamaño final del vector.

let vector = new Array(5);
let value=0;

for (let i = 0; i < vector.length; i++) {
    value = parseInt(Math.random() *1000);
    vector[i] = value;
    // vector.push(value);
}

console.log(vector);

let first = vector.pop();
let second = vector.pop();

// let minus = vector.pop() - vector.pop();

console.log(first+second);
console.log(vector.length);