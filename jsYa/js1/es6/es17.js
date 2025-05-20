// Se tiene el siguiente arreglo con los datos de distintos artículos:
// Imprimir primero todo el arreglo y luego mediante otro for of recorrer el arreglo e 
// imprimir todos los artículos con un precio superior a 30.

const articulos = [
    {
        nombre:'sandía',
        precio:12
    },
    {
        nombre:'manzanas',
        precio:52
    },
    {
        nombre:'peras',
        precio:40
    },
    {
        nombre:'naranjas',
        precio:35
    }
];

for (const element of articulos) {
    console.log(element.nombre);
    console.log(element.precio);
}

console.log('up 30');

for (const diff of articulos) {
    if(diff.precio >= 30){
        console.log(diff.nombre);
        console.log(diff.precio);
    }
}
