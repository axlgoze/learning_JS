
// Confeccionar una clase persona que permita almacenar el nombre y la edad. Luego definir un vector de 4 componentes de tipo persona. Imprimir el nombre de la persona de mayor edad; decir también si hay más de una persona con la edad mayor.

function Person(name,age){
    this.name=name;
    this.age=age;
    this.returnPersonalData = function(){
        let chain;
        chain = 'Person: '+this.name+' age: '+this.age;
        return chain;
    }
}

let isMayor = 0;
let vector = new Array(4);
vector[0] = new Person('Axel',30);
vector[1] = new Person('Brayan',29);
vector[2] = new Person('Sofia',4);
vector[3] = new Person('pepe',17);

for(let f = 0; f<vector.length; f++){

    if(vector[f].age>=18){
        isMayor++
        console.log('hay '+isMayor+ ' personas mayores');
    }
    document.write(vector[f].returnPersonalData());
    document.write('<br>');
}