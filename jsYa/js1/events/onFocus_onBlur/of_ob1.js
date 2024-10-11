// Solicitar que se ingrese el nombre y la clave de un usuario. Mostrar una ventana de alerta si en la clave se ingresan menos de 7 caracteres o más de 20 (capturar el evento onBlur)

function validateKey(control){
    let keyLength = control.value.length;
    if(keyLength <7 || keyLength>=20){
        alert("Your key value must be between 7 and 20 characters")
    }
}