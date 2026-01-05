// Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.



let showCounter = function(){
    let counter = 1;

    let timerId = setInterval(() => {
        console.log(counter++)
    }, 2000);

    setTimeout(() => {
        clearInterval(timerId);
    }, 20000);

}


console.log(showCounter());

