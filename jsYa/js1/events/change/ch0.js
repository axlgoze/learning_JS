// Confeccionar un formulario que muestre un checkbox que cuando se tilde
// active un botón (el checkbox debe mostrar un mensaje que diga : "Confirma los términos y condiciones?")


window.addEventListener("load",init);

function init(){
    document.getElementById("continue-btn").disabled=true;
    // get from DOM
    let container = document.getElementById("changeEvt");
    let check1 = document.getElementById("c1");
    let message= "";

    container.style.display="flex";
    container.style["flex-direction"]="row";

    check1.addEventListener("change",changed);

    function changed(){
        alert(message="accept terms and conditions?");

        if(check1.checked){
            document.getElementById("continue-btn").disabled=false;
        }else{
            document.getElementById("continue-btn").disabled=true;
        }
    }
}


