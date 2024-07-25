// Elaborar una función a la cual le enviemos tres enteros y muestre el menor.


let input1,input2,input3, minor;

input1=parseInt(prompt("Enter a number"));
input2=parseInt(prompt("Enter a number"));
input3=parseInt(prompt("Enter a number"));


function showMinor(input1,input2, input3){
    if(input1<input2){
        minor=input1;
    }else{
        if(input3<minor){
            minor=input3;
        }
    }
    document.write(minor);
}

showMinor(input1,input2, input3);