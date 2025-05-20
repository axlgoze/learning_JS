// Implementar un tablero de TaTeTi.
//  Asociar el evento click de los 9 botones a una única función.
//  Alternar entre las "X" y "O".
//  Mostrar un mensaje cuando gana un jugador.


window.addEventListener("load",init);

let iks = true;

function init(){
    for (let x = 0; x <= 9; x++) {
        document.getElementById('btn' + x).addEventListener('click',pressed);
    }

    function pressed(e){
        if(iks){
            e.target.value = "X"
            iks = false;
        }else{
            e.target.value = "O"
            iks = true
        }
        verify();
    }

    function verify(){
        let b1 = document.getElementById('btn0').value;
        let b2 = document.getElementById('btn1').value;
        let b3 = document.getElementById('btn2').value;
        let b4 = document.getElementById('btn3').value;
        let b5 = document.getElementById('btn4').value;
        let b6 = document.getElementById('btn5').value;
        let b7 = document.getElementById('btn6').value;
        let b8 = document.getElementById('btn7').value;
        let b9 = document.getElementById('btn8').value;

            if (b1 == 'X' && b2 == 'X' && b3 == 'X')
                alert('Gano la X');
            if (b4 == 'X' && b5 == 'X' && b6 == 'X')
                alert('Gano la X');
            if (b7 == 'X' && b8 == 'X' && b9 == 'X')
                alert('Gano la X');
            if (b1 == 'X' && b4 == 'X' && b7 == 'X')
                alert('Gano la X');
            if (b2 == 'X' && b5 == 'X' && b8 == 'X')
                alert('Gano la X');
            if (b3 == 'X' && b6 == 'X' && b9 == 'X')
                alert('Gano la X');
            if (b1 == 'X' && b5 == 'X' && b9 == 'X')
                alert('Gano la X');
            if (b3 == 'X' && b5 == 'X' && b7 == 'X')
                alert('Gano la X');

            if (b1 == 'O' && b2 == 'O' && b3 == 'O')
                alert('Gano la O');
            if (b4 == 'O' && b5 == 'O' && b6 == 'O')
                alert('Gano la O');
            if (b7 == 'O' && b8 == 'O' && b9 == 'O')
                alert('Gano la O');
            if (b1 == 'O' && b4 == 'O' && b7 == 'O')
                alert('Gano la O');
            if (b2 == 'O' && b5 == 'O' && b8 == 'O')
                alert('Gano la O');
            if (b3 == 'O' && b6 == 'O' && b9 == 'O')
                alert('Gano la O');
            if (b1 == 'O' && b5 == 'O' && b9 == 'O')
                alert('Gano la O');
            if (b3 == 'O' && b5 == 'O' && b7 == 'O')
                alert('Gano la O');
    }

}