// Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.
let input1, input2, input3, f,major,middle,minor,result;

input1=parseInt(prompt("Enter the first number"));
input2=parseInt(prompt("Enter second number"));
input3=parseInt(prompt("Enter third number"));

function sort(input1,input2,input3){
    if(input1<input2 && input1<input3){
        document.write("<br>");
        document.write(input1+"-"+input2+"-"+input3);
    }else{
        if(input2<input3 && input2<input1){
            document.write("<br>");
            document.write(input2+"-"+input1+"-"+input3);
        }else{
            document.write("<br>");
            document.write(input3+"-"+input1+"-"+input2);
        }
    }
}

sort(input1,input2,input3);


