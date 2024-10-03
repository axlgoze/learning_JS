// Confeccionar una página que permita seleccionar una pizza y la cantidad de unidades. Luego al presionar un botón calcular el importe a pagar.
// Utilizar un objeto de la clase SELECT para la selección de la pizza, pudiendo ser:
// Queso: $ 4.
// Jamón y queso: $ 6.
// Especial: $ 10.
// A la cantidad de pizzas cargarla en un objeto de la clase TEXT y en otro objeto de la clase TEXT mostrar el importe total a abonar. 
const pizzaType = document.getElementById('type');
let sum = 0;

function selectedPizza(){
    let pizzaIndex = pizzaType.selectedIndex;
    let product = pizzaType.options[pizzaIndex].text
    price = pizzaType.value;
    console.log(product.toUpperCase() +" pizza added, +$"+price);
    return price;
}

function payOrder(){
    let orderAmount = parseInt(selectedPizza());
    let numberOfPizzas = document.getElementById('pizzaNumber').value;
    let items = parseInt(numberOfPizzas);
    let finalPrice = orderAmount*items;
    alert("Final price: $"+finalPrice+" \nThanks for buying in PizzaWorld !");
}
