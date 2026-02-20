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


// let point0 = {
//     x:10, 
//     y: 20
// };

// let point2 = Object.assign({}, point0);
// let point3 = Object.assign({}, point0, {z: 100});
// let point4 = { ...point3, ...{z: 200, color: "red"}};


// let obj = (point) =>{
//     for (const key in point) {
//         console.log(`key: ${key}, value: ${ point[key] }`)
//     }
// }

// console.log(`Point 3 Object: ${obj(point3)}`)
// console.log(`Point 4 Object: ${obj(point4)}`)

// point3 === point4 ? console.log(`T`) : console.log(`F`);

// console.log(point4)
// console.log(`El punto es: ${JSON.stringify(point4)}`);

// let printObject = (obj) => {
//     for (const key in obj) {
//        console.log(`${key}:${ obj[key] }`)
//    }
// }



// let circle2 = {...circle1};

// circle1.radius = 200;
// circle1.center.x = 200;
// console.log("circle1: " , printObject(circle1));
// console.log("circle2: " , printObject(circle2));

// console.log(circle2.radius);
// console.log(circle2.center.x);

// console.log(circle1 === circle2); // false
// console.log(circle1.center === circle2.center);


let spaceShip = {
 	speed: 100,
 	cabin: {
	 	x: 100,
 	 	y: 100
 	},
    xWing: ["2",1,"three",4],
    color: "gray",
    modules: {
        propulssion: {},
        gravitySystem: [{},123,{
            mainKey: {
                fxb: "sydartha",
                four: {
                    "four dot one": "deepest level!!"
                }
            }
        }]
    },
    getState () {
        return spaceShip
    },
    met: () =>{
        return  typeof this.speed === "number" ? "spaceship" : "unknown"
    }
};

// let deepClone = function(obj) {
// let newObj = {...obj};
// for(property in newObj) {
//     if(typeof newObj[property] === "object") {
//         newObj[property] = deepClone(newObj[property]);
//     }
// }
// return newObj;
// // }
// console.log(spaceShip.getState());
// console.log(spaceShip.met());
// console.log(spaceShip["getState"]() );

// let spaceShipOne = {...spaceShip};
// console.log(spaceShipOne.speed);
// console.log("arrow: ",spaceShipOne.met());
let contacto = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}

};
// console.log(contact.tel);
// contact.tel = "100-100-1000";
// console.log(contact.tel);



// let contact = {
// 	_age: 36,
//     firstName : "David",
//     lastName : "Taylor",
//     get fullName() {return `${this.firstName} ${ this.lastName}`;},
//     get age() { return this._age;},
//     set age(a) { if( a > 0) this._age = a;}
// };


// for (const prop in contact) {
//     let desc = Object.getOwnPropertyDescriptor(contact, prop);
//     // console.log(prop);
//     console.dir(desc);
    
// }

// console.log(Object.getOwnPropertyNames(spaceShip));
// console.log(Object.keys(spaceShip));
// console.log(Object.getOwnPropertyDescriptor(spaceShip, "getState"));


let contact = {
    name: "Axl",
    email: "fasdlkfjadsklf"
};
Object.defineProperty(contact, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});

// console.log(Object.keys(contact));
// console.log(contact._age);
// console.log(Object.getOwnPropertyDescriptor(contact, "_age"));
// console.log(Object.getOwnPropertyDescriptor(contact, "name"));

let enumKeys = Object.keys(contact);
let allKeys = Object.getOwnPropertyNames(contact);
console.log(".keys:", enumKeys);
console.log(".getOwnPropertyNames:", allKeys);

