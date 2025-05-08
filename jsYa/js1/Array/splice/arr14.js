let arr = new Array(15);
arr=[0,12,999,32,-3,1,3,6453,78,8,91,12,2,5,5]
console.log("Before: "+arr);
console.log("length:",arr.length);

arr.splice(3,4);
console.log("after: "+arr);
console.log("length:",arr.length);

arr.splice(-6,1);
console.log("after after: "+arr);
console.log("length:",arr.length);


console.log("INSERT");
arr.splice(-1,0,333);
console.log("after insert: "+arr);
console.log("length:",arr.length);

arr.splice(-4,0,222,444,555);
console.log("insert more than one: "+arr);
console.log("length:",arr.length);

// Para probar el borrar e insertar en forma simultánea confeccionaremos un programa que borre desde la posición 1 tres elementos e inserte otros cinco elementos:
arr.splice(1,3,55,44,33,22,11);
console.log('erase and insert: '+arr);
console.log("length:",arr.length);
