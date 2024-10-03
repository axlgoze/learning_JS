// Generar un presupuesto de un equipo de computación a partir de tres objetos de tipo SELECT que nos permiten seleccionar:
// Procesador (Intel I3 - $400, Intel I5 $600, Intel I7 $800).
// Monitor (Samsung 20' - $250, Samsung 22' - $350, Samsung 26' - $550)
// Disco Duro(500 Gb - $300, 1 Tb - $440, 3 Tb - $500)
// Para cada característica indicamos string a mostrar (Ej. Intel I3) y el valor asociado a dicho string (Ej. 400).
// Al presionar un botón "Calcular" mostrar el presupuesto en un objeto de tipo TEXT.1

let select1 = document.getElementById('processor');
let select2 = document.getElementById('monitor');
let select3 = document.getElementById('hard-drive');


function getBudget(){
    setTimeout(()=>{
        document.getElementById('resume').value = '';
    },4000)

    let indexProduct1 = select1.selectedIndex;
    let optionText1 = select1.options[indexProduct1].text;
    let optionPrice1 = select1.options[indexProduct1].value;

    let indexProduct2 = select2.selectedIndex;
    let optionText2 = select2.options[indexProduct2].text;
    let optionPrice2 = select2.options[indexProduct2].value;

    let indexProduct3 = select3.selectedIndex;
    let optionText3 = select3.options[indexProduct3].text;
    let optionPrice3 = select3.options[indexProduct3].value;

    let resume = "processor: "+optionText1+", monitor: "+optionText2+", hard drive: "+optionText3;
    document.getElementById('resume').value = resume;
    let item1 = parseInt(optionPrice1)
    let item2 = parseInt(optionPrice2)
    let item3 = parseInt(optionPrice3)
    let sum = item1+item2+item3;
    document.getElementById('budget').textContent = "$"+sum;
}