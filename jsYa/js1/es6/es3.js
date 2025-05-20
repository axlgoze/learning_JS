// Implementar una función que mediante un parámetro Rest
// reciba una lista de enteros y retorne un Array con los elementos ordenados de menor a mayor.

// Group the elements with ... into a new array
function restFunction(...newArr){
    return newArr.sort((a, b) => a - b);
}

// let vec = [299,33,467,5,12,55]
// sends individual elements with ...
// console.log(restFunction(...vec));

console.log(restFunction(298,33,467,5,12,55));
