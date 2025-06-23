// Declarar una clase llamada 'Fecha' con dos métodos estáticos:
//   static retornarMes(mes)
// Retorna el nombre de mes a partir de un valor de 1 a 12.
//   static fechaCompleta()
// Retorna el día, mes y año actual separado por guiones.


class todayDate {
    static returnDate(mo){
        let montValue = mo;
        let montName = '';
        switch (mo) {
            case 1:
                montName = 'January'
                break;
            case 2:
                montName = 'February'
                break;
            case 3:
                montName = 'March'
                break;
            case 4:
                montName = 'April'
                break;
            case 5:
                montName = 'May'
                break;
            case 6:
                montName = 'June'
                break;
            case 7:
                montName = 'July'
                break;
            case 8:
                montName = 'August'
                break;
            case 9:
                montName = 'September'
                break;
            case 10:
                montName = 'October'
                break;
            case 11:
                montName = 'November'
                break;
            case 12:
                montName = 'December'
                break;
            default:
                break;
        }
        return `the input month ${montValue} corresponds to ${montName}`;
    }

    static completeDate(){
        const actualDate = new Date();
        let day =  actualDate.getDate();
        let month =  actualDate.getMonth()+1;
        let year =  actualDate.getFullYear();
        return `date: ${day}-${month}-${year}`;
    }
}


const fecha = todayDate.completeDate();
const swi = todayDate.returnDate(12);

console.log(swi);
console.log(fecha);
