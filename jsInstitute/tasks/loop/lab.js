let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];


let input;

do {
    input = Number(prompt("Choose an option:\n1. display the first contact (first)\n2. display the last contact (last)\n3. display all contacts (all)\n4. add a new contact (new)\n5. exit the program (quit)\n",1));
    if(input==0)
        break;

    switch (input) {
            case 1:{
                for (let index = 0; index < contacts.length; index++) {
                    console.log(`Name: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
                }
                break;
            }
            case 2:{
                console.log(`Name: ${contacts.at(-1).name}\nPhone: ${contacts.at(-1).phone}\nEmail: ${contacts.at(-1).email}`);
                break;
            }
            case 3:{
                for (let key of contacts) {
                    console.log(`${key.name},${key.email},${key.phone}`);
                }
                break;
            }
            case 4:{
                let name = prompt("Enter name: ");
                let phone = prompt("Enter phone: ");
                let email = prompt("Enter email: ");
                let contact = {
                    name: name,
                    phone: phone,
                    email: email
                }
                contacts.push(contact)
                break;
            }
            case 5:{
                console.log("bye");
                break;
            }
            default:{
                alert("Wrong option");
            }
            }
} while (input!=5);