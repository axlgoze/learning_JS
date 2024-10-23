// Una vez que se cargue la página mostrar un alert indicando si el navegador tiene activas las cookies.
function checkCookies(){
    if(window.navigator.cookieEnabled == true){
        alert("this browser has cookies enabled");
    }else {
        alert("cookies NOT enabled");
    }
}