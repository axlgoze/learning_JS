// Mostrar por pantalla el valor 10 elevado a la 1,2,3 etc. hasta que se genere un valor infinito.

let value = 10;

for (let index = 0; ; index++) {

    let result = Math.pow(value, index);
    if(isFinite(result)){
        console.log("10 to " + index + " is " + result);
    }else{
        break;
    }
}