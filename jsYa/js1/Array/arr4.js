
// Crear un vector con 10 valores aleatorios comprendidos entre 1 y 500. Luego crear otros dos vectores y copiar los elementos menores a 250 en el segundo vector y los mayores o iguales a 250 en el tercer vector. Imprimir los tamaños del segundo y tercer vector. Imprimir los tres vectores.

let arr = new Array(10);
let index = 0;
let index2 = 0;
let index3 = 0;
let arr2=new Array();
let arr3=new Array();


for (let f=0; f<arr.length; f++){
    let randomNumber = Math.floor(Math.random() * 500) + 1;
    arr[index] = randomNumber
    if(randomNumber>250){
        arr2[index2] = randomNumber;
        index2++
    }else if(randomNumber<250){
        arr3[index3]= randomNumber;
        index3++
    }
    index++;
}

document.write("The first array is: ");
for(let f=0; f<arr.length; f++){
    document.write(arr[f] + " - " );
}
document.write("<br>");
document.write("The second array is: ");
for(let f=0; f<arr2.length; f++){
    document.write(arr2[f] + " - " );
}
document.write("<br>");
document.write("The third array is: ");
for(let f=0; f<arr3.length; f++){
    document.write(arr3[f] + " - " );
}
console.log('arr', arr);
console.log('arr2', arr2);
console.log('arr3', arr3);

