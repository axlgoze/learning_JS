// Rewrite the function from Task 5 using an arrow function expression, but try to shorten its code as much as possible (use conditional operators, and try not to use additional variables other than the parameter n).



let fibo = (n) => n<=2 ? 1 : fibo(n-1)+fibo(n-2);

console.log(fibo(10))