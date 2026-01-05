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

    // console.log(list[index-1].name)
    // console.log(list[index-1].phone)
    // console.log(list[index-1].email)
    console.log(`name: ${list.at(index).name}`);
    console.log(`phone: ${list.at(index).email}`);
    console.log(`email: ${list.at(index).phone}`);
}

function addNewContact(list,name,phone,email){
    // list.push({name:name,phone:phone,email:email});
    // In modern JS if property name is equal to the variable name not necessary write ir twice
    list.push({name,phone,email});
    // showContact(list,-1);
}


// showContact(contacts,1)
addNewContact(contacts,'Axel','2134','erefasd@gamilc.om')
addNewContact(contacts,'Axelfff','2134','erefasd@gamilc.om')
showAllContacts(contacts)