let nmbr = 10;

function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "Hello !";
}

console.log("before outer() call"); // --> before outer() call
// debugger;
console.log(outer()); // --> Hello !
console.log("after outer() call"); // --> after outer() call
