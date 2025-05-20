// Confeccionar una función que reciba un conjunto de string
//  y genere dentro de la página una lista ordenada (<ol>).
//  La función debe recibir en el primer parámetro el id de un div.


// 1. get Element from dom
// 2. create element
// 3. put content on the element
// 4. appendChild it

let container=document.getElementById("arguments");
let orLi = document.createElement('ol');
container.appendChild(orLi);

function strF(){
    for(let i=0;i<arguments.length;i++){
        let listEl = document.createElement("li");
        listEl.textContent=arguments[i];
        orLi.appendChild(listEl);
    }
}

strF("hola",", ","como"," ","estas","?");
strF("quieres",", ","como"," ","estas","si");