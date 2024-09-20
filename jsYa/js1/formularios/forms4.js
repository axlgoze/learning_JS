// Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento) 
// Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor. 

function concat(){
    let name = document.getElementById("name").value;
    let secondName = document.getElementById("second-name").value;

    let string = name+' '+secondName;

    let update = document.getElementById("result").textContent = string;
    console.log(update)

}