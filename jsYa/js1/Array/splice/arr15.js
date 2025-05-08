// Crear un vector con una lista de valores. Luego borrar las componentes donde hay un 2 y al mismo tiempo insertar dos elementos con el valor 1.

let arr=[1,2,3,4,5,2,8,2,1,0];
console.log(arr);

for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
        arr.splice(i,1,11,11);
    }
}
console.log(arr);


