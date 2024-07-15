//En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.

let z,x,y,sum,salary;
x=0;
z=0;
sum=0;
y=0;

while(x<5){
    salary=parseInt(prompt("Enter your salary: "));
    sum=sum+salary;
    if(salary>=100 && salary<=300){
        y=y+1;
    }else{
        z=z+1;
    }
    x=x+1;
}
document.write("<br>");
document.write("The number of employees with salary between $100 - $300 is: "+y);
document.write("<br>");
document.write("The number of employees with salary upper than $300 is: "+z);
document.write("<br>");
document.write("Total amount in salaries: "+sum);