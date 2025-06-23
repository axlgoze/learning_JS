// Almacenar en un Map los nombres de paises como clave y la cantidad de habitantes como valores.
// Mostrar en una lista HTML que se debe crear en forma dinámica
// inmediatamente luego que se carga la página.

window.addEventListener("load",createList)

const countries = new Map(
    [
        ["Mexico" , 21000],
        ["Chile" , 2900],
        ["Peru" , 2000],
        ["Argentina" , 30000]
    ]
);

let section = document.getElementById('es6');
let uList = document.createElement('ul');
section.appendChild(uList);

function createList(){
        // for (const country of countries) {
        //     let liList = document.createElement('li');
        //     liList.innerHTML = country;
        //     uList.appendChild(liList);
        // }

        for (const [k,v] of countries) {
            let liList = document.createElement('li');
            liList.innerHTML = `key: ${k}, value: ${v}`;
            uList.appendChild(liList);
        }
}