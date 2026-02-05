// let contacts = [{
// name: "Maxwell Wright",
// phone: "(0191) 719 6495",
// email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
// name: "Raja Villarreal",
// phone: "0866 398 2895",
// email: "posuere.vulputate@sed.com"
// }, {
// name: "Helen Richards",
// phone: "0800 1111",
// email: "libero@convallis.edu"
// }];



// let phoneNumber = (contactList) => {
//     contactList.forEach(element => {
//         console.log(element.phone);
//     });
// };

// let firstName = (contactList) => {
//     contactList.forEach((e,i)=>{
//         console.log(`index: ${i}: name: ${e.name}`)
//     });
// }

// let emails = (contactList) => {
//     contactList.forEach(function (element,i){ console.log(`index: ${i}: email: ${element.email}`)});
// }

// let emailsTwo = (contactList) => {
//     contactList.forEach(callback);
// }

// function callback(element){
//     console.log(`email: ${element.email}`)
// }


// phoneNumber(contacts);
// firstName(contacts);
// emails(contacts);
// emailsTwo(contacts);
// let a = 'hola';
// console.log("stasrt"); 
// throw a; 
// console.log("end");

// console.log("start"); 
// try {
//     throw 100;
// } catch (error) {
//     console.log("end" , typeof error);
// }



// let a = 10;
// try {
//     a = b; // First ReferenceError
// } catch (error) {
//     try {
//         console.log(b); // Second ReferenceError
//     } catch {
//         console.log("Second catch!"); // -> Second catch!
//     }
// } finally {
//     console.log("Finally!"); // -> Finally!
// }


function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(largest(1, 1, 2)); // -> 2
console.log(largest(1, 2, 3)); // -> 3
console.log(largest(3, 2, 1)); // -> 3
console.log(largest(2, 2, 1)); // -> 1


// function largest(a, b, c) {
//     return Math.max(a, b, c);
// }