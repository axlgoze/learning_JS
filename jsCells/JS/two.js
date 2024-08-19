// what is the street value?
//employee object with two properties
const employee = {
    firstName: 'Axl',
    age: 30
}

const street = employee.address?.street;

console.log(street);
// undefined


// conditional chaining is used to do not return an error message because of a null or undefine literal.