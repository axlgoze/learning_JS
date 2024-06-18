let nota1;
let nota2;
let nota3;

nota1 = parseInt(prompt("Ingresa tu primera nota: "));
nota2 = parseInt(prompt("Ingresa tu segunda nota: "));
nota3 = parseInt(prompt("Ingresa tu tercera nota: "));

let promedio = (nota1+nota2+nota3)/3;

if (promedio >= 7){
    alert(" Promocionado ");
}else {
    alert(" Sorry 4U");
}