// Confeccionar un programa que al presionar un botón aparezca una ventana que ocupe todo el ancho del monitor y la mitad de su altura.

function getScreenInfo(){
    document.write("width: " + window.screen.width);
    document.write("height: " + window.screen.height);
    document.write("avalHeight: " + window.screen.availHeight);
    document.write("avalWidth: " + window.screen.availWidth/2);
}