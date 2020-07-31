// creating variables from the HTML
const control = document.getElementById('control');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer-btn');
const countDownElement = document.getElementById('timer');

//timer
function timer(){
    let seconds = 300;
    const timer = setInterval(() => {
        countDownElement.innerHTML = seconds + " seconds"
        seconds --;
        if(seconds < 0){
            clearInterval(timer);
        }
    }, 1000);
}


//this starts the quiz game with the function startGame();
control.addEventListener('click', startGame);

//clicking the start button will hide the start button and show the question container
function startGame() {
    control.classList.add('hide');
    questionContainer.classList.remove('hide');

    timer();

    //this function calls the questions for the question container with the question set
    nextQuestion(question);


}

const questions = [
    {
        question: 'Which is the Paragraph Tag',
        answers: [
            { text: '<p> </p>', correct: true },
            { text: '<para></para>', correct: false },
            { text: '<para></para>', correct: false },
            { text: '<para></para>', correct: false }
        ]
    }
]

//shows the questions
function nextQuestion(question) {
    questionElement.innerText = question;

}



