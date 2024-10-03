// Confeccionar una página que permita tomar un examen múltiple choice. Se debe mostrar una pregunta y seguidamente un objeto SELECT con las respuestas posibles. Al presionar un botón mostrar la cantidad de respuestas correctas e incorrectas (Disponer 4 preguntas y sus respectivos controles SELECT) 

const firstOptionSelected = document.getElementById('first-question');
const secondOptionSelected = document.getElementById('second-question');
const thirdOptionSelected = document.getElementById('third-question');
const fourthOptionSelected = document.getElementById('fourth-question');

let correctAnswers = 0;
let isCorrect = false;


function check(){
    let firstOptionSelectedIndex = firstOptionSelected.selectedIndex;
    let secondOptionSelectedIndex = secondOptionSelected.selectedIndex;
    let thirdOptionSelectedIndex = thirdOptionSelected.selectedIndex;
    let fourthOptionSelectedIndex = fourthOptionSelected.selectedIndex;
    
    let answer1 = parseInt(firstOptionSelected.options[firstOptionSelectedIndex].value);
    let answer2 = parseInt(secondOptionSelected.options[secondOptionSelectedIndex].value);
    let answer3 = parseInt(thirdOptionSelected.options[thirdOptionSelectedIndex].value);
    let answer4 = parseInt(fourthOptionSelected.options[fourthOptionSelectedIndex].value);
    
    // console.log("1-"+answer1)
    // console.log("2-"+answer2)
    // console.log("3-"+answer3)
    // console.log("4-"+answer4)

    correctAnswers = answer1+answer2+answer3+answer4

    console.log(correctAnswers);
}

function submitTest(){
    if(correctAnswers == 4){
        alert("Well done ! all is correct!")
    }else{
        if(correctAnswers == 3 ){
            alert("Only one mistake, check your answers !")
        }else{
            if( correctAnswers == 2){
                alert("Only two mistake, check your answers !")
            }else{
                if(correctAnswers == 1){
                    alert("Only three mistake, check your answers !")
                }else{
                    alert("check your answers you have 4 mistakes!")
                }
            }
        }
    }
}


