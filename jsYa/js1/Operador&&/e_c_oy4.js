let x,y;

x=parseInt(prompt("Enter coordinate X"));
y=parseInt(prompt("Enter coordinate Y"));

if(x>0 && y>0){
    document.write("You are in the first quadrant");
}else{
    if(x<0 && y>0){
        document.write("You are in the second quadrant");
    }
}