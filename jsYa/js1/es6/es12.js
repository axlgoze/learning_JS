// Plantear una clase ListaOrdenada. En el constructor definir un atributo de tipo vector vacío.
// Luego definir dos métodos, uno que permita agregar elementos a la lista
// y otro que lo muestre en la página.

class ListaOrdenada{

    constructor(){
        this.vector = [];
    }

    addEle(element){
        this.vector.push(element);
    }

    show(){
        let listed = '<ol>';
        for (let i = 0; i < this.vector.length; i++) {
            listed += `<li>${this.vector[i]}</li>`;
        }
        listed+='</ol>';
        return document.write(listed);
    }

}

const list = new ListaOrdenada();
list.addEle("hola");
list.addEle("como");
list.addEle("estas");
list.addEle("tu");
list.addEle("hoy");
console.log(list.show());

