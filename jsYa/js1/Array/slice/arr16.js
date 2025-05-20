// first parameter indicates the position that will be returned.
// second parameter indicates the limit of the array without reach the position

// Crear un vector de 10 elementos con valores aleatorios comprendidos entre 0 y 1000.
//  Buscar el menor 
// y luego generar otro vector a partir de dicha posición hasta el final.

let arr = new Array(10);

for (let index = 0; index < arr.length; index++) {
    let rndm = Math.floor(Math.random()*1000);
    arr[index]=rndm;
}

console.log(arr);

arr.sort((a,b)=>b-a);
console.log("sorted: "+arr);

let minor=arr.slice(-1);
console.log("sliced: "+minor);

