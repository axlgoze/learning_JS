// Ingresar por teclado un valor y luego mostrar la raiz cuadrada de dicho valor.
let input, print;

function squareRoot(number){
    let result = Math.sqrt(number);
    return result;
}

input=parseInt(prompt("Enter a number and I will give you the square root of it"));
print= document.write("The result is : "+squareRoot(input));