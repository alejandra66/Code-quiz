// My variable's 
var currentQuestion = 0;
var score = 0;
// total question count
var totQuestions = questions.length;

// html elements 
var contaniner = document.getElementById('quizcontanier');
var questionEl = Document.getElementById('question');
var opt1 = Document.getElementById('opt1');
var opt2 = Document.getElementById('opt2');
var opt3 = Document.getElementById('opt3');
var opt4 = Document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultsCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    question.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
// if nothing is defined, the alret will be diplayed 
function loadNextQuestion () {
    var seletedOption = document.querySelector('input[type=radio]:checked');
    if(!seletedOption){
        alert('Please select your answer!');
        return;
    }
//This answer will compared to the array and add a score of 10 
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 10;
    }
// Will show when quiz is finished 
    seletedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestion -1){
        nextButton.textContent = 'finish';
    }
// Will show final score 
    if(currentQuestion == totQuestion){
        contaniner.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
// will load the next question 
    loadQuestion(currentQuestion);
// This should count down the timer 
var counter = 0;
var timeLeft = 75;

function setup() {
    noCanvas();
  
    var timer = select('#timer');
    timer.html(timeLeft - counter);

    function timeIt() {
    counter ++;
    timer.html(timeLeft - counter);
    }

    setInterval(timeIt,1000);
}
}



