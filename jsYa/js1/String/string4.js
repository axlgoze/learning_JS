// Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)
let word=prompt("Enter a word and I tell you if it's palindrome");
let cant = 0;
for(let f=0;f<word.length;f++){
    if(word.charAt(f) == word.charAt(word.length - 1 - f)){
        cant++;
    }
}

if(cant == word.length){
    document.write("It is a palindrome");
}else{
    document.write("It is not a palindrome");
}

