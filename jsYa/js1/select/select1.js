// Confeccionar una página que muestre un objeto SELECT con distintos tipos de pizzas (Jamón y Queso, Muzzarella, Morrones). Al seleccionar una, mostrar en un objeto de tipo TEXT el precio de la misma.

function getPrice(){
    document.getElementById('pizzas-select').disabled = true;
    setTimeout(()=>{
        document.getElementById('pizzas-select').disabled = false;
        document.getElementById('span1').textContent = "";
        document.getElementById('span2').textContent = "";
        document.getElementById('span3').textContent = "";
    }, 2000);
    let selected = document.getElementById('pizzas-select');
    let indexProduct = selected.selectedIndex;
    let optionText = selected.options[indexProduct].text;
    let optionPrice = selected.options[indexProduct].value;
    document.getElementById('span1').textContent = indexProduct;
    document.getElementById('span2').textContent = optionText;
    document.getElementById('span3').textContent = optionPrice;
}


// function getPrice(){
//     document.getElementById('price').value = document.getElementById('pizzas-select').option[document.getElementById('pizzas-select').selectedIndex].value;
// }