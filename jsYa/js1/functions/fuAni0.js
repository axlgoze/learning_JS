// Confeccionar una función que reciba un parámetro y defina una variable local.
//  Definir dentro de la función que acabamos de crear una función anidada
// que contenga un parámetro.
// En la función anidada imprimir el parámetro de la función que la contiene,
//  el parámetro que tiene la función anidada
// y el valor de la variable local de la función principal.


function nested(par){
    let local= par;

    nested1(local);

    function nested1(nestedPar){
        let nestedVar = nestedPar
        console.log("nestedPar",nestedVar);
        console.log("local",local);
    }
}

nested("hello");