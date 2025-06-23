// Crear un objeto que represente los datos de un participante de un juego. Definir las propiedades
//  nombre
//  puntos
// y los métodos:
// imprimir (mostrar el nombre de jugador y los puntos actuales)
// aumentarpuntos (permite incrementar la cantidad de puntos actuales del jugador)
// verificarsigano (mostrar un mensaje si los puntos superan a 1000)

const player1 = {
    name: 'Axl',
    points: 9000,
    addPoints(amount){ this.points = this.points + amount},
    verifyWin(){
        if(this.points>=10000){
            alert('WINNER!');
            this.print();
        }
    },
    print(){ document.getElementById('es6').innerHTML = this.points}
}

player1.addPoints(100);
player1.print();
player1.addPoints(900);
player1.verifyWin();
