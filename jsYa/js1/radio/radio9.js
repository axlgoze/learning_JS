// Confeccionar una página que muestre dos objetos de la clase RADIO solicitando que seleccione si es mayor de 18 años o no. Al presionar un botón mostrar un alert indicando si puede ingresar al sitio o no.
let major = document.getElementById('major');
let minor = document.getElementById('minor');

function validateAge(){
    if (major.checked){
        alert("You can access to the website");
    }else{
        if(minor.checked){
            alert("You cannot access to the website");
        }
    }
}