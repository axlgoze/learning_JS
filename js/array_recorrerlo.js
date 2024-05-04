// hay varias formas para recorrer un vector
// declaracion
vector1 = [1,2," ",4,5];
vector2 = ["hola","como"," ","hoy?"];
document.write('<h2>Formas de recorrer un arreglo</h2>');
document.write('<p>1) For tradicional no recorre valores inexistentes</p>');
document.write('forma 1');
document.write('<br>');
// forma 1 : for tradicional
for (let f =0; f<vector1.length; f++){
    // imprime la posicion del vector segun f
    document.write(vector1[f]+' ');
}
document.write('<p>2) For in no recorre valores inexistentes</p>');
document.write('forma 2');
// forma 2 : for in
document.write('<br>');
for(index in vector2){
    // con for in no se accede a los elementos vacios(inexistentes)
    document.write(vector2[index])
}

document.write('<p>3) For each si recorre valores inexistentes</p>');
document.write('forma 3');
document.write('<br>');
// forma 3 : forEach

//              funcion anonima
vector2.forEach(function(valor,indice){
    document.write('Poscicion '+indice+'=');
    document.write(valor+'<br>')
})



// forEach con arrow function
// vector2.forEach(element => {
    
// });