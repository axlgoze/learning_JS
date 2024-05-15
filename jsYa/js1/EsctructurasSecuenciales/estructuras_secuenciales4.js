let precio, cantidad, total;

precio = parseInt(prompt("Ingresa el precio del árticulo: "));
cantidad = parseInt(prompt("Ingresa la cantidad a llevar: "));

total = precio*cantidad;

document.write("El total a abonar es: " + total);