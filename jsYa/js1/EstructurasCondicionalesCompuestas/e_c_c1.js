let num1, num2;

num1 = parseInt(prompt("Ingresa un número: "));
num2 = parseInt(prompt("Ingresa otro número: "));

if(num1>num2){
    document.write(num1 + " es mayor que " + num2);
}else{
    document.write(num1 + " es menor que " + num2);
}