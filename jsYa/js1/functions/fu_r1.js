function formatearFecha(dia, mes, año) {
    let s = 'Hoy es ' + dia + ' de ';
    switch (mes) {
        case 1:
            s = s + 'enero ';
            break;
        case 2:
            s = s + 'febrero ';
            break;
        case 3:
            s = s + 'marzo ';
            break;
        case 4:
            s = s + 'abril ';
            break;
        case 5:
            s = s + 'mayo ';
            break;
        case 6:
            s = s + 'junio ';
            break;
        case 7:
            s = s + 'julio ';
            break;
        case 8:
            s = s + 'agosto ';
            break;
        case 9:
            s = s + 'septiembre ';
            break;
        case 10:
            s = s + 'octubre ';
            break;
        case 11:
            s = s + 'noviembre ';
            break;
        case 12:
            s = s + 'diciembre ';
            break;
    } //fin del switch
    s = s + 'de ' + año;
    return s;
}

document.write(formatearFecha(27, 1, 2021));