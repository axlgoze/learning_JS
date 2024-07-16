// Desarrollar un programa que solicite la carga de 10 números e imprima la suma de lo últimos 5 valores ingresados.
let sum=0;
for(let f=0;f<10;f++){
    let num = parseInt(prompt("Enter a number"));
    if(f>=5){
        sum=sum+num;
    }
    document.write(num + " ");
}
document.write("The sum of last 5 numbers is: "+sum);