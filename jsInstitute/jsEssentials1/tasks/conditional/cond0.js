// Write a script that will ask the user to input a number. 
// Display the message "Bingo!" when the number is greater than 90
//  but less than 110, otherwise display the message: "Miss".
//  Use the if statement.

let input = Number(prompt("Enter a number: ",0));

// if(input > 90 && input > 110 )
//     alert("Bingo !")
// else
//     alert("Miss")


// Rewrite the code from the previous task, replacing if with a ternary conditional operator.

input > 90 && input < 110 ? alert("Bingo !") : alert("Miss");

