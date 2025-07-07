# init 

Js is a high level, interpreted programming language
is the functionality of a web page.

eACH BROWASER HAS ITS OWN ENGINE TO RUN JS

chrome engine has v8
e chakra
mozilla spidermonkey

the parser converts the code to machine code and then the code runs.

the external file is included in the head section

variables

var can be redeclare
let cannot be redeclare
const cannot be redeclared


## Data types

Primitive:
- number
- string
- boolean

Reference data types:
- object
- array
- function


reference is the address of a variable.

string = collection of characters



### Arithmetic operators

increment

post-increment
a++

pre increment
++a

The increment operator (++) adds 1 from the operand.

If it is placed after the operand, it returns the value before the increment.

If it is placed before the operand, it returns the value after the increment.

### Assigment

`=`

`+=`

`-=`

```js
a -= b = a equal a - b
```

`*=`
`/=`
`%=`

### Comparison operators

`==`
compares onlye values

`===`
compares value and data types

`<=`

`>=`

`!=`


### alert, prompt and confirm

**Confirm** will show a message of confirmation before send some data (e.g forms)

```js
confirm('sure to confirm?');
```


returns the execution time of the script
```js
console.time();
// instructions
console.timeEnd();
// show warning message
console.warn('warning');
```


### for cycle

```js
    // -----when iterations times is knwon (4)
for(let i=0;i<4;i++){
    console.log("Looping!");
}
// -----when iterations times is not knwon (n)
for(let i=0;i<z.length;i++){
    console.log("Looping!");
}
```

### while cycle

```js
//useful to loop through arrays.
let i=0;

while(i >= 100){
    console.warning('Hello mundo mundial');
    i++;
}

```

```js

```


