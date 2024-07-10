let number;

number = parseInt(prompt("Enter a number: "));

if(number < 0){
    document.write("The number is negative");
}else{
    if(number > 0){
        document.write("The number es positive");
    }else{
        document.write("The number is equal to 0");
    }
}