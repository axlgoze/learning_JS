// Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique si el String tiene cargado el carácter @.

let email, input, result;

input = prompt("Enter an email:");


function atValidator(email){
    result=email.includes('@');
    if(result == true){
        document.write("The string contains the '@' character");
    }else{
        document.write("The string doesn't contains the '@' character");
    }
}

atValidator(input);