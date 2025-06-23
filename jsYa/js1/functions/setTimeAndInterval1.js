// Confeccionar una página que luego de 10 segundos redireccione a otro sitio
//  empleando para ello la función setTimeout.
let number=10
let cron = setInterval(start,1000)
let section = document.getElementById("timeOut");
let span = document.createElement('span');
span.innerHTML=`You will be redirected to google.com in ${number} seconds`;
section.appendChild(span);

function start(){
    number--
    span.innerHTML=`You will be redirected to google.com in ${number} seconds`;
}

setTimeout(redirect,10000)


function redirect(){
    window.location.href="https://www.google.com"
}