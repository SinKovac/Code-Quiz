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

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
