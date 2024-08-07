// Confeccionar un programa que solicite el ingreso de un número y nos muestre dicho valor elevado a la tercera potencia. 

let input, print;

function powerUp(number){
    let result = Math.pow(number,3);
    return result;
}

input=parseInt(prompt("Enter a number and I will give you this number to the third exponent"));
print= document.write("The result is : "+powerUp(input));