// Set Concept title
let tituloNuevo = "Arrow Functions"

//Function to Changinng title
const cambiaTextos = (titulo) =>{
    const title = document.getElementById('actualTitle');
    title.textContent =  titulo;
}

cambiaTextos(tituloNuevo)
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sintaxis

// forma 1
document.write("forma 1")
document.write('<br></br>');

const arrow = (parameter1,parameter2) => {
    result = parameter1 + parameter2;
    return result;
}

document.write("const arrow = "+arrow);
document.write('<br></br>');

document.write('<br></br>');
// forma 2: when's there's only one parameter
document.write("forma 2")
document.write('<br></br>');
const arrow2 = parameter1 => {
    result = parameter1 + parameter1;
    return result;
}

document.write("const arrow2 = "+arrow2);
document.write('<br></br>');

document.write('<br></br>');
document.write("forma 2.1");
document.write('<br></br>');
// forma2.1: if the body is a single expression, rather a block in braces
const arrow21 = (parameter1) => parameter1*parameter1;
// you can omit the parentheses
const arrow211 = parameter1 => parameter1*parameter1;

document.write("const arrow21 = "+arrow21);
document.write('<br></br>');
document.write("const arrow211 = "+arrow211);


document.write('<br></br>');


// Arrow functions were added in 2015, mostly to make
// it possible to write small function expressions in a less verbose way.