let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];


function showAllContacts(list){
    if(!list instanceof Array){
        return;
    }

    for (const contact of list) {
        console.log(`name: ${contact.name}`);
        console.log(`phone: ${contact.phone}`);
        console.log(`email: ${contact.email}`);
    }
}

function showContact(list,index){
    if(!list instanceof Array){
        return;
    }
    console.log(`name: ${list.at(index).name}`);
    console.log(`phone: ${list.at(index).email}`);
    console.log(`email: ${list.at(index).phone}`);
}

function addNewContact(list,name,phone,email){
    list.push({name,phone,email});
}


function sorting(list,callback){
    return callback(list);
}

let name = (list) => {
    return list.sort((a,b)=>{
        var retVal = 0;
        a.name>b.name ? retVal = 1 : retVal = -1;
        return retVal;
    });
};

let phone = (list) => {
    return list.sort((a,b)=>{
        var retVal = 0;
        a.phone>b.phone ? retVal = 1 : retVal = -1;
        return retVal;
    });
};

let email = (list) => {
    return list.sort((a,b)=>{
        var retVal = 0;
        a.email>b.email ? retVal = 1 : retVal = -1;
        return retVal;
    });
};

console.log('sorted by names', sorting(contacts,name));
console.log('sorted by phones', sorting(contacts,phone));
console.log('sorted by emails', sorting(contacts,email));