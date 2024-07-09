let a,b,c;
a = parseInt(prompt("Ingresar un número"));
b = parseInt(prompt("Ingresar otro número"));
c = parseInt(prompt("Ingresar último número"));

if(a > b){
    document.write("El número mayor es: "+a);
}else{
    if(b > c){
        document.write("El número mayor es: "+b);
    }else{
        document.write("El número mayor es: "+c);
    }
}