let names, correctQuestions, totalQuestions,n1,n2,n3;

names = prompt("Enter your name: ");
correctQuestions = parseInt(prompt("Correct Questions: "));
totalQuestions = parseInt(prompt("Total Questions: "));
n1 = "Congrats " + names + "Your level is superior";
n2 = "Congrats " + names + "Your level is medium";
n3 = "Congrats " + names + "Your level is regular";
n4 = "Sorry " + names + " Out of range";

let mark = 100*correctQuestions/totalQuestions;
if (mark>90){
    document.write(n1);
}else{
    if(mark>=75 && mark<90){
        document.write(n2);
    }else{
        if(mark>=50 && mark<75){
            document.write(n3);
        }else{
            document.write(n4)
        }
    }
}