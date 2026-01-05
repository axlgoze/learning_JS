// A. Try to modify the above piece of code to make it as short as possible. Suggestions:

// use an anonymous function;
// use an arrow function;
// consider skipping the if statement.

let numbers = [50, 10, 40, 30, 20];
// function compareNumbers(a, b) {
//     let retVal = 0;
//     if (a < b) {
//         retVal = -1;
//     } else if(a > b) {
//         retVal = 1;
//     }
//     return retVal;
// }
// let sorted = numbers.sort(compareNumbers);
// console.log(sorted); // [10, 20, 30, 40, 50]


// let compareNumbers = (a,b) =>{
//     var retVal = 0;
//     a < b ? retVal = -1 : a > b ?  retVal= 1 : '';
//     return retVal
// }

// let sorted = numbers.sort( () => a < b ? retVal = -1 : a > b ?  retVal= 1 : '' );

let sorted = numbers.sort( (a,b) =>  a -b );
console.log(sorted); 


