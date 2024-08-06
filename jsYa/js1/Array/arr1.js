// Realizar un programa que pida la carga de dos vectores numéricos. Obtener la suma de los dos vectores, dicho resultado guardarlo en un tercer vector del mismo tamaño. Sumar componente a componente.
// El tamaño del vector es a elección.

let input;
let f;
let sum;

// function that stores values in the vectors.
function fillVectors(){
    let vector,vector2;

    let elements = parseInt(prompt("Enter the number of elements for your vector"));
    vector = new Array(elements);
    vector2 = new Array(elements);

    for(f=0;f<vector.length;f++){
        input=parseInt(prompt("Enter a number for vector 1"));
        vector[f]=input;
    }

    for(f=0;f<vector2.length;f++){
        input=parseInt(prompt("Enter a number for vector 2"));
        vector2[f]=input;
    }

    sumVectors(vector,vector2);
}

function sumVectors(vector,vector2){
    let vector3 = new Array(vector.length);
    for(f=0;f<vector.length;f++){
        vector3[f]=vector[f]+vector2[f];
    }
    document.write("["+vector+"] "+" + "+" ["+vector2+"] "+" = ")
    document.write("["+vector3+"]");
}
fillVectors();


