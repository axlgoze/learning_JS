// Elaborar un programa que muestre un div de color rojo.
//  Cuando se presione cambiar el color a amarillo
// y luego de soltar el botón del mouse volver a pintar de rojo.


window.addEventListener("load",init);

function init(){
    let section = document.getElementById("mouseEvents");

    let container = document.createElement("div");
    container.style.width="45px";
    container.style.height="45px";
    container.style.background="red";
    
    section.appendChild(container);
    
    document.addEventListener("mousedown",press);
    document.addEventListener("mouseup",unPress);
    
    function press(){
        container.style.background="yellow";
    }
    function unPress(){
        container.style.background="red";
    }
}