// Un objeto es una estructura de datos 
// tiene propiedades y metodos
// las propiedades son datos almacenados como clave-valor

// declaracion
const objeto1 = {
    // properties
    clave : "valor",
    nombre : "nombre1",
    valor1 : 33
};

// un objeto puede tener metodos
const objeto2 = {
    // properties
    nombre : "Pelín",
    edad : 2,
    hobbie : "Dominar el mundo",

    // metodo
    whois(){
        // usar backticks '`'
        console.log( `Hola soy ${this.nombre} y quiero ${this.hobbie}`);
    }
};


// exportacion de objeto para uso en otros archivos
export default objeto2;
