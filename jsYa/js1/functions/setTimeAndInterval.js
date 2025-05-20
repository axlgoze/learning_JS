// Mostrar un cronómetro que comience en cero y se incremente en uno cada vez que pase un segundo.
//  Disponer  un botón para poder detener o reiniciar el cronómetro.


let btn = document.getElementById("btn");

btn.addEventListener("click",stop);

let cron = setInterval(process,1000);

function process(){
    let number = parseInt(document.getElementById("crono").innerHTML);
    number++;
    document.getElementById("crono").innerHTML = number
}

function stop(){
    if(btn.value == 'Stop'){
        clearInterval(cron);
        btn.value='Start';
    }else {
        cron = setInterval(process,1000);
        btn.value='Stop';
    }
}

