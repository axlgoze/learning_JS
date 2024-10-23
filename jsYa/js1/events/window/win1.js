// Confeccionar una página que permita abrir otra ventana cuando se presiona un botón. Dicha ventana debe tener como ancho 600 pixeles y alto 300 pixeles.

function openOtherWindow(){
    let anotherWindow = open('','','status=yes,width=600,height=300');
    anotherWindow.document.write("This is another window");

}