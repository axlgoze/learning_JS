//  Write a program that, in a loop, divides the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the function from the previous task. Use the try ... catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

const numbers = [5, 0, 2, 0, 10, 4];

numbers.forEach(num => {
    try {
        const result = divide(1000, num);
        console.log(`1000 / ${num} = ${result}`);
    } catch (error) {
        console.log(error.message);
    }
});



// for (let num of numbers) {
//     try {
//         const result = divide(1000, num);
//         console.log(`1000 / ${num} = ${result}`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }