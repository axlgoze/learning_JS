## Estructuras condicionales simples

se usan cuando debemos tomar desiciones.

## Estructuras condicionales compuestas

se usan cuando tenemos dos opciones if .. else

## Estructuras condicionales anidadas

cuando dentro de una condicion hay otra condicion.

## Operardo &&
se lee como "Y", se emplea cuando una estructura condicional dispone de dos condiciones.

## Operator or ||
If condition one is true or condition 2 is true, then execute the true branch

## Switch structure
alternative to replace if structures

## While structure
This is a REPETITIVE structure which can execute one or a various instructions many times.

in this structure we have
- one or more instructions
- a test condition before each repetition

The while block repeats while condition is true

## Do while

this structure is executed at least once.
we use it if we know that the repetitive cycle is gonna be executed.
when the condition is false the structure ends.


## For structure

It's used when we KNOW how many times the instructions block is gonna be executed.

a break sentence in any part of the structure will stop it.

⬇️ three parts:
- initialization
- condition
- increment/decrement

## Functions

permits divide the program in different part helping to reduce the work.

# POO
An object is an structure that contains properties and methods. This programming paradigm is based on the concept of objects.

## Classes

A class is a blueprint for creating objects.

## Objects

An object is an instance of a class. An object has attributes and functions and methods that must done.

## polymorphism
## Hereint

To access to methods and properties we use the next syntax:
Object.property
Object.method(property)

## Methods
it's an algorithm executed responding to a message. responses to a message to satisfy requests.

# Array class
A vector is a data structure that stores a group of data.
It has a unique name and we refer to its elements by a subindex.


## Math class
<h1>Math's class methods</h1>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example Expression</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>abs</td>
                <td>Absolute value</td>
                <td>Math.abs(-2)</td>
                <td>2</td>
            </tr>
            <tr>
                <td>sin, cos, tan</td>
                <td>Trigonometric functions, take the argument in radians</td>
                <td>Math.cos(Math.PI)</td>
                <td>-1</td>
            </tr>
            <tr>
                <td>asin, acos, atan</td>
                <td>Inverse trigonometric functions</td>
                <td>Math.asin(1)</td>
                <td>1.57</td>
            </tr>
            <tr>
                <td>exp, log</td>
                <td>Exponentiation and logarithm, base E</td>
                <td>Math.log(Math.E)</td>
                <td>1</td>
            </tr>
            <tr>
                <td>ceil</td>
                <td>Returns the smallest integer greater than or equal to the argument</td>
                <td>Math.ceil(-2.7)</td>
                <td>-2</td>
            </tr>
            <tr>
                <td>floor</td>
                <td>Returns the largest integer less than or equal to the argument</td>
                <td>Math.floor(-2.7)</td>
                <td>-3</td>
            </tr>
            <tr>
                <td>round</td>
                <td>Returns the nearest integer to the argument</td>
                <td>Math.round(-2.7)</td>
                <td>-3</td>
            </tr>
            <tr>
                <td>min, max</td>
                <td>Returns the smaller (or larger) of its two arguments</td>
                <td>Math.min(2,4)</td>
                <td>2</td>
            </tr>
            <tr>
                <td>pow</td>
                <td>Exponentiation, with the first argument as the base and the second as the exponent</td>
                <td>Math.pow(2,3)</td>
                <td>8</td>
            </tr>
            <tr>
                <td>sqrt</td>
                <td>Square root</td>
                <td>Math.sqrt(25)</td>
                <td>5</td>
            </tr>
            <tr>
                <td>random</td>
                <td>Generates a random value between 0 and 1</td>
                <td>Math.random()</td>
                <td>Math.random()</td>
            </tr>
        </tbody>
    </table>

    ## String class
    a String consist in one or more characters inside double quotes or simple quotes.

    we can concatenate string with "+" operator.

    ### length property
    Returns the number of characters in a string.

    ### Methods
    charA() --> returns the character with the specified index
    substring() -->  returns a substring form other
    indexOf() --> returns the position of the substring , -1 if does not exist
    toUpperCase() --> convert characters to upper case
    toLowerCase() --> convert characters to lower case
