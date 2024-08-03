// Confeccionar una función a la cual le envíe tres enteros y retorne el mayor de ellos.

let num1,num2,num3;

num1=parseInt(prompt("Enter the first number"));
num2=parseInt(prompt("Enter the second number"));
num3=parseInt(prompt("Enter the third number"));

function maxValue(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }else{
        if(num2 > num3){
            return num2;
        }else{
            return num3;
        }
    }
}
let result=maxValue(num1,num2,num3);
document.write("The higher value is: "+result);