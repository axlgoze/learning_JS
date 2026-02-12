# js Essentials 2 course

## Module 1
---
## Classless objects

### Array as a complex type

Complex types (Objects and Arrays) are `data collections` – an ordered set of different values can be placed in one variable.
In `array`, individual values placed in a single variable are called elements, and are referred to by a number specifying their position in the collection (starts at 0).

### An object as a different type of array
From a formal point of view, an object can be treated as a special kind of array.

In computer science, arrays of this type are called association (we "associate" an element with a key) arrays or, in the theory of data structures, they are called `maps`

We  refer to the individual elements of an `object` by means of `keys`.

A `key` is simply a label (a name), which is unique within an object and unambiguously defines the selected element.

In objects, we call their component elements `properties`. Each property will consist of a `key` (or label) and a `value`.

The idea of objects comes from observing the surrounding reality. Practically everything in our environment, whether material (e.g. a car) or abstract (e.g. a contact in an address book) is a collection of certain components (properties).

We can name these elements, or properties, and assign them specific values. Properties define a given object.

The easiest way to create objects is

```js
// Object
let sampleObject = {
    id: 10, // property 1
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50 // property 4
};

sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);   // -> 10
console.log(sampleObject.name); // -> en to tre
console.log(sampleObject.delay);    // -> 100
```

key == name
property == object field.

## Literals

There are several equivalent ways to create objects. The simplest and most common is the use of `literal notation` (initializer notation).

```js
let contact = {};
```

We can modify an object, among other things, adding new properties. We add a property with the `tel` key.
The property is indicated by writing its name after the object name and names are separated by a dot. This is called **dot notation**.

> dot notation is the basic way of referring to the properties and methods of an object.

```js
contact.tel = "207-662-5412";
//object.key

console.log(contact);
console.log(contact.tel);

```

The key is a string. When creating an object, the key can be enclosed in quotation marks, although this is not necessary (JavaScript automatically interprets it as a string). However, this can be useful when you want to create a key consisting of several words.

```Js
let contact = {
    "first name": "Ronald"
};
```

> However, giving keys names consisting of many separate words is not the best idea.

If you need a multi-word name, it’s better to use  the Camel case notation.

## Deleting objects

The JavaScript engine uses a **Garbage Collector**, which decides for us whether the objects are still needed, and possibly removes them.
The JavaScript language doesn’t even provide for the possibility of explicitly deleting objects.

### Properties

#### Types

we can assign primitive values to variables, complex values such as arrays or objects, and functions.

```js
let nr = 10; 
let b = false; 
let str = "uno dos tres"; 
let arr = [10, 20, 30]; 
let obj = {
x: 10, 
y: 20
}; 
let fn = function(arg) {
    console.log(arg)
}; 

fn(123); //-> 123
```

Object properties can be treated in exactly the same way as variables – you can assign values of any type to them.

```js
let test = {
nr: 10, 
b: false, 
str: "uno dos tres", 
arr: [10, 20, 30], 
obj: {
    x: 10, 
    y: 20
}, 
fn: function(arg) {console.log(arg)} 
};

test.fn(123);
```

### Nested properties

If the property of an object is another object that has properties itself, then we are dealing with **nested properties**.

Referring to such fields using dot notation is intuitive, and we simply add another dot and key (property name).

```js
console.log(test.obj.x);
test.obj.y = 40;
```

### A function as a property type – a method

A function that is the property of an object will be called a `method`

> properties of objects describe their characteristics, methods describe their characteristic behavior, or ways of changing the state of an object.

One of the main reasons of methods is to affect the state of the object.

State (Properties): It is what the object is or has. They are static data (strings, numbers, booleans). 
Behavior (Methods): It is what the object does. They are functions that can check or change the state.

Objects can change dynamically during their lifetime.

- Adding
```js
let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

contact.firstName = "Ronald";
console.log(contact.notes); // --> undefined 
console.log(contact.firstName); // Ronald 
```

> If you try to read a non-existent property, the undefined value will be returned.

- Modifying a property
By default, there are no restrictions on modifying the values placed in object properties. a field can be an array and at some point of the program an obejct.

- Deleting

We use the keyword `delete` to indicate the property that is to disappear from the object.

```js
delete contact.firstName
```

## bracket notation

This method is similar to referencing an array field, except that we don't give the index of an element, but instead we give its key. Remember, the key is a string!

### Multi-words key

We can create an object containing a property whose key consists of several words.

However, we won’t be able to refer to this field later using a dot.


```js
let contact = {
	"first name": "Ronald"
};

contact["first name"] = "Tim";
contact.first name = "Tim";	// SyntaxError: Unexpected identifier
contact."first name" = "Tim";	// SyntaxError: Unexpected string
```

## Computed keys
Bracket notation is more often used when operating on computed keys.

It may happen that the **property** key we want to refer to will be **calculated** during the operation of the program


```js
let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};

for(i=1; i<=2; i++) {
    let key = "email_" + i; // Js automatically converts the number to a string
    console.log(key);
    console.log(`${key}: ${contact[key]}`);
}
```

## Property existence test and property enumeration

JavaScript will behave the same if the field exists but has no value assigned to it.

```js
if(contact.notes) {  // if prop true or not undefined
    console.log(contact.notes);
}
```

with a new value being assigned to the property (if the field does not exist, it will automatically be created).

```js
if(!contact.notes) { // if prop undefined
    contact.notes = "create the field";
}
```
It’s good practice to test if a given object field exists before trying to read it. 

if we try to refer to a non-existent nested field the program will end up throwing out an exception, which if not handled with the try ... catch, will **terminate** our program.


```js

let contact = {
    firstName: "Ronald",
    email: {
        private: "RonaldSMurphy@freepost.org",
        work: "rsmurphy@briazz.com"
    }
};

console.log(contact.tel); // undefined
console.log(contact.email.personal); // exception! programm will stop


```
The easiest way to protect yourself is to either use the try ... catch block, or simply check before calling if the object and required field exist:

```js
if(contact && contact.email){
    console.log(contact.email.private)
}


//simpler form
contact && contact.email && console.log(contact.email.private);
```

## Existence test using "in"

```js
if("notes" in contact) { // if true
    console.log(contact.notes);
}
```

Remember that the property name is a string, and this is how we must use it with the keyword `in`.

## Enumeration "for ... in"

```js
let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name
   console.log(x);  
}
```

The names of all the properties (keys) of the contact object are assigned to the variable `x` in turn.

To **get** to the **value of a given field**, we use bracket notation

```js
for(x in contact) {
   // print property value 
    console.log(contact[x]);
}
```

```js
for(x in contact) {
    // print property name, type and value
   console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}
```

## The Object.keys method

Returns an array of property names. which we can use in any way we want.

```js
let keys = Object.keys(contact); // ["tel", "email", "luckyNumber"]
```

<!-- acomodar titulos y subtitles -->

## References

### The const object can be modified

According to JavaScript documentation, "a constant cannot change through re-assignment" and "a constant cannot be re-declared".

In the case of complex types (i.e. arrays and objects) variables and constants (the `var`, `let`, `const` keywords) do not contain the entire object. They only contain the object reference. Imagine **the reference as an address indicating where the object is really stored**. changes inside an object – adding a new property, changing a value, etc. – do not affect the reference.

> References or addresses cannot be changed.


const is designed to protect against a re-declaration or assignment of a new object.

There are, of course, methods to protect objects, or more precisely their properties, from changes.

### Comparing objects

```js
var point1 = {x: 10, y: 20};
var point2 = {x: 10, y: 20};

console.log(point1 === point2);     // false (independent objects, different references)
```

```js
let point3 = point1;

console.log(point1 === point3);     // true
```

```js
point3.z = 40;

console.log(point3.z);  // 40
console.log(point1.z);  // 40
console.log(point2.z);  // undefined
```

Using a reference stored in `point3`, we modify the object by adding a `z` field to it. The change is visible in the point3 and point1 variables, because they contain references to the same object.

> JavaScript does not have a ready-to-use mechanism to compare two objects by their properties (called **deep comparison**).

### Coping objects (coping references (), cloning, merging)

To save the reference to a new variable, and copy the properties of the source object to the target one by one use the `Object.assign` method.

This method takes the **target object as the first argument**, to which **the fields from other objects will be copied**. **The second** and subsequent **arguments** (there is no limit to the number of objects) will be **used as the source of the properties to be copied**. If a property with the same name as the source object already exists in the target object, it will be overwritten with a new value (the target is overwritten with the source).

All the properties of each source are copied to the target object, with the objects copied in the order in which they occur as arguments of the Object.assign method (from left to right).

The order is important for the same property names in several source objects.

```js
let point0 = {
    x:10, 
    y: 20
};

let point2 = Object.assign({}, point0);
let point3 = Object.assign({}, point0, {z: 100});

let obj = (point) =>{
    for (const key in point) {
        console.log(`key: ${key}, value: ${ point[key] }`)
    }
}

console.log(point3 === point0) //false
```

A convenient alternative to `Object.assign` is to use the **spread operator**. differences are subtle.

```js
let point0 = {x:10, y: 20 };
let point2 = { ...point0};
let point3 = { ...point0, z: 100};
```

The three dots preceding the object cause it to be *spread* out *into* individual fields, which are placed *in the new object*. The operation can be performed on many objects at the same time, additionally completing single fields according to normal syntax.

```js
let point4 = { ...point3, ...{z: 200, color: "red"}};
console.log(point4); // --> {"x":10,"y":20,"z":200,"color":"red"}
```

