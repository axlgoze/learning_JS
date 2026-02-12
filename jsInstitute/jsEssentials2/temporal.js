// let contact = {
//     firstName: "Ronald",
//     // email: {
//     //     private: "RonaldSMurphy@freepost.org",
//     //     work: "rsmurphy@briazz.com"
//     // }
// };

// if(contact && contact.email){
//     console.log(contact.email.personal)
// }
// console.log(contact.tel); // non-existent field --> undefined
// // console.log(contact.tel.private) // EXCEPTION
// console.log(contact.tel); // undefined UNREACHED


// if("firstName" in contact) { // if true
//     console.log(`firstName exist in ${contact} which is: ${contact.firstName}`);
// }


let point0 = {
    x:10, 
    y: 20
};

let point2 = Object.assign({}, point0);
let point3 = Object.assign({}, point0, {z: 100});
let point4 = { ...point3, ...{z: 200, color: "red"}};


let obj = (point) =>{
    for (const key in point) {
        console.log(`key: ${key}, value: ${ point[key] }`)
    }
}

console.log(`Point 3 Object: ${obj(point3)}`)
console.log(`Point 4 Object: ${obj(point4)}`)

point3 === point4 ? console.log(`T`) : console.log(`F`);

console.log(point4)
console.log(`El punto es: ${JSON.stringify(point4)}`);