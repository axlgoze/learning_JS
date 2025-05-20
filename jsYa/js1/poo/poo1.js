// Plantear una clase persona (que permita cargar por teclado su nombre y edad).
// Por otro lado crear una clase empresa que tenga como atributo la edad tope para que una persona pueda ingresar como trabajador en la misma (60 años)
// Confeccionar un pequeño programa en JavaScript que defina 3 objetos de la clase persona y 1 de la clase empresa. Mostrar cuántas de esas personas están inhabilidadas para ingresar como trabajadores de acuerdo a la edad tope.

function Person(name, age){
    this.name = name;
    this.age = age;
}

function Enterprise(){
    this.maxAge = 60;
    this.canApply = function(limitAge){
        if(limitAge <= this.maxAge){
            return document.write("You can apply any job!");
        }else{
            return document.write("Sorry find another job!");
        }
    }
}

let person1 = new Person('Axel',19);
document.write("Hello "+ person1.name+"<br>");

let business = new Enterprise();
business.canApply(person1.age);

document.write("<br>");
document.write("<br>");

let person2 = new Person('Ricardo',69);
document.write("Hello "+ person2.name+"<br>");
business.canApply(person2.age);



// document.write("<br>");
// document.write("<br>");

// let person3 = new Person('Sofia',60);
// document.write("Hello "+ person3.name+"<br>");
// let business2 = new Enterprise(person3.age);
