// Confeccionar una página que muestre 4 lenguajes de programación que el usuario puede seleccionar si los conoce. Luego mostrar un mensaje indicando la cantidad de lenguajes que ha seleccionado el operador.
let rust = document.getElementById('rust');
let JavaScript= document.getElementById('JavaScript');
let Java = document.getElementById('Java');
let Python = document.getElementById('Python');

function submitCheck(){
    let counter = 0;
    if(rust.checked){
        counter++
    }
    if(JavaScript.checked){
        counter++
    }
    if(Java.checked){
        counter++
    }
    if(Python.checked){
        counter++
    }
    console.log(counter);
    document.getElementById('languageResult').textContent = counter
}