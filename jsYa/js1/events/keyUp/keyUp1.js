// implementaremos un programa que permita solo ingresar 140 caracteres
// y nos informe con un mensaje la cantidad de caracteres disponibles para seguir escribiendo.

window.addEventListener("load",init);

function init(){

    document.getElementById("psw").addEventListener("keyup",pressed);

}
function pressed(){
    let input = document.getElementById("psw").value.length;
    let remain = 21 - input;
    document.getElementById("characters").innerHTML = remain
}