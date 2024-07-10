let n;
n = parseInt(prompt("Enter a number"));
if(n>=100){
    document.write("the number has three digits");
}else{
    if(n<10){
        document.write("The number has one digits")
    }else{
        document.write("The number has two digit");
    }
}