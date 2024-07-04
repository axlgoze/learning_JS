let note1, note2, note3, average, succ, fail;

note1 = parseInt(prompt("Ingresa tu primera nota: "));
note2 = parseInt(prompt("Ingresa tu segunda nota: "));
note3 = parseInt(prompt("Ingresa tu tercer nota: "));

average = note1 + note2 + note3 / 3;

succ = "approved";
fail= "failure";

if(average>=4){
    document.write(succ);
}else{
    document.write(fail);
}