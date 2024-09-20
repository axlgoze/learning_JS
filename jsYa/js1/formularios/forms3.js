// Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor. 

function compare(){
    let firstNumber = document.getElementById("number1").value;
    let secondNumber = document.getElementById("number2").value;
    let major = 0;

    if(firstNumber > secondNumber){
        major = firstNumber;
    }else{
        major = secondNumber;
    }

    let update = document.getElementById("result").textContent = major;
    console.log(update)

}