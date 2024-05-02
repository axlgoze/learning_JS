


// declara una funcion con "function"
function retornar(valor){
    if (valor == 1){
        return "UNO";
    }else{
        if(valor ==2){
            return "DOS";
        }else{
            if(valor ==3){
                return "TRES";
            }else{
                if(valor ==4){
                    return "CUATRO";
                }else{
                    if(valor ==5){
                        return "CINCO";
                    }else{
                        return "cifra incorrecta";
                    }
                }
            }
        }
    }
}
let valor = prompt("Ingresa un número entre 1 y 5.");
let x = parseInt(valor);
let resultado = retornar(x);
document.write(resultado);