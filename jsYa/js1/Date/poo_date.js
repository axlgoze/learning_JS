// Confeccionar un programa que muestre en que cuatrimestre del año nos encontramos. Para esto obtener el mes.
let result = new Date();

function monthPeriod(dateObject){
    let currentMonth=dateObject.getMonth();

    if(currentMonth <=4){
        document.write("The current month is: "+currentMonth+" and it's in the first four month period.");
    }else{
        if(currentMonth>4 && currentMonth<8){
            document.write("The current month is: "+currentMonth+" and it's in the second four month period.");
        }else{
            document.write("The current month is: "+currentMonth+" and it's in the last four month period.");
        }
    }
}

monthPeriod(result);
