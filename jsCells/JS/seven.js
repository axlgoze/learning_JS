const promise1 = new Promise( (resolve, reject) => {
    setTimeout(()=> resolve('promise 1 fulfilled'),2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 2 fulfilled'),1000);
});

//consuming promises
promise1.then((result)=>console.log(result));
promise2.then((result)=>console.log(result));

/*
    promise 2 fulfilled
    promise 1 fulfilled
*/