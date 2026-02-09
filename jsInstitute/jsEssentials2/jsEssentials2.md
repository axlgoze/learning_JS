# js Essentials 2 course

## Module 1
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