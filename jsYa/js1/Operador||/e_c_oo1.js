let number1,number2,number3;

number1=parseInt(prompt("Enter a number: "));
number2=parseInt(prompt("Enter a number: "));
number3=parseInt(prompt("Enter a number: "));

if(number1<10 || number2<10 || number3<10){
    document.write("Some number is less than 10");
}