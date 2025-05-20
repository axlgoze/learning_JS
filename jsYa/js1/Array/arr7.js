// Crear un vector disperso que representen premios de una rifa.
let raffle = new Array();

// Genera 10 premios con los montos 1000,2000,3000 etc.
// Almacenar en dichas posiciones los premios.
let amount = 0;
let indexPrize;

do {
    // Generar valores aleatorios para los números con premio.
    // La cantidad de números de la rifa son 1000.
    indexPrize = parseInt(Math.random()*1000);
    // Las posiciones indican los números que tienen premio.
    raffle[indexPrize] = (amount +1) * 1000;
    amount++;
} while (indexPrize != 11);

for (let f = 0; f < raffle.length; f++) {
    if (raffle[f] != undefined) {
        // Imprimir Los números con premio y los montos de los mismos.
        console.log('prize number ' + f + ' has a prize of: ' + raffle[f]);
    }
}

console.log(raffle);
