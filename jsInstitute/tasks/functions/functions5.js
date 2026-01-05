let fibo = function(n){
    let x = n;
    if(x==1 || x==2){
        return 1
    }
    
    let result = fibo(x-1)+fibo(x-2);
    return result;
}


console.log(fibo(4));