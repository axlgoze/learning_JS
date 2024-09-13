// Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.
let input;
let sum=0;
while (input !== 'STOP') {
    input = prompt("Enter a name if you want to stop enter Stop");
    //Remember to use variables.
    input = input.toUpperCase();
    sum++;
}
document.write("The number of names is: "+ (sum-1));