// Ordenar un vector de enteros mediante el método sort, pasar una arrow function.

const order = (...newArr) =>{
    console.log(newArr.sort((a,b)=>b-a));
}

let vec = [2,432,654,87658576,1,0];
order(...vec);