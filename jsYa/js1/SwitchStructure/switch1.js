let word;
word=prompt("Enter one of the given words: HOUSE, TABLE, DOG, CAT");

switch(word){
    case 'HOUSE':
        document.write("CASA");
        break;
    case 'TABLE':
        document.write('MESA');
        break;
    case 'DOG':
        document.write("PERRO");
        break;
    case 'CAT':
        document.write('GATO');
        break;
    default:
        document.write("Type something !");
}