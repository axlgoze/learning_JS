// Disponer dos campos de texto tipo password. Cuando se presione un botón mostrar si las dos claves ingresadas son iguales o no (es muy común solicitar al operador el ingreso de dos veces de su clave para validar si las escribió correctamente, esto se hace cuando se crea una password para el ingreso a un sitio o para el cambio de una existente).
// Tener en cuenta que podemos emplear el operador == para ver si dos string son iguales.

let ps1 = document.getElementById('password1');
let ps2 = document.getElementById('password2');
let btn = document.getElementById('btn');
let result='';

function compare(){
    if(ps1.length == ps2.length){
        result = "equal";
    }else{
        result = "not equal";
    };
    
    let print = document.getElementById('result');
    print.textContent=result;
}