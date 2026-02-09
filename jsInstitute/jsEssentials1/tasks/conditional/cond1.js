// Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred. Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.

let numberInput = Number(prompt("Enter a number:",0));
let characterInput = prompt("Enter the mathematical operation:","+,-,*,/,%,**");
let numberInputTwo = Number(prompt("Enter another number:",0));

let charactersAllowed = ['+','-','*','/','**','%'];


const indexCharacter = charactersAllowed.findIndex(character => character === characterInput);
console.log("indexCharacter" + indexCharacter);
// input validation
if(characterInput != NaN){
    let result;
    switch (indexCharacter) {
        case 0:
            // user pressed +
            result = numberInput + numberInputTwo;
            alert("The result is: "+result);
            break;
        case 1:
            // user pressed -
            result = numberInput - numberInputTwo;
            alert("The result is: "+result);
            break;
        case 2:
            // user pressed *
            result = numberInput * numberInputTwo;
            alert("The result is: "+result);
            break;
        case 3:
            // user pressed /
            result = numberInput / numberInputTwo;
            alert("The result is: "+result);
            break;
        case 4:
           // user pressed **
           result = numberInput ** numberInputTwo;
            alert("The result is: "+result);
            break;
        case 5:
            // user pressed %
            result = numberInput % numberInputTwo;
            alert("The result is: "+result);
            break;
        default:
            alert("Enter a valid mathematical operator!")
            break;
    }
}


// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));
// let operand = prompt("Enter operand (+, -, * or /)");
// let result;

// if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//     switch (operand) {
//         case "+": result = firstNumber + secondNumber; break;
//         case "-": result = firstNumber - secondNumber; break;
//         case "*": result = firstNumber * secondNumber; break;
//         case "/": result = firstNumber / secondNumber; break;
//         default: result = "Error: unknown operand";
//     }
// } else {
//     result = "Error: at least one of the entered values is not a number";
// }
// alert(result);