const write = {
    name: 'Juan Rulfo',
    country: 'México'
}
const anotherWriter = {...write}
write.name= 'Axel';
console.log(write);

// name: 'Axel',
    // country: 'México'


    // spread operator is used to expand the elements of an array or properties of an object. and to copy an object.