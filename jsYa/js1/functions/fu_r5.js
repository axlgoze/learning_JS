// Elaborar una función que reciba tres enteros y retorne el promedio.
// variables declaration
let f,input,sum,average;
// sum initialize as 0
sum=0;
// for cycle to input three values from user
for(f=1;f<=3;f++){
    input=parseInt(prompt("Enter a number"));
    sum=sum+input;
}
// calculates average according with sum value
function getAverage(sum){
    average = sum/3;
    return document.write("sum: "+sum+" average: "+average);
}
// calling function that returns average value
getAverage(sum);