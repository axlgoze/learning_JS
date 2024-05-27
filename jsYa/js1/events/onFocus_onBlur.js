function clean(input){
    
    console.log(input.value)
    input.value=" "
}

function show(input){
    console.log("Your text here!");
    input.value = input.defaultValue;
}

function verificarEntrada(input){
    alert('ingreso'+ input.value);
}