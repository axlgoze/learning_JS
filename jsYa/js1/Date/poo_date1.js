// Confeccionar una función que nos retorne un string con el siguiente formato:
// Hoy es Lunes 9 de Agosto de 2021
// Para poder recuperar el día de la semana debemos llamar al método:

// let diaSemana=fecha.getDay();
// El método getDay() devuelve el día de la semana de la fecha especificada, siendo 0 (Domingo) el primer día.

let day,month,year;
let sample = new Date();
day = sample.getDay();
month = sample.getMonth();
year = sample.getFullYear();

function getDay(day){
    switch (day) {
        case 0:
            return 'Monday';
        case 1:
            return 'Tuesday';
        case 2:
            return 'Wednesday';
        case 3:
            return 'thursday';
        case 4:
            return 'Friday';
        case 5:
            return 'Saturday';
        case 6:
            return 'Sunday';
        default:
            return 'Invalid day';
    }
}

function getMonth(month){
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'May';
        case 4:
            return 'June';
        case 5:
            return 'July';
        case 6:
            return 'August';
        case 7:
            return 'September';
        case 8:
            return 'October';
        case 9:
            return 'November';
        case 10:
            return 'December';
        default:
            return 'Invalid month';
    }
}

function getString(year,month,day){
    document.write("Today is "+getDay(day)+" of "+getMonth(month)+" of the year "+year);
}

getString(year,month,day);

