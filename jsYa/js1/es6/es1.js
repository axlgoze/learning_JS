// Confeccionar una función que reciba un vector y el tipo de lista HTML que se debe generar.
// Por defecto generar una lista no ordenada. Retornar una cadena con la lista HTML generada.

function generateList(vec,type='<ol>'){
    let list = type;
    // recorrer el vector
    // crear elemento li
    // asignarle valores del vector
    // cerrar tipo
    for (let index = 0; index < vec.length; index++) {
        list += `<li>${vec[index]}</li>`;
    }
    list += '</ol>';
    if(type == '<ul>'){
        list += '</ul>';
    }
    console.log(list);
    document.getElementById('es6').innerHTML = list;
}

options1 = ['red','orange','yellow','green']
// generateList(options1);
generateList(options1,type='<ul>');





