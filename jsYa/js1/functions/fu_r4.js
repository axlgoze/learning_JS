// Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva de hasta 5 dígitos.
// declare number which will get the input form user.
let number = parseInt(prompt("Enter a number with 5 digits or less"));
// function that receives one parameter that will return it as String value
function countDigits(number){
    digits= number.toString().length;
    return digits;
}
//Paint the value returned by countDigits function
document.write("The number of digits that "+number+" has is: "+countDigits(number));