// Declarar una clase llamada Persona.
// Definir los atributos donde almacenar su nombre y edad.
// Crear dos propiedades para que se puedan acceder a los atributos definidos.
// Validar que no se puedan ingresar valores negativos para la edad.

class Person{
    constructor (name,age) {
        this._name=null;
        this._age=0;
    }

    set name(n){
        this._name = n;
    }

    get name(){
        return this._name;
    }

    set age(v){
        if(v>0){
            this._age = v;
        }else{
            throw "age must be positive number"
        }
    }

    get age(){
        return this._age;
    }

    print(){
        return console.log(`Hello ${this._name}, age: ${this._age}`);
    }

}

const axl = new Person();

axl.print();
axl.name="Brayan";
axl.print();
axl.age=34;
axl.print();
axl.age=-12;
axl.print();

// axl._age=15;
// axl.print();