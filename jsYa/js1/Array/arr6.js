// Array: no densos o dispersos

// Ingresar por teclado un nro de cliente
// Ingresar por teclado el monto a depositar.
// Almacenar en un vector, 
// utilizar como subíndice el nro de cliente
// almacenar el monto depositado.
// Sumar todos los depósitos recorriendo el vector e identificando las componentes cargadas (es decir las que tienen un valor distinto a undefined). 
// Imprimir la suma total depositada y la cantidad de clientes que depositaron.

let arr = new Array();

let clientId, amount;
let clients=0;

let sum=0;

do {
    clientId = parseInt(prompt("insert client number"));
    if(clientId!=0){
        amount = parseInt(prompt("insert the amount"));
        arr[clientId] = amount;
        clients++;
    }

} while (clientId!=0);


for(let i=0;i<arr.length;i++){
    if(arr[i]!=undefined){
        sum = sum + arr[i];
        // console.log(arr[i]);
    }
}

console.log('size: ' + arr.length);
console.log('num of clients: ' + clients);
console.log('total amount', sum);





