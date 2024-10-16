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

- package managers -> enabling the management of libraries (containing ready-made solutions that we can use in our programs) or components of the development environment (e.g npm oor yarn).
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

String, like other primitives,, are immutable, so when we want to change even one letter, we create a new string.

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

