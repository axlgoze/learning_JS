// Confeccionar una clase que permita administrar el nombre y la edad de una persona.
// Mostrar los datos cargados. Imprimir un mensaje si es mayor de edad (edad>=18)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    verifyAge(){
        if(this.age >= 18){
            alert("The future is now older")
        }else{
            alert("younger")
        }
    }

}

const axl = new Person('Axl',19);
console.log(axl.verifyAge());
