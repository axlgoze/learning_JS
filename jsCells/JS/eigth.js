const promise1 = new Promise( (resolve, reject) => {
    setTimeout(()=> resolve('promise 1 fulfilled'),2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 2 fulfilled'),1000);
});

//consuming promises
Promise.all([promise2, promise1]).then((result) => {console.log(result);});
// all method creates an array with all the resolved promises in args.

/*
    ["promise 2 fulfilled", "promise 1 fulfilled"]
*/