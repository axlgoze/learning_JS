// Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor elevado al cubo (emplear la función alert). 

function convert(){
    let input = document.getElementById("input").value;
    let numberPowered = Math.pow(input,3);
    let update = document.getElementById("result");
    update.textContent = numberPowered;
}