// Realizar un programa que muestre en un div el número 2.
//  Cada vez que se hace doble clic sobre el mismo duplicar el valor contenido
//  en el div.

window.addEventListener("load", init);

function init(){
    let section = document.getElementById("clickEvents");
    let container = document.createElement("div")

    container.id="div1";
    section.appendChild(container);

    // container.innerHTML="2";
    container.innerHTML=2;

    container.style.border="1px solid red"
    container.style.width="30px";
    container.style.height="30px";
    container.style.cursor="pointer";


    document.getElementById("clickEvents").addEventListener('dblclick',double);
}

function double(e){
    // let value = parseInt(document.getElementById("div1").innerHTML);
    let value = document.getElementById("div1").innerHTML;
    let result = value * 2;
    document.getElementById("div1").innerHTML = result;
}