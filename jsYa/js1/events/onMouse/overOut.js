// Mostrar un elemento de tipo H1,
//  luego cuando se ingrese con el mouse dentro del mismo cambiar el color a letra roja 
// y color de fondo amarillo,
//  luego cuando se mueva la flecha del mouse fuera del elemento volver al color original.


window.addEventListener("load",init);

function init(){
    let section = document.getElementById("mouseEvents");
    let title = document.createElement("h1");
    title.innerHTML="Hello World"

    section.appendChild(title);

    document.addEventListener("mouseover",on);
    document.addEventListener("mouseout",out);

    function on(){
        title.style.color="red"
    }
    function out(){
        title.style.color=""
    }
}
