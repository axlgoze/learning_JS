// Definir un arreglo de cuatro elementos de tipo objeto, 
// cada objeto representa una persona con su nombre y edad.
// Imprimir el vector previo y posteriormente a su ordenamiento por la edad.


let arr = new Array(4);

arr = [{
    name: "zaul",
    age: 50
    },
    {name: "Casandra", age: 12},
    {name: "Paolo", age: 44},
    {name: "brenda", age: 93},
];

// for(let i =0; i<arr.length;i++){
//     console.log(`[${i}]:`+arr[i].age);
// }

let sorted = arr.sort((a,b) => a.age-b.age);

console.log('sorted: ', sorted);