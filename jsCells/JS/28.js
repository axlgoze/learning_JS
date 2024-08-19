const first = [1,2,3,4,5];
const second =[1,2,3,4];

isEqual = first.length === second.length && first.every(
    // callback can accept three params -element, index, array.
    (value,index) => {
        value === second[index]
    }
);

console.log(isEqual);

//false


// every method verifies if all elements of the array (iterates) satisfy the test by a callback.

