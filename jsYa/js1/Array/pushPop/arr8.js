// Realizar la carga de sueldos por teclado hasta que se ingrese el cero.
//  Almacenar todos los valores ingresados en un vector empleando el método push. 
// Mostrar la suma de sueldos ingresados.
let input;
let salaryArray= [];
let sum=0;

do {
    input = parseInt(prompt("Enter the salary, 0 to exit"));
    if(input!=0){
        salaryArray.push(input);
    }
} while (input!=0);

for (let i = 0; i < salaryArray.length; i++) {
    sum = sum + salaryArray[i];
}

console.log(salaryArray);
console.log('sum', sum);