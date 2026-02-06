# JS Institute

## What is JavaScript?

JavaScript (JS) is:
- An **interpreted** language.
- A **high-level** language, making it relatively easy to understand and separating developers from hardware details.

The **interpreter** is the JavaScript engine built into web browsers. JS can also be executed using **Node.js**.

### Key Features:
- **Just-in-Time (JIT) Compilation**: Modern JS engines compile code fragments during program execution, improving performance.
- **Client-Side Programming**: JS runs in the browser, enabling interactivity and dynamic content on web pages.

> **Fun Fact**: 95% of web pages worldwide embed JavaScript code.

### Advantages:
- Active and supportive community.
- Huge number of ready-to-use libraries.
- Easy to learn, allowing developers to focus on tasks rather than syntax.
- Requires minimal tools: a code editor and a browser.
- **Dynamic Typing**: Variables can store data of any type.

### Disadvantages:
- Limited functionality due to browser sandboxing (e.g., no direct access to local files).
- Code is not compiled, making it visible and easy to copy.

---

## Development Tools

JavaScript development requires:
1. A **code editor**.
2. An **interpreter** (e.g., a browser or Node.js).
3. A **debugger** (built into modern browsers).

### Online Playgrounds:
- [JSFiddle](https://jsfiddle.net/)
- [CodePen](https://codepen.io/)
- [jsBin](https://jsbin.com/)
- [Plunker](https://plnkr.co/)

### Additional Tools:
- **Package Managers**: Manage libraries (e.g., npm, yarn).
- **Task Runners/Module Bundlers**: Automate development tasks (e.g., Webpack, Gulp).
- **Testing Frameworks**: Ensure code correctness (e.g., Mocha, Jasmine).
- **Security Analyzers**: Check for vulnerabilities (e.g., Snyk, OWASP Dependency Check).

---

## JavaScript Interpreter

The **interpreter** serves as the runtime environment for JS programs. It:
1. Scans the program for syntax errors.
2. Executes instructions line by line.

### Interpreter Functions:
| Functionality |
|---------------|
| Scans for syntax errors before execution. |
| Moves variable declarations to the top of their scope (hoisting). |

### Debugging:
Modern browsers include developer tools with built-in debuggers. Use `Ctrl + Shift + I` (Windows) or `Cmd + Option + I` (Mac) to access them.

---

## HTML and JavaScript

### The `<script>` Tag:
JavaScript can be embedded in HTML using the `<script>` tag. For larger scripts, use the `src` attribute to link an external file.

#### Attributes:
- `defer`: Executes the script after the page loads.
- `async`: Executes the script immediately, without blocking page parsing.

### CSS:
CSS (Cascading Style Sheets) complements HTML by defining the appearance of web pages.

> **HTML** describes structure, while **CSS** describes presentation.

---

# Module 2: Variables, Data Types, and Comments

## Variables

A **variable** is a container for storing data. Variables must be declared before use.

### Declaration Keywords:
- `var`: Allows re-declaration (not recommended).
- `let`: Prevents re-declaration.
- `const`: Declares constants (values cannot be changed).

### Example:
```javascript
let name = "John"; // Declaration and initialization
const PI = 3.14;    // Constant declaration
```

### Strict Mode:
Use `"use strict"` at the beginning of your script to enforce modern JS standards.

### Scope:
- **Global Scope**: Variables declared outside blocks.
- **Local Scope**: Variables declared inside blocks.

#### Example:
```javascript
let globalVar = "I am global";
{
    let localVar = "I am local";
    console.log(localVar); // Accessible here
}
console.log(globalVar); // Accessible here
```

---

## Data Types

JavaScript is **weakly typed**, meaning variables can change types dynamically.

### Primitive Types:
- **Boolean**: `true`, `false`
- **Number**: Integers and floating-point numbers
- **BigInt**: Large integers
- **String**: Text values
- **Symbol**: Unique identifiers
- **undefined**: Default value of uninitialized variables
- **null**: Represents "no value"

### Complex Types:
- **Object**: Key-value pairs
- **Array**: Ordered collections

### Type Conversion:
Use constructor functions for explicit conversion:
```javascript
let num = Number("42"); // Converts string to number
let str = String(42);    // Converts number to string
```

---

## Comments

Comments improve code readability and are ignored by the interpreter.

### Types:
- **Single-line**: `// This is a comment`
- **Multi-line**:
```javascript
/*
This is a 
multi-line comment
*/
```

---

# MODULE 3: Operators

## Assignment, Arithmetic, and Logical Operators

Operators are symbols used to perform actions on values (operands). They can be categorized as:

- **Unary** (one operand)
- **Binary** (two operands)
- **Ternary** (three operands)

### Assignment Operators
Assign values to variables:
```javascript
let a = 100;
```

### Arithmetic Operators
Perform mathematical operations:
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

#### Unary Arithmetic Operator
Operates on a single operand:
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

#### Unary Increment and Decrement Operators
- **Postfix** (e.g., `n1++`): Returns the value before the change.
- **Prefix** (e.g., `++n1`): Returns the new value after the change.

| Expression | When the increment happens | Returned value                         |
|------------|----------------------------|----------------------------------------|
| `a++`      | After                      | Original value (before increment)      |
| `++a`      | Before                     | New value (after increment)            |

#### Compound Assignment Operators
Combine binary arithmetic operators with the assignment operator:
```js
let x = 10;

x += 2; // Equivalent to x = x + 2
x -= 4; // Equivalent to x = x - 4
x *= 3; // Equivalent to x = x * 3
x /= 6; // Equivalent to x = x / 6
x **= 3; // Equivalent to x = x ** 3
x %= 10; // Equivalent to x = x % 10
```

### Logical Operators
1. **Conjunction**: `&&` (logical AND)
2. **Alternative**: `||` (logical OR)
3. **Negation**: `!` (logical NOT)

Negation changes the logical value of the operand to its opposite.

> Double negation is used to convert any type to Boolean

```js
let nr = 0;
let name = "Alice";

console.log(!nr); // --> true

console.log(!!nr); // --> false
console.log(!!name); // --> true
```

Evaluation is simply an attempt to convert an operand to a Boolean-type value.

`!!name` es una expresión que devuelve un booleano.

`name` es una referencia que apunta a un string.

> One of the classic traps is confusing the result of an expression with the value of the variable.
>```js
>let name = "Alex";
>
>console.log(typeof name);    // "string" (original variable)
>console.log(typeof !!name);  // "boolean" (Result of operation !!)
>
>
>console.log("Resultado: " + typeof name); // "string"
>```

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

> "" = false

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

#### String Operator

Concatenation ``+``

converts everything to a string if any operands is string type

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

1. `typeof`:  
    It is a unary operator, which checks the type of operand (it can be a variable or a literal).
2. `isntanceOf`:
   It is a binary operator that checks whether an object (left operand) is of some type (right operand).
3. `delete`:
  unary operator allows you to delete a selected field of the object whose name is indicated with an operand.
4. `ternary`:
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

### The swtich ... case statement

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

`break` at the end of each block of code is optionall. 

### default

A special case named `default` **can be** present (by convention **placed on the end of the switch statement**; however, it isn’t required). The `default` case **is executed when none of the cases matches the expression**. The evaluation itself is made with a strict comparison operator (===) so not only must the value match, but also the type of case value and the expression.

# MODULE 4 section 2

### What are loops? 

loops are the second form of flow control statement and there are a few types of loops in JS

1. loops that are repetead a given number of times.
2. loops that are repetead until some condition is met.

### While loop

> loops allows us to execute a selected piece of code multiple times.

we normally **use** the while loop **when** we **do not know** exactly **how many times** something should be **repeated**, **but we** do **know when** to **stop**.

```js
while(condition) {
    block of code
}
```

```js
let isOver = false;
let counter = 1;

while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}
```

### The do … while loop

In this loop the condition is checked after each iteration. Code is always executed at least once before the first condition check is done.

```js
do {
    code block
} while(condition);
```

### The FOR loop

```js
for (initialization; condition; increment) {
    block of code
}
```

The inside of the parentheses is divided into three fields by semicolons, and each field is assigned a different meaning. In each of these fields, a statement may appear, which will be interpreted as follows in the order:

    - loop Counter initialization statement;
    - loop condition statement;
    - loop increment statement.

> All three statements are optional and can be left empty, except for ending with a semicolon.

#### the loop condition statement

If this expression is evaluated to true, the loop will execute its code. In the case of the condition being evaluated to false, the loop is terminated, and no more iterations will be executed, and the code execution jumps to the first statement after this for loop. The condition statement is also optional, but if left empty, it will be assumed as always true, leading to an infinite loop if no other means of exiting the loop is used.

#### for … of
is dedicated for use with arrays.

```js
let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190
```

In brackets after the word for, you will not find three fields separated by semicolons. There is a variable declaration, followed by the word of and then an array, the elements of which we will loop through


#### for … in

used to iterate in objects.

### The BREAK and CONTINUE statements

The `break` statement is used to **terminate the execution of a loop** or a *switch* statement. In each of these contexts, whenever the JavaScript engine encounters a break statement, it **exits the whole loop or switch** statement, and jumps to the first statement after that loop or switch.

```js
let i = 0;
// An infinite loop
while (true){
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}

alert('Exited the loop with a break (${i}).');
```

Just like `break`, **`continue` can be used in loops (but not in the switch statement)**. When used, it applies to the closest surrounding loop. The `continue` statement, in contrast to `break`, does not end the whole loop, but rather **starts the next iteration of this loop**. We can think of it as jumping right to the end of the current iteration.

```js
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
```

**Both** `break` and `continue` are not used particularly often. We should definitely not use them when we can terminate the loop with a properly constructed condition. They are **useful in emergency situations**, when something unusual happens in loops with more complex iterations.

#### The break keyword

We also need to say a few words about the `break` keyword. In the example, the `break` keyword is present in all cases except in the default case (switch). In contrast to if statements, switch statements do not execute just one branch, but rather they execute the entire code from the first case that matches until the end of the switch statement. This behavior is called pass-through and has some uses, but most of the time we want to execute only one branch, and for that reason the `break` keyword is present. When a JavaScript interpreter comes to a `break`, it will jump out of the current switch statement.

```js
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
```

additionally surrounding the code with curly brackets. This will add to code readability and allow for the declaration of variables only in the given case scope.

```js
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}
```

# Module 5

# Functions

A function **is a separated piece of code**, a **closed logical whole**, **intended to perform a specific task**. We usually assign a name to that piece of code. With this name (which we given when declaring it) **we can call it** (execute it) **many times in different places** of the program.

functions are useful to test, modularity, reducing the amount of code and reuse of code.

> If you repeat the same secuence of instructions in the program in many places you can close this secuence in a function.

#### Declaration Syntax

- function statement

```js
function functionName(){
    // code block
}
```

Is a good practice to delcare functions at the beginning of the code. Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long as they are in the scope.

### functions - local variables

> Do you remember what local variables are? This is how we call the variables that are declared and used in some limited scope and are not visible in the whole program, which means that we can only use them inside that particular scope.

*let* for local variables declared inside a code block.
*var* for local variables declared inside a function!

### The return statement

We may *store the result of calling a function in a variable*. So we use the return statement.

Using return statement 
**causes the function to end exactly where this word occurs**, event if there are further instructions.
**and** it allows to **return a given value from the inside of the function to the place where it was called**.

> However, using the conditional instructions, we can, for example, react to errors inside the function, and in certain situations interrupt the function immediately.

You can then, for example, assign the returned value to a variable. Let's take a look at an example of the getTrue function.

```js
function getTrue() {
    return true;
}

let test = getTrue();
console.log(test); // -> true
```

#### Parameters

functions whose definition specifies the parameters must be invoked in an appropriate way. When such a function is called, the values (literals, variables, function calls) should be placed in parentheses after its name, and are treated as parameters inside the function. The values given during a call are called arguments. Arguments, if there is more than one, are separated by commas and must be passed in the same order as the parameters we define in the function declaration.

> The order of the parameters is important. Inside the function, these parameters are treated as local variables, whose values will be given when the function is called.

> function parameters are named variables passed to a function when it is called.

#### Shadowing

The parameters are treated inside the function as local variables, they shadow the global variables of the same name (from outer scope)

```js
let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
```

## Module 5 section 2

### Parameters validation

example of interrupting a function with the return keyword

```js
function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20
```

### Recursion

> A factorial is a function, indicated by an exclamation mark in mathematical notation. We pass an integer to this function and its result is obtained by multiplying all integers from the number 1 to the number given as an argument.
n!=n∙(n-1)∙(n-2)∙… ∙2∙1

However, the definition of a factorial can be written in a slightly different way. It will be the factorial of the previous element n - 1 multiplied by n.

For example, 6! is 5! multiplied by 6. Such a factorial definition uses the recursion, i.e. referring a function to itself (but with a different argument). A recursion is a mechanism that allows to simplify the formal notation of many mathematical functions and present them in an elegant form. We can also successfully use recursion in programming.

| Basic Factorial Function | Elegant Factorial Function (Recursive) |
| :--- | :--- |
| ```function factorial (n) { let result = 1; while (n > 1) { result *= n; n--; } return result; }``` | ```function factorial (n) { return n > 1 ? n * factorial(n - 1) : 1; }``` |
| This is an **iterative** implementation using a `while` loop. It explicitly manages the state with the `result` variable. | This is a **recursive** implementation using a ternary operator. It is often considered more "elegant" due to its conciseness and direct mapping to the mathematical definition of a factorial ($n! = n \times (n-1)!$). |
| `console.log(factorial(6)); // -> 720` | `console.log(factorial(6)); // -> 720` |

recursion must be handled with care. We shouldn't use it where we can't estimate the number of embedded calls. We should also be very careful in formulating the condition that will interrupt the function sequence calls – errors can cause the program to suspend.

> A recursive function is a function that call itself again while running

### Functions as first-class members

This means that functions can be treated as any data, which can be stored in variables or passed as arguments to other functions.

*Synchronous callbacks*

Subsequent instructions are executed in the order in which they are placed in the code. If you call a function, the instructions in it will be executed at the time of the call. If we pass another function to this function as an argument, and we call it inside an outer function as well, then all instructions will keep their natural order.

```js
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

// Result:

// test 1
// outer 1
// inner 1
// outer 2
// test 2
```

*Asynchronous callbacks*

Asynchronous operations is strongly dependent on the programming language.
In the case of client-side js running in a browser, it is limited to event-based programming.

One of the simplest cases is the `setTimeOut` function. This function takes another function (callback function) and the time expressed in miliseconds as arguments. The callback function is executed after the specified time, and meanwhile, the next programm instruction (placed in code after setTimeOut) will be executed.

The moment the callback function is called is not determined by its order, but by an arbitrarily imposed delay. The delay only applies to the callback function given to `setTimeOut`, while the rest of the code is still executed synchronously.

```js
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');
```

Asynchronous function calls are determined by events not related to timers.

> The web page is represented by a global window variable. addEventListener is a window function that allows you to register a certain action to be performed in response to a window-related event.

```js
window.addEventListener("click", function() {
    console.log("clicked!");

    // Our function is not called until the "click" event occurs, which is absolutely asynchronous. In the meantime, between subsequent clicks, the rest of the program could be executed
});
```


### Arrow functions

**Is a shorter form of a function expression** and is composed fo:

- Parenthesis containing zero or multiple parameters (if exactly one parameter is present, parenthesis can be omitted)
- An arrow `=>`
- The body of the function, which can be sorrounded by curly brackets if is longer.

**If** an arrow function has **only one statement and returns its value**, we **can omit** the **return** keyword, as it will be implicitly added.

```js
let add = function(a,b){
    return a+b;
}

console.log(add(8,8)) //--> 16
```

can be written:


```js
let add = (a,b) =>{
    return a+b;
}

console.log(add(8,8)) //--> 16
```

or simplified as:


```js
let add = (a,b) => a + b;
```

# Module 6
**Errors, exceptions, debugging, and troubleshooting**

## section 1 Errors and Exceptions

>*Errors will happen.*

> "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
> — **Edsger W. Dijkstra**


Grammar, or formally, the **Syntax** of a programming language, is a **set of rules** defining the structure of the instructions (that is, the sentences of natural language). These rules are usually very precise and specify.

Each language also has its own limited **vocabulary**, which is a **list of words** that can be used to build instructions.


### Reference error
It occurs when we **try to access a function or a variable that doesn't exist**.
The JavaScript engine does not know the meaning of the given name, so it is an error that we will classify as a semantic error.

The corresponding exception is thrown at the execution time of the program, when the wrong instruction is reached (i.e. in JavaScript, semantic errors are run-time errors).

### Errors and exceptions

> If an error can be uncaught, it can probably be caught.

When JavaScript detects syntactic or semantic errors, it generates and **throws specific objects** containing information about the encountered error.

The **run-time errors** (exceptions) appear while the program is running.

Error Categories: 
---

0. *Type* error occurs when a certain value is not of the expected type. Typical examples are:

```js
const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.


let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
```


1. *vocabulary* error (reserved words)

2. *logical* error (impossible to detect automatically. We’re making it do something different to what we intended). The JavaScript interpreter is not able to detect such errors, because it cannot know what we plan to achieve by writing such a function. Logical errors can only occur under certain specific circumstances.

```js
let multiply = (a, b) => a + b;  
let result = multiply(10, 20);
console.log(result); // -> 30 ?
```

3. *Syntax* error: <u>The program will not run if it contains a syntax error</u>. (The execution of the program is interrupted at the line of the error.)

```js
let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
let result = multiply(10, 20);
console.log(result);
```


4. *Semantic* error (reference error): The interpreter will start the program and stop its execution after reaching such an instruction. will not allow the compiling and running of the program.

```js
console.log('abc'); // -> abc
conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
console.log('ghi');
```
The program will stop working only at the second line, and it will still be able to execute the first line correctly. It is possible to prevent the program from stopping in such a situation (exception/error handling). To handle exceptions generated we use the `Try ... catch` statement:


```js
try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {  
    console.log(error.message); // -> conole is not defined 
}
console.log(a); // -> -2
```

If an exception is thrown in the code block after the try keyword, the program does not interrupt completely, but jumps to the part of the code after the catch keyword, and continues from there.

### Step-by-step program execution

We can stop program execution at any place using a debugger statement, and then continue execution one instruction at a time. In this mode, we can see each line that is executed, and each line that is not. We can easily see if the logic in the flow control statements is valid or not.

debug mode (common) options:

- Resume / continue: Resume the execution in a normal way.
- Step Into: Executes the next instruction in the code only, pauses again. If the nex instruction is a function call, using Step into will jump inside the code of this funtcion.  (treating the function as a set of instructions, which we want to execute separately)
- Step Over: used when the next instruction is a function call, code will *not jump* into the function, code, but whole fuction will be exected, and the program will be paused again after jumping out of this function.
- Step Out: This allows us to immediately jump out of a function in which the code is paused. (treating the function call as something indivisible so it resumes program operation by executing successive commands until the current function is exited to the function from which it was called).

> we rarely use the debugger statement. Most often, at the place where the program should stop, we just indicate it using *breakpoints* set directly in the Developer Tools.

> we can jump between successive breakpoints with Resume.

### The Call stack

![debuggin mode](./media/callStack.png "internet explorer browser")

Call Stack is important in the case of nested functions.

The main function doesn't have a name, in Firefox it is marked as (global), and in Chrome (anonymous)

If you click on the name of the outer function on the Call Stack, you will be taken to the context of that function

Note that despite the context change, the program execution still stops in exactly the same place.

During the step-by-step execution, we have free access to the variables of our program, which are visible in the context we are currently in. So we can modifiy the value of the local variables.

Above the Call Stack window is another window called Watch (or Watch expressions). It allows us to view and modify the variables without using the console. In this window, we can find the + button, which after pressing, we can enter the name of the variable whose value changes we want to track. In order to change the current value of a variable.

![debuggin mode](./media/watch.png "watch")


Remember that during function calls or in code blocks, the scope of variable visibility may vary, so don't be surprised if the values of local variables are not visible in the global context.

Sometimes it is not possible to locate the problem immediately and it is necessary to trace the operation of the program one fragment at a time, preferably using a step-by-step operation.

> The ability to use a debugger is essential for every programmer.

### Measuring code execution time

The aspect of code execution speed is quite important. It is affected by many elements, such as the choice of an optimal algorithm for solving a given problem, the selection of appropriate functions, or the avoidance of redundant actions.

One of the easiest ways to measure the speed of the program is to use the `console.time` and `console.timeEnd`

```js
let part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part = part + ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 456.60498046875 ms
let pi = part * 4;
console.log(pi); // -> 3.1415925535897915
```

```js
let part = 0;
console.time('Leibniz');
for(let k = 0; k < 10000000; k++) {
    part = part + (k % 2 ? -1 : 1) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // -> Leibniz: 175.5458984375 ms
let pi = part * 4;
console.log(pi);
```