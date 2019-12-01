var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

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

function loadNextQuestion () {
    var seletedOption = document.querySelector('input[type=radio]:checked');
    if(!seletedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 10;
    }
    seletedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestion -1){
        nextButton.textContent = 'finish';
    }
    if(currentQuestion == totQuestion){
        contaniner.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);

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



