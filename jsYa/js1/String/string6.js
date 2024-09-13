// Cargar un String por teclado e implementar las siguientes funciones:
// a) Imprimir la primera mitad de los caracteres de la cadena.
// b) Imprimir el último carácter.
// c) Imprimirlo en forma inversa.
// d) Imprimir cada carácter del String separado con un guión.
// e) Imprimir la cantidad de vocales almacenadas.


let input = prompt("Enter an input");

function half(completeString){
    let half = completeString.length/2;
    return completeString.substring(0,half);
};

function lastCharacter(allCharacters){
    return result = allCharacters.charAt(allCharacters.length-1);
};

function inverse(normalChain){
    return normalChain.split(' ').reverse().join(' ');
    
};

function separate(joinedChain){
    let splited = joinedChain.split("");
    return splited.join().replace(/,/g,'-');
};

function vowelCounter(allLetters){
    let counter=0;
    

    for(let f=0; f<allLetters.length; f++){
        if(allLetters.includes('a')){
            counter++;
        }else{
            if(allLetters.includes('e')){
                counter++;
            }else{
                if(allLetters.includes('i')){
                    counter++;
                }else{
                    if(allLetters.includes('o')){
                        counter++;
                    }else{
                        if(allLetters.includes('u')){
                            counter++;
                        }
                    }
                }
            }
        }
    }

    return counter;
};

document.write("The first half of the string is: " + half(input));
document.write("<hr>");
document.write("The last character of the string is: " + lastCharacter(input));
document.write("<hr>");
document.write("The inverse of the string is: " + inverse(input));
document.write("<hr>");
document.write("The the string separated is: " + separate(input));
document.write("<hr>");
document.write("The number of vowels in the string is: " + vowelCounter(input));

// let str = 'axel es el mas guapo de js'
// console.log(str.split(' ').reverse());