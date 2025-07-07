# JS Institute README file

## JavaScript

JS is an interpreted language.

JS is a high-level language (i.e. relatively easy to understand for people and separating us from the hardware details).

The interpreter is the js engine built into the browser.

We can also execute JS code with node.JS.

Most modern JS engines use the _Just in time compilation technique (JIT compilation)_ which consist in compiling code fragments during the execution of the program.

> The success of a program depends on the quality of the instructions. Precise and unambiguous instructions.

> Someone who develops must know exactly what they want to achieve and how they wan to achieve it.

**client-side** programming is loaded together with the page in the browser, on the user's side, and the interpreter which is a part of the web browser allows for its execution.

95% of web pages worldwide embed JS code within them.
from the beginning (1995 by Brendan Eich) web pages uses JS on the client-side to add interactivity and dynamically change the content.


Disadvantages
- JS is limited in functionality by the fact that browsers, for security reasons, run script code in a sandbox environment which doesn't allow for access to local files and resources.
- the code is not compiled: everyone can see our solution in an easy-to-read form and use it without our permission to write their own program.

Advantages
- active and supportive community
- huge number of ready-to-use libraries. The language its easy to learn, and allows us to focus on the job instead of fighting with the syntax.
- Doesn't require expensive tools to work with it.
- _dynamic typing characteristic of JS_: we can store data of any type in a variable.

## Development tools

In most cases other programming languages requires a compiler/interpreter and a code editor.

JS only needs a code editor, an interpreter and a debugger.

here are some online development environment (known as playground) used as training and testing platforms.

- [JSFiddle](https://jsfiddle.net/)
- [CodePen](https://codepen.io/open)
- [jsBin](https://jsbin.com/)
- [Plunker](https://plnkr.co/)

Depending on the level of sophistication, the complexity of the project, or environment for which we write our programs (client-side, server-side, mobile), other tools may also be good:

- package managers -> enabling the management of libraries (containing ready-made solutions that we can use in our programs) or components of the development environment (e.g npm or yarn).
- task runners and module bundlers -> to automate the process of sw development and merge the resulting code from many files and libraries.
- testing frameworks -> allows for automatic testing of the correctness of our program in search of potential errors (e.g. mocha, jasmine or jets)
- security analyzers -> used to control the security of our solution (e.g. snyk, RetireJS or OWASP Dependency check)

## Interpreter

> The **Interpreter** functions as a runtime environment for our program

The interpreter checks whether we have made any formal errors, for example, making a typo in the name of a function or forgetting to close a parenthesis, and then it executes the program instruction by instruction.

The choice of JS interpreter will depend on which platform we write our software. for example, if we want to write a simple server-side app, we will choose **node.js** environment. In case of the client-side, our interpreter will simply be the web browser you already have installed.

| Interpreter functions   |
|------------------|
| The JS interpreter scans the program before running it, looking for errors in its syntax|
|Searches for all variable declarations and moves them to the beginning of the range in which they were declared (to the beginning of the program if they are global, to the beginning of the block if it is a local `let` declaration, or to the beginning of the function if it is a local `var` declaration), all this happens in the interpreter memory, and the changes are not visible in the code.|

### Debugger

a debugger is a tool that allows you to slow down or even halt the execution of a program, run instructions step by step, and look at and analyze the state of the program at any given moment.

all modern web browsers are equipped with developer tools, we have a debugger.

How to enable developer tools. try the following key combinations:

- macOS
command + option + i
---

### HTML
**HyperText Markup Language** is a set of tags used to describe the structure of a website. It allows us to give a page the format of a document containing sections, headers, paragraphs. lists, and the like.

#### `script` tag
The JS code to be executed by the browsers on the page must be attached to the `<script>` and `</script>` tags, but is only recommended when the code is short. Another approach is to use the `src` attribute to point to a separate file that contains the JS code.

HTML is read line by line by the browser, and script tags are executed right at the moment when the browsers parses the `script`tag.

usually `<script></script>` tags are inserted in the page header between `<head>` and `</head>` tags.

we can use the next attributes:

- `defer`: means that the script should be executed after the whole page is loaded.
- `async`: means that the script will be executed immediately, but in parallel to parsing the rest of the page.
- `src`: to indicate a separate JS file that will be attached.

### CSS
**Cascading Style Sheets**, is a language used together with HTML to describe the appearance fo a page and its elements.

> HTML describes structure
> CSS describes presentation

que es js
diferencia lenguaje inter y compi

> Entering `about:blank` in the address bar of your browser will generate and load a minimal blank HTML page into the current tab.

> In a browser, the path to open a local file must bre preceded byt: file:///
> The rest of the string is the path to the file on our local computer that we want to open in the browser.

> The basic toolkit needed to effectively develop JS code consist of two elements: code editor, interpreter.


# MODULE 2
Variables, Data types, type Casting, and comments

## Variables

> a variable can be imagine as a container in which you can store certain information.

A variable must be declared before use. Declaring is simply "reserving" the name of the variable.


> In JS, a variable name must not start with a digit.
> JS interpreter distinguishes between lower-case and upper-case letters

There is a set of reserved words that cannot be used to name variables, here are some of them:

- abstract
- break
- await
- boolean
- catch
- continue
- do
- final
- function
- import
- goto
- debugger
- in
- class
- native
- let
- super
- transient
- void
- volatile
- yield
- protected

## Declaring

For declaration we use the keywords:
`var` and `let` for variables and `const` for constants

> one of the basic difference between let and var is that let prevent us from declaring another variable with the same name (an error is generated). Using var allows you to re-declare a variable, which can lead to errors in the program execution.

## Initializing variables
After a declaration, the variable mut be initialized, it should be given its first value. To assign it, we use the operator =

> It is important to enter the first value into the variable before trying to read, modify, or display it.

### Strict mode
using this statement we force the interpreter to behave according to modern JS standards.
`use strict` muts be placed at the beginning of the code. with this strict mode using a variable without its previous declaration is treated as an error.

### Changing variable values

> Variable in JS are untyped (dynamically typed). This means that JS will not control what type of value we store in the variable.

## Constants
Constants are also used to store certain values, but once values have been entered into them during the initialization, they can no longer be modified.

> const type is simultaneously declared and initialized.

```
const greeting; // --> Uncaught SyntaxError: Missing initializer in const declaration.
greeting = "Hello!";
```

> A change in the constant is impossible. Typical examples for const are path to resources, tokens , and other data that never change throughout the lifetime of the script.

## Scope

The scope of a variable depends on where it is declared.

> One of the basic elements that influence the scope of variables is a **program block**

### Program blocks
we can separate code of a program into blocks (created by curly brackets). Blocks are usually associated with conditional instructions, loops, or functions.

> Indentation increases the readability of the code.

#### The scope of let and var
if we declare let or var outside the code blocks, they will be **global** meaning their names will be visible throughout the program, outside blocks, inside blocks, in functions, and so on.
we will be able to refer to them anywhere by their names, and or course have access to their values.

if we declare something using let or const inside a block will create a `local variable` or constant. It will be visible only inside the block in which was declared and in blocks that can optionally be nested in it.

## var
no matters where it is declared (inside or outside blocks) it will be global.

> Var are sometimes local too. In what situation can we declare a local variable using var? only inside a function.

## functions
is just a separated piece of code that you name. If you want to use it somewhere, you simply refer to it using that name (call the function).

So, if we declare a variable using the keyword var inside a function its scope will be limited only to the inside of that function.

## Variable shadowing
it means that we can declare a global variable and a local variable of the same name.
In the local scope, in which we declare a local variable using its name, we will have access to the local value (the global variable is hidden behind the local, so we do not have access to it in this local scope)
**This is not the best programming practice, we should avoid such situations**
```
let counter = 200;
console.log(counter); -> 200
{
    let counter = 100;
    console.log(counter); -> 100
}
    console.log(counter); -> 200

```
Shadowing may not only be concerned with the situation in which a local variable covers a global variable. if nested scopes appear, the local variable declared in a more nested block will overshadow the local variable of the same name declared in the external block.

In most cases, this is not desirable, so try to avoid giving the same name variable names to multiple variables, regardless of where you declare them.

## Hoisting

> all variables **should** be declared before use

Means that variable declaration (not initializations) will be moved by the interpreter to the beginning of the range (depending of the type variable and its scope).


### Data types and type casting

## data types and type conversions

> JavaScript language is weakly typed. it allows you to change the data type stored in one variable.

> Each type of data is connected with certain operations we can perform on it.

In JS data types are divided into:

- **primitive**:
  - Boolean
  - Number
  - BigInt
  - String
  - Symbol
  - undefined
- **complex**


> primitive data types will be atomic, it means that will not be possible to extract components from it. The value is one, indivisible element.

## Literals
literals are a way of noting (record) specific values (data) in the program code.
literals represents data.

> Using literals is not the only way to create variables of the given primitive types. The second option is to make them using `constructor` functions.

##### Numeric Literals:
- Example: `42`, `3.14`, `-7`

##### String Literals:
- Example: `'Hello'`, `"World"`, `` `Hello, ${name}` `` (template literals)

##### Boolean Literals:
- Example: `true`, `false`

##### Object Literals:
- Example: `{ name: 'Juan', age: 30 }`

##### Array Literals:
- Example: `[1, 2, 3, 4]`, `['apple', 'orange']`

##### Function Literals:
- Example: `function() { return 'Hello'; }` (though they are usually assigned to variables)

##### Special Literals:
- `null`: represents the absence of a value.
- `undefined`: represents a variable that has been declared but does not yet have a value.


## The `typeof` operator

> an operator is a symbol or name that represents some action to be performed on the indicated arguments

`typeof`operator is unary ( it only takes one argument) and inform us of the type of data indicated as a given argument. The argument can be either a literal or a variable. The `typeof` operator returns a string with one of the fixed values assigned to each of the types.

```
console.log(typeof number);           // "number"
console.log(typeof string);           // "string"
console.log(typeof booleanTrue);      // "boolean"
console.log(typeof booleanFalse);     // "boolean"
console.log(typeof object);           // "object"
console.log(typeof array);            // "object"
console.log(typeof func);             // "function"
console.log(typeof nullValue);        // "object"
console.log(typeof undefinedValue);   // "undefined"
```

### Boolean
Logical data type. can only take on of two values: `true` or `false`. It's mainly used as a conditional expression needed for deciding what part of the code should be executed, or how long something should be repeated (flow statement).

Booleans are also referred as a **flag**, a variable that signals something that can be either present or absent, enabled or disabled, etc.

We can often see that boolean flag names are prefixed with "is", to show the intent of checking this for true/false values.

```
let isDataValid = true;
let isStringTooLong = false;
let isGameOver = true;
```

### Number
Main numeric type in JS that represents both real numbers and integers. To ensure correctness of calculations, the integer values should be limited in JS to the range of `-(253 - 1)`to `(253 - 1)`.

> Numbers allow for all typical arithmetic operations. And are represented in decimal form -as default-

If a literal describing a numbers is preceded by an appropriate prefix, we can present it in hexadecimal, octal or binary:

```
let a = 10,       // Decimal
let b = 0o10,     // Octal
let c = 0b10,   // Binary
let d = 0x10;      // Hexadecimal

console.log(a);        // 10
console.log(b);          // 8
console.log(c);         // 2
console.log(d);    // 16


```

we can also write numbers in exponential form:

```
let largeNumber = 9e3;     // 9000
let smallNumber = 1.23e-3; // 0.00123

console.log(largeNumber);     // 9000
console.log(smallNumber);   // 0.00123
```

#### Three additional special values:

`Infinity`
`-Infinity`
`NaN`: It is more a notification that some arithmetic action (or mathematical function) could not be performed because the argument is either not a number, or cannot be converted to a number.

```
let a = 1/0
console.log(a) --> infinity
```

### BigInt
this type is not used often. It allows to write integers of virtually any length. We can use mathematical operations in the same way as on Numbers, but there is a difference when dividing.

The division result will always rounded to the nearest whole number. Also you cannot use another types in arithmetic operations on BigInts (this will generate an error).

BigInt does not have its own equivalent of `Infinity` or `NaN`, such actions will generate an error.

BigIn literals are numbers with the **n** suffix.

```
let big = 12345553459345934285348584n;

console.log(7n / 4n); --> 1n
```

### String
This type represents a sequence of characters forming a piece of text. Common operations on text include concatenation, extraction of the substring, and checking the length of the string. Strings are extensively used in programming and even more in web development, as both HTML and a big part of Internet content is text.

The most common use of text in web development includes:
- links and paths to resources;
- tokens;
- checking user-filled forms and input
- dynamic content generation

String, like other primitives, are immutable, so when we want to change even one letter, we create a new string.

String literals can be created using single or double quotes.

you can place single quotes inside the string, and they will be treated as ordinary characters, this will also work in the opposite situation.

```
let message1 = "The vessel 'Mars' called at the port"
let message2 = 'Cyclone "Cilidia" to pass close to Mauritius'
```

If  you want to put a single or double quote inside the string, you can also use the escape character - backslash. A quote mark preceded by the \ will be interpreted as ordinary characters that are part of our string.

```
let message1 = "The vessel \"Mars\" called at the port"
let message2 = 'Cyclone \'Cilidia\' to pass close to Mauritius'
```

Performing arithmetic operations (Multiplication, Division, or Subtraction) on String values, will usually end in an error (NaN).

The js Interpreter seeing the operators `-`, `*`, or `/` tries to interpreter the given values as numbers, or convert them into numbers. **So if the characters strings consists of digits, the automatic conversion will be successful and we will return the result of the arithmetic as a Number type value**. If the character string cannot be interpreted (and converted) we will get the NaN result.

```
let path = "C:\\" + "Windows";
console.log(path) --> C:\windows

let path = "C:\\" - "Windows";
console.log(path) --> NaN

let test = "100" - "10";
console.log(test) --> 90
console.log(typeof test) --> number
```

#### String interpolation ${}
Allows you to treat a character string as a template, in which you can place values in selected places, such as those taken from variables.

Use backticks when interpolation.

```
let country = "Malawi"
let continent = "Africa"

let sentence = `${country} is located in ${continent}.`;
console.log(Sentence); --> Malawi is located in Africa
```

### method
is a special kind of function that belongs to an object.

### Objects
are complex data types, which can consist of many values (Stored in properties) and methods. If you want to call the method of an object, you write the name of the method after a dot.

```
console.log()
console.time()
console.timeEnd()
```

### autoboxing
All data of primitive types such as Number, BigInt, Boolean or String have corresponding objects to which they can be converted.

Each of these objects will have methods designed for a specific data type. So, if a dot appears after a literal representing a primitive type, or after a variable containing this type of data, the JS interpreter tries to treat this value as an object and not a primitive.

```
let river = "Mekong";
let character = river.charAt(2);
console.log(character) --> k
```

After the operation is completed, the interpreter removes the temporary object. So from our point of view, it looks like we just called a method on a given primitive type.

Commonly used string methods and properties:
- length: property, returns the number of characters in a string.
- charAt(index): method, returns the character at the index position
- slice(beginIndex, [optional] endIndex): method, returns a new string that is created form the characters between the arguments. endIndex (excluded).
- split(separator, [optional] limit): method, splits the string into substrings whenever the separator is found in a string, and returns an array of those substrings.


### undefined
The `undefined` value it's the default value that all variables have after a declaration if no value is assigned to them.
You can also assign the undefined value to any variable, but should be avoided, because if we nee to mark a variable as not holding any meaningful value, we should use `null`.

### Symbol
Coming soon.

### null
It's used to indicate that the variable does not contain anything, and most often it is a variable that is intended to contain values of complex types.
we can assume that the `undefined` value is assigned to uninitialized variables automatically, but if we want to explicitly indicate that the variable does not contain anything, we assign it a `null` value.

> typeof null -> object


## Type conversions
We can use `constructor`functions to create primitives, not just objects, the following functions will return primitives of a given type:
- `Boolean`
- `Number`
- `BigInt`
- `String`

Most of these functions can be called without any arguments. In such situation:

- `Boolean` will be default create and return the value of false.
- `Number` will be default create and return the value of 0.
- `String` will be default create and return an empty string - primitive "";

The BigInt requires you to pass some initial value to it. Otherwise and error will be returned.

```
const str = String();
const num = Number();
const bool = Boolean();

console.log(str); -->
console.log(num); --> 0
console.log(bool); --> false

const big1 = BigInt(42);
console.log(big1); --> 42n

```

### Conversions
Conversions in JS happen automatically in specific situations, but can also be used explicitly through functions like `String()` or `Number()`. These functions also accept arguments in parentheses and (if possible) wil convert them to a given type.

```
const num = 42;

const strFromNum1 = String(num); --> "42"
const strFromNum2 = String(8); --> "8"
const strFromNum1 = String(true); --> "true"
const strFromNum1 = Number("132"); --> 132
const strFromNum1 = Boolean(0); --> false
```

### Conversion to String
The easiest to understand, as they try to directly change the value to a string, and **this can be done for all primitive types.**

### Conversion to Number
```
console.log(Number("0x11")); // --> 17
console.log(Number("12e3")); // --> 12000
console.log(Number("Infinity")); // --> Infinity
console.log(Number("text")); // --> NaN
console.log(Number(14n)); // --> 14
console.log(Number(12345677655345n)); // --> 12345677655345
console.log(Number(undefined)); // --> NaN
console.log(Number(null)); // --> 0
```

### Conversion to Boolean

The value `false`is always returned for:

- 0
- NaN
- empty string
- undefined
- null

```
console.log(Boolean(0)); // --> false
console.log(Boolean(NaN)); // --> false
console.log(Boolean("")); // --> false
console.log(Boolean(undefined)); // --> false
console.log(Boolean(null)); // --> false
```

### Conversion to BigInt
We require a Number or String representing a number as value to be converted. Values for conversion can be given in the default decimal form, as well hexadecimal, octal or binary form.
we can use exponential notation, but only for number arguments.
Unlike other conversions BigInt will thrown an error, and will stop the program when unable to convert a given value.

```
console.log(BigInt(11)); // --> 11n
console.log(BigInt(0x11)); // -->  17n
console.log(BigInt(11e2)); // --> 1100n

console.log(BigInt(true)); // --> 1n

console.log(BigInt("11")); // --> 11n
console.log(BigInt("0x11")); // --> 17n

console.log(BigInt(null)); // --> TypeError
console.log(BigInt(undefined)); // --> TypeError
console.log(BigInt(NaN)); // --> RangeError not integer
```

### Implicit Conversions
Conversions can also happen automatically, and they happen all the time.

```
 const str1 = 42 + "1";
 console.log(str1); // --> 421
 console.log(typeof str1); // --> String

const str2 = 42 - "1";
console.log(str2); // --> 41
console.log(typeof str2); // --> number


```

> null = false = 0
> true = 1
> null = NaN
> undefined = NaN

## DATA TYPES and TYPE CASTING

### Complex data types

#### Object
Objects are usually used it as a structure known in computer science as a record.

**record** is a collection of named fields (key-value pairs). In JS these fields are usually called properties.

records (objects) allow you to store multiple values of different types in one place.

The easiest way to create an object is using the curly bracket literal.

```
let myObject = {}
console.log(typeof myObject); // --> object
```

Properties are separated by commas. A specific property can later be referred to with dot notation. This notation requires the name of the object ( a literal name ot the name of a variable containing the object) to be followed by a dot, followed by the field name.

```
console.log(yourObject.prop1); // --> 600
console.log(yourObject.prop2); // --> "text"
```

> The properties of an object, are made available with a dot and key name.

we can create, modify and delete properties.
```
console.log(user.name); // --> Axel

console.log(user.age); // --> 60
user.age = 70;
console.log(user.age); // --> 70

console.log(user.phone); // --> undefined
user.phone = "12345678";
console.log(user.phone); // --> 12345678
delete user.phone;
console.log(user.phone); // --> undefined

```

#### Array

This structure only stores values of any type, without any key associated.

> The elements of an Array are ordered (but not necessarily sorted) and take up consecutive, numbered positions inside it.

The number of the field where a particular value in the array is located is called an index or a position. The index stars from 0.

The easiest way to create an array in JS is to use the array literal (square brackets). The elements will be inserted later (which will be separated by commas).

Referring to a particular array element, we use bracket notation, after the name of the array variable.

```
let days = ["Mon","Tue","Wed","Thu","Fri"];
console.log(days[0]); // --> Mon
console.log(days[1]); // --> Tue
console.log(days[2]); // --> Wed
console.log(days[3]); // --> Thu
console.log(days[4]); // --> Fri

days[5]="Sat";
console.log(days[5]); // --> Sat

let emptyArray = []
console.log(emptyArray[0]); // --> undefined
```

How we can add a new element to an existing array?

The easiest way would be to assign a new value to a specific position using bracket notation.

> For the interpreter, it does not matter if there is already something in this index or not. Just places a new value in there.

```
let animals = [];

animals[0] = "Gorilla"
animals[2] = "Cat-Dog"

console.log(days[0]); // --> Gorilla
console.log(days[1]); // --> undefined
console.log(days[2]); // --> Cat-Dog
```

The array can contains different data types, also Arrays

let arr = [['hello',123,false],['bye',32.12,true]];

we can access to the elements of this nested array using multiple square brackets.

console.log(arr[0][1]) => 123
console.log(arr[0]) => ['hello',123,false]
console.log(arr[1][1]) => 32.12

> Note that the internal arrays do not have to be the same length.

### What can arrays be useful for in practice ?

let users = [
              {
                name: 'axel',
                surname: 'Reyes',
                age: 30,
                email: 'axrey@gmail.com'
              },
              {
                name: 'brayan',
                surname: 'Flores',
                age: 31,
                email: 'baflor@gmail.com'
              }
            ]

console.log(users[0].name) => axel
console.log(users[1].email) => baflor@gmail.com

we can add a new user

users[2] =    {
                name: 'brayan',
                surname: 'Flores',
                age: 31,
                email: 'baflor@gmail.com'
              }


you can use the `instanceOf` operator to be sure that a variable contains an Array
```
console.log(arr instanceOf Array) --> true/false
```
`instanceOf` operator is a two-argument operator which requires the tested variable (or literal) and object class to be specified.

Arrays as objects has methods and properties.

- length

property to get information about the length ( the number of elements) of the array (including empty positions between existing elements).

- indexOf

method used to search the array to locate a given value. If the value is found will return its position(index). the method returns -1 if is not found.

- push

method that places the element given as its argument at the end of the array.

- unshift

method that adds an element to the beginning of the array.

- pop

methods that allows you to remove the las element from the array.

- shift

method that removes an element from the beginning.

- reverse

method reverses the order of elements in the array.

- slice

method that allows you to create a new array from selected elements. It takes either on or two integer values as arguments.

```
arr.slice(1);  --> all elements from the index given are copied.
arr.slice(1,9); --> copy from the index to the element specified as second argument.
arr.slice(1,-9); --> all elements from the index given are copied. Except for the specified number of the las elements.
arr.slice(-1); --> The specified number of the last elements are copied to the end of the array.
```

- concat

method that creates a new array by attaching elements from the array given as an argument to the original array elements.

```
let allNames = arr1.concat(arr2);
```

> autoboxing: automatic conversion of a primitive to an object related to that object.
> Objects are used as records.****

#### Comments

comments are just plain text, totally ignored by javascript interpreter, that usually serve to explain a certain piece of code, which for some reasons may be not be fully legible. we have two types: single line and multiple-line (block comment).

```
// single line comment


/*
  multi
  line
  comment
*/
```

uses of comments:
- to give an explanation in complex code.
- situations where the code behaves differently than expected and you need to show that it is intentional.
- Documentation
we can use comments to document code. There are tools that can automatically generate documentacion from comments. like JSDoc.
- code Toggle: to check some options quickly


# MODULE 3

### Assignment, arithmetic, and logical operators

operators are symbols used to perform certain actions to arguments (called operands).

operator can be both values and variables.

operators can be categorized in several ways:

unary (one operand)
binary (two operands)
ternary (three operands)

prefix operators (occurring before the operand)
postfix  operators (occurring after the operand)
infix operators (between operands)

by context:

- Assigment
- Arithmetic
- Logical
- Conditional

#### Assigment Operators

Operators that allows for the assigning of values and variables and constants.

```javascript

let a = 100;

```

the equal operand assigns the value of the right operand to the left operand.
If several assignment operators appear in a sequence, the order from right to left applies.

```javascript
let year = 2050;
let newYear = year = 2051;
```

#### Arithmetic Operators

Express mathematical operations.

All arithmetic operators (Except addition) will try to implicity convert values to the Number type before performing the operation.

The adding operator will convert everything to a String if any of the operands is a String type, otherwise it will convert them to a Number like the rest arithmetic operators.

In general, it is a good habit to use parentheses to force the precedence and order of operations, not just arithmetic.

```javascript
const x = 5;
const y = 2;

console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25
```

##### UNARY Arithmetic Operator

unary means operating on a single operand.

Among them there are the plus + and minus - operators.

Both operators convert operands to the Number type, while the minus operator additionally negates it.

```javascript
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number
```

##### Unary increment and decrement operators

The **posfix** version  (post increment) performs the operation by changing the value of the varaible, but returns the value before the change.

```js
console.log(n1++);
```

is interpreted as:

```js
console.log(n1);
n1 = n1 + 1;
```

The **sufix** version (pre increment) performs the operation and returns the new value.

```js
console.log(++n1);
```

is interpreted as:

```js
n1 = n1 + 1;
console.log(n1);
```

| Expression | When the increment happens | Returned value                         |
|------------|----------------------------|----------------------------------------|
| `a++`      | After                      | Original value (before increment)      |
| `++a`      | Before                     | New value (after increment)            |

##### Compound Assignment Operators

Bynari arithmetic operators can be combined with the assigment operator

`+=`
`-=`
`*=`
`/=`
`%=`
`**=`

each of these takes the left value and modifies performing an arithmetic operation using the right operand value.

```js
let x = 10;

x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4
```

in resume assigment operators do

```js
x = x + n
x += n
```

##### Logical operators

1. Conjunction
`logical AND => &&`
2. Alternative
`logical OR => ||`
3. Negation
`logical NOT => !`

Negation changes the logical value of the operand to its opposite.

##### Logical operators and non-Boolean values

NOT operator will convert temporaly to a Boolean value and onlye then is treated with the appropieate operator action.
Always return true or false.

> Double negation is used to convert any type to Boolean

```js
let nr = 0;
let name = "Alice";

console.log(!nr); // -> true

console.log(!!nr); // -> false
console.log(!!name); // -> true
```

Evaluation is simply an attempt to convert an operand to a Boolean-type value.

The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. The OR operator will return its first operand if it evaluates to true, and the second operand otherwise. Evaluation 

```js
console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

```

> Empty string = false

Both operators also use short-circuit evaluation. Means will return the fisrt operand evaluation and no other check will be performed.

```js
let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0
```

binary logical operators can be used in combination with the assignment operator, creating a logical `AND` assignment ``&&=`` and a logical ``OR`` assignment ``||=``.

```js
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false
```

The instruction a ``&&= false`` means exactly the same as ``a = a && false``

#### String, comparison, and other JS operators

##### String operator

Concatenation ``+``

converts everything to a string if any operadns is string type

```js
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;

console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string
```

##### Compound Assignment Operators


```js
let sentence = "Happy New ";
sentence += "Year ";
sentence += "s"
```


##### Comparison operators

Comparison operators are used to check the equality or inequality of values. All comparison operators are binary, and all of them return a logical value representing the result of the comparison, true or false.



You can also use them to compare strings that do not represent numbers, but the algorithm of this comparison is quite complex, and the comparison itself is not very useful. By way of simplification, single characters of both strings are tested on the same positions. It is assumed that the values of the single characters correspond to their positions in the alphabet (the letter b has a higher value than the letter a). Upper-case letters have lower values than lower-case letters, and digits have even lower values.

```js
console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true
```

##### other operators

1. typeof:  
    It is a unary operator, which checks the type of operand (it can be a variable or a literal).
2. isntanceOf:
   It is a binary operator that checks whether an object (left operand) is of some type (right operand).
3. delete:
  unary operator allows you to delete a selected field of the object whose name is indicated with an operand.
4. ternary:
   it is the only operator using three operands. It is a conditional operator. Based on the value of the first operand (true or false), the value of the second or third operand, respectively, is returned.

#### Precedence

The JavaScript interpreter uses two operator properties to determine the sequence of operations: precedence and associativity. Precedence can be treated as a priority, with some operators having the same precedence (e.g. addition and subtraction). Associativity allows you to specify the order of execution if there are several operators with the same priorities next to each other.

Precedence can be presented as a numerical value – the higher the value, the higher the priority of the operation. If, for example, an OP1 operator has a smaller precedence than OP2, then the instruction:

a OP1 b OP2 c

will be executed as follows: first, OP2 will be executed on operands b and c, then OP1 will be executed on the left operand a and the right operand, resulting from OP2. So the instruction could be presented in the form:

a OP1 ( b OP2 c)

If we perform the same operations (or different operations but with the same precedence), the interpreter uses associativity to determine the order of operations. Operators may have a specified left-associativity (left to right order) or right-associativity (right to left order). Let's assume that in our example, the operator OP1 has left-associativity:

a OP1 b OP2 c

In such a situation, the OP1 operation on operands a and b will be performed first, followed by a second OP1 operation on the received result and operand c. Bearing in mind that we are dealing with left-associativity, we could write the instruction in the following form:

(a OP1 b) OP2 c

It follows that it would be appropriate to know not only the precedence of all operators, but also their associativity. This may seem a bit overwhelming, taking into account the number of operators. Fortunately, it is usually enough to know the properties of the most basic operators and use brackets in doubtful situations. The brackets allow you to impose the order of operations, just like in mathematics. Keep this in mind when viewing the table below. It contains a list of operators we already know with their precedence and associativity, so it is quite large. You absolutely do not have to remember everything if you can use brackets to group operations.

<!-- JavaScript Essentials 1 (JSE):
Module 3
Section 3

Interacting with the user

Topics in this section:

    How to interact with the user in JavaScript?
    Dialog boxes – alert
    Dialog boxes – confirm
    Dialog boxes – prompt -->


##### Interaction with the user

The user enters data, make choices and confirm options given by the program. The user influences not only the data, but also its execution.

#### Confirm dialog box

The values true or false, returned by the confirm method as a result of the user's decision, allow for conditional execution of some program actions. In the example below, we have additionally used a recently learned conditional operator:

```JS

let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"

console.log(message);
```

#### prompt dialog box 


```js
let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";

let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");
```
<!-- module 4 -->

<!-- Module 4
Section 1

Conditional execution

Topics in this section:

    What is conditional execution?
    The if statement
    The if–else statement
    The if–else–if statement
    The conditional operator
    The switch–case statement -->

### Conditional execution (control flow)

#### The if statement

It checks a given condition, and depending of tis boolean value, either executes a block of code, or skips it.

```js
if (condition) {
    block of code
}
```

The if keyword needs to be followed by the expression in parentheses, which will be evaluated to the Boolean, and if the result is true, the block of code that follows the conditional expression is executed. If the expression evaluates to false, the block of code will NOT be executed. The code block should be separated using curly brackets.

```js
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}

console.log(shippingCost);
```

Another way to write the same thing is to use the logical AND operator. We used additional parentheses to group the selected logical operations. This will allow us to force their execution precedence.

```js
if (userAge > 21 && (cartValue >= 300 || points >= 500))
```

#### The if ... else statement

but what if we also want to execute some code when a given condition is not met?  We can use an `else` keyword.

The `else` keyword is optional. allows to add a second block code only when the initial condition is NOT met.

```js
if (condition) {
  condition - true code
} else {
  condition - false code
}
```

we can do this with multiple if else statements
```js
let number = prompt("Enter a number", 0);

if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}
```

#### Conditional operator

it allows to perform one of two actions based on the value of the first operand.

Most often it is used as an alternative to the if ... else statement.

#### The swtich ... case statement

```js
switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:  
        code
}
```

`break` at the end of each block of code is optionall. Additionally there is a special case named default

Additionally, a special case named default can be present (by convention placed on the end of the switch statement; however, it isn’t required). The default case is executed when none of the cases matches the expression. The evaluation itself is made with a strict comparison operator (===) so not only must the value match, but also the type of case value and the expression.
