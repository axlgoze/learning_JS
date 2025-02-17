function NumeroQuiniela(name){
    this.name = name;
    this.loadNumber = function(){
        this.number = parseInt(prompt("Hola "+ this.name + " Which number do you want?"))
    }
    this.winner = function(num){
        if (this.number == num){
            return true;
        }else{
            return false;
        }
    }
}

function Bolillero(){
    this.number = -1;
    this.random = function(){
        this.number = parseInt(Math.random()*10)+1;
    }
}

let quinelaNumber1;
quinelaNumber1 = new NumeroQuiniela("Axel");
quinelaNumber1.loadNumber();

let quinelaNumber2;
quinelaNumber2 = new NumeroQuiniela("Brayan");
quinelaNumber2.loadNumber();

let bolillero;
bolillero = new Bolillero();
bolillero.random();

document.write("Number: "+ bolillero.number +"<br>");
document.write(quinelaNumber1.name + "chose "+ quinelaNumber1.number + "<br>")
document.write(quinelaNumber2.name + "chose "+ quinelaNumber2.number + "<br>")

if(quinelaNumber1.winner(bolillero.number)){
    document.write(quinelaNumber1.name + "You win.");
}

if(quinelaNumber2.winner(bolillero.number)){
    document.write(quinelaNumber2.name + "You win.");
}