// Plantear una clase llamada Menu que administre una lista de enlaces.
// Definir como atributos dos vectores paralelos que almacenen en uno la 'url'
// y en el otro la 'descripcion' de dicho enlace. Permitir insertar enlace
// y finalmente mediante un método que le pasamos el 'id' de un elemento HTML proceda a crearlo al menú.

class Menu{

    constructor () {
        this.links = [];
        this.descriptions = []
    }

    insert(link,dptn){
        this.links.push(link);
        this.descriptions.push(dptn);
    }

}

const url = new Menu();
url.insert('www.amazon.com','hola como state, yo aki programming')
url.insert('www.amazon.com','hola como state, yo aki programming')
console.log(url.links);
