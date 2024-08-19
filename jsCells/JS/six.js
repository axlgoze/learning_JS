console.log(('o__o'.padStart(10,'-')).padEnd(15,'-'));
// ------o__o-----
let first = ('o__o'.padStart(10,'-')).padEnd(15,'-');


    if(first!=='------o__o-----'){
        console.log('not the same');
    }else{
        console.log('same');
    }

// padStart pads a string at the start
//padEnd pads a string at the end.