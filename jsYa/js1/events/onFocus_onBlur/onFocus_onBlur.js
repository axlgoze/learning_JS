// Implementar un formulario que solicite la carga del nombre y la edad de una persona. Cuando el control tome foco borrar el contenido actual. Mostrar en las propiedades value de los controles text los mensajes "nombre" y "mail" respectivamente.

// function clean(input){
    
//     console.log(input.value)
//     input.value=" "
// }

// function show(input){
//     console.log("Your text here!");
//     input.value = input.defaultValue;
// }

// function verificarEntrada(input){
//     alert('ingreso'+ input.value);
// }

function vaciar(control) {
    control.value = '';
    console.log('this: '+ control);
}

function verificarEntrada(control) {
    alert('ingreso:' + control);
}