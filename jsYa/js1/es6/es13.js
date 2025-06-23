// Confeccionar una clase Persona que tenga como atributos el nombre y la edad.
// Al constructor llegan los datos personales y en otro método se imprimen.
// Plantear una segunda clase Empleado que herede de la clase Persona.
// Añadir un atributo sueldo y los métodos constructor, imprimir
// y un método si debe pagar impuestos (sueldo mayor a 5000)
// Posteriormente definir un objeto de la clase Persona y
// llamar a sus métodos. También crear un objeto de la clase Empleado y llamar a sus métodos.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    print(){
        console.log(this.name);
        console.log(this.age);
    }
}

class Employee extends Person{
    constructor(name, age, balance){
        super(name, age)
        this.balance = balance;
    }

    print(){
        super.print();
        console.log(this.balance);
    }

    verify(){
        if (this.balance >= 5000){
            alert("must pay taxes");
        }
    }
}

const axel = new Person('axel',9000);

axel.print()

const brayan = new Employee('bryan',33,43);
brayan.print();
brayan.verify();