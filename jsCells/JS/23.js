const obj = {
    name: 'axel',
    lastName: 'Reyes'
}

console.log(obj.hasOwn(obj,'name'));
// error hasOwn is not a function

//hasOwn method is used to determine if an object has a property as its own that means it is not inherited.

//object.hasOwnProperty(property) -- this do not return error 'is not a function'

//is a static method which returns true if the specified object has the specified property as its own property.
