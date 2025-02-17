// Selecciona el botón y el contenedor de información
const button = document.querySelector('.show-info');
const infoDiv = document.querySelector('.info');

// Agrega un evento de clic al botón
button.addEventListener('click', () => {
    // Usando getAttribute para obtener el valor de data-title
    const title = infoDiv.getAttribute('data-title');
    // Usando dataset para obtener el valor de data-description
    const description = infoDiv.dataset.description;

    // Muestra la información en la consola
    console.log('Título:', title);           // Salida: "Título de la Info"
    console.log('Descripción:', description); // Salida: "Descripción de la información"
});
