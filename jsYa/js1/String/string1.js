// Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.
let sum=0;
let input;
while (input !== "Stop") {
    input=prompt("Enter a name if you want to stop enter Stop");
    sum++;
    console.log("inside while cycle"+sum)
}
document.write("The number of names is: "+sum);