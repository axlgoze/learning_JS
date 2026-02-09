// Write three functions with the names add, sub, and mult, which will take two numerical arguments. The functions are to check if the given arguments are integers (use Number.isInteger). If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. The functions are to be declared using a function statement.

// let add = (a,b) => Number.isInteger(a) ? Number.isInteger(b) ? a+b : NaN : NaN;
// let sub = (a,b) => Number.isInteger(a) ? Number.isInteger(b) ? a-b : NaN : NaN;
// let mult = (a,b) => Number.isInteger(a) ? Number.isInteger(b) ? a*b : NaN : NaN;

let add = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a+b : NaN;
let sub = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a-b : NaN;
let mult = (a,b) => Number.isInteger(a) && Number.isInteger(b) ? a*b : NaN;

