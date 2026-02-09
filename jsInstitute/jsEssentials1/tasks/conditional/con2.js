// During the last modification of the program with the contact list, we allow the user to add a new contact with the data entered by the user while the program is executing. Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. They will have a choice of:

//     showing the first contact (first)
//     showing the last contact (last)
//     adding a new contact (new)

// When adding a new contact, check if the user has entered all the necessary data. If at least one of the three values is missing (name, phone, or email) don't add the contact.

// let contacts = [
//     {
//         name: "Maxwell Wright",
//         phone: "(0191) 719 6495",
//         email: "Curabitur.egestas.nunc@nonummyac.co.uk"
//     },
//     {
//         name: "Raja Villarreal",
//         phone: "0866 398 2895",
//         email: "posuere.vulputate@sed.com"
//     },
//     {
//         name: "Helen Richards",
//         phone: "0800 1111",
//         email: "libero@convallis.edu"
//     }
// ];

// let userInput = Number(prompt("Choose: \n1. showing the first contact\n2.showing the last contact\n3.adding a new contact"));

// switch (userInput) {
//     case 1:
//             if(!Number.isNaN(userInput)){
//                 console.log(contacts.length -1);
//                 alert(JSON.stringify(contacts.at(0)));
//             }
//         break;
//     case 2:
//             if(!Number.isNaN(userInput)){
//                 console.log(contacts.length -1);
//                 alert(JSON.stringify(contacts.at(-1)));
//             }
//         break;
//     case 3:
//             if(!Number.isNaN(userInput)){
//                 //pedir inputs al user
//                 let name=prompt("Enter the name: ");
//                 let phone=prompt("Enter the phine: ");
//                 let email=prompt("Enter the email: ");
//                 //crear objeto && pasar inputs
//                 let newContact = {
//                     name: name,
//                     phone: phone,
//                     email: email 
//                 }
//                 // añadir al arreglo
//                 if(name && phone && email){
//                     contacts.push(newContact);
//                     alert(JSON.stringify(contacts));
//                 }else{
//                     console.log("Missing data!");
//                 }
//             }
//         break;
//     default:
//         alert("Not a valid option or you don't choose any")
//         break;
// }



let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
