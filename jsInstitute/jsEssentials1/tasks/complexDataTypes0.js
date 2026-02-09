// const ticket = {
//     startingStation : 'sta martha',
//     endStation : 'constitution',
//     ticketPrice : 200
// }

// console.log(ticket);
// console.log(ticket.ticketPrice);
// console.log(ticket.startingStation);
// console.log(ticket.endStation);

// const person = {
//     name : 'axl',
//     surName: 'Reyes'
// }

// console.log(person.name);
// console.log(person.surName);


const library = [
    {
        title : 'Speaking javascript',
        author : 'Axel Rauschmayer',
        pages: 460
    },
    {
        title : 'Programming javascript applications',
        author : 'Eric Elliot',
        pages: 254
    },
    {
        title : 'Undestanding ECMAScript 6',
        author : 'Nicholas C. Zakas',
        pages: 352
    },
]


console.log(library);
library.unshift({title: 'Learning Javascript Design Patterns', author: 'Addy Osmani', pages: 254 });
console.log(library);

const newArr = library.slice(-2);
console.log(newArr);

library.shift();
console.log(library);
console.log(library.length);

const totalPagesFirst = library[0].pages;
const totalPagesSecond = library[1].pages;
const totalPagesThird = library[2].pages;
console.log(totalPagesFirst);
console.log(totalPagesSecond);
console.log(totalPagesThird);
console.log(totalPagesFirst + totalPagesSecond + totalPagesThird);