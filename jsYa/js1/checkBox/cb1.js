// Confeccionar una página que muestre tres checkbox que permitan seleccionar los deportes que practica el usuario (Fútbol, Básket, Tenis) Mostrar al presionar un botón los deportes que eligió. 

let soccer = document.getElementById('soccer');
let basketball = document.getElementById('basketball');
let tennis = document.getElementById('tennis');

function checkSports(){
    let counter=0;
    let sports= '';
    if(soccer.checked){
        counter++
        sports = soccer.id
    }
    if(basketball.checked){
        sports = sports + ' '+basketball.id
    }
    if(tennis.checked){
        sports = sports + ' '+ tennis.id
    }
    document.getElementById('result').textContent = sports;
}