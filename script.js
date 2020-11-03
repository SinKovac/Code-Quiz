var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var gameClock = document.getElementById('game-clock');

function startGame() {
    startBtn.classList.add('hide');
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}    
 function setNextQuestion() {
    resetState();
    showQuestion(currentQuestionIndex);
}
    
 function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}   

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();

function selectAnswer(e) {
    const selectButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (currentQuestionIndex.length + 1) {
        nextBtn.classList.remove('hide');
    } else {
        startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');
    }
    
}
    
function resetState () {
    clearStatusClass(document.body);
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonselement.firstChild);
    }
}
