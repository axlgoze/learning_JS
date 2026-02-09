// Write a piece of code that will write numbers from 100 to 0 to the console, but in steps of 10; so 100, 90, 80... etc. 
// for(let i=100;i!=0;i-=10){
//     console.log('->> '+i);
// }

// Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 (hint: use the prompt dialog). Check if the entered values are correct (that the initial value is greater than the final value).

// const number1=Number(prompt("Enter fisrt number"));
// const number2=Number(prompt("Enter second number"));

// if(number1>number2)
//     for(let i = number1; i>=number2; i--){
//         console.log(i);
//     }
// else
//     alert("The first number must be greater than second number!");
// example of course
// let upperLimit = Number(prompt("Enter upper limit"));
// let lowerLimit = Number(prompt("Enter lower limit"));

// if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
//     for (i = upperLimit; i >= lowerLimit; i -= 10) {
//         console.log(i);
//     }
// }


// task 3
// Write a program that first writes out all these numbers on the console, then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.
// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// for(number of numbers){
//     if(number%2===0){
//         console.log("even: "+number);
//     }
// }

// for(number of numbers){
//     if(number>10 && number<60){
//         console.log("between 10 and 60: "+number);
//     }
// }

// task 4: Write a program using a loop that will ask the user for the name of the movie (first prompt) and its rating from www.imdb.com (second prompt). The program will allow you to enter as many movies as you want into the movies array. Each element of the array will be an object, consisting of two fields: title and imdb. The input is completed if the user presses Cancel in the prompt dialog. Then the program should first print out to the console all movies that have a rating of less than 7, then those whose rating is greater than or equal to 7. Write the name of the movie and its rating next to each other, e.g.:

// const arr = [];

// while(confirm("enter a new movie?")){
//     inputTitle = prompt("Title: ","The movie title");
//     inputImdb = Number(prompt("IMDB rate: ", 7.7));
//     arr.push({title: inputTitle, imdb: inputImdb});
// }

// for(movie of arr){
//     // console.log(movie.title + "("+movie.imdb+")");
//     console.log(`${movie.title} (${movie.imdb})`);
// }

// for(movie of arr){
//     if(movie.imdb<7)
//         // console.log(movie.title + "("+movie.imdb+")");
//         console.log(`${movie.title} (${movie.imdb})`);
// }

// for(movie of arr){
//     if(movie.mdb>7)
//     console.log(`${movie.title} (${movie.imdb})`);
// }


// for(movie of arr){
//     if(movie.mdb>=7)
//     console.log(`${movie.title} (${movie.imdb})`);
// }

// Task 5

// The contents of the object describing the position of the vessel named "Mareno" are written on the console.



let vessel = {
    LATITUDE : 40.07288,
    LONGITUDE : 154.48535,
    COURSE : 285.6,
    SPEED : 14.0,
    IMO : 9175717,
    NAME : "MARENO"
}

for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

// task 6
// Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q in any of the prompt boxes.

// while(true){
//     let firstNumber = prompt("Enter first number");
//     let secondNumber = prompt("Enter second number");
//     let operand = prompt("Enter operand (+, -, * or /)");
//     let result;

//     if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
//         break;
//     }

//     firstNumber = Number(firstNumber);
//     secondNumber = Number(secondNumber);

//     if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
//         switch (operand) {
//             case "+":
//                 result = firstNumber + secondNumber;
//                 break;
//             case "-":
//                 result = firstNumber - secondNumber;
//                 break;
//             case "*":
//                 result = firstNumber * secondNumber;
//                 break;
//             case "/":
//                 result = firstNumber / secondNumber;
//                 break;
//             default:
//                 result = "Error: unknown operand";
//         }
//     } else {
//         result = "Error: at least one of the entered values is not a number";
//     }
//     alert(result);
// }