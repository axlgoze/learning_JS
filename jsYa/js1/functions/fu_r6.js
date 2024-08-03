// Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
function getSum(){
    let sum=0;
    let input;
    for(f=1;f<=5;f++){
        input=parseInt(prompt("Enter a number"));
        sum=sum+input;
    }
    return document.write("The sum is: "+sum);
    }
getSum();