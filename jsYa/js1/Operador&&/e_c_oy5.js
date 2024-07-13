let salary, years;
salary=parseInt(prompt("Enter your salary: "));
years=parseInt(prompt("Enter your years of antiquity"));

if(salary <500 && years>=10){
    salary=salary+salary*20/100;
    document.write("You got a bonus and your salary is: "+salary);
}else{
    if(salary <500 && years<10){
        salary=salary+salary*5/100;
        // salary = salary + salary*.05;
        document.write("You got a bonus and your salary is: "+salary);
    }else{
        if(salary>=500){
            document.write("Your salary is: "+salary);
        }
    }
}