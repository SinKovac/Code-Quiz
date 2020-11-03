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

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

const questions = [
    {
        question: 'Which Premier League team is known as the Red Devils?',
        answers: [
            { text: 'Liverpool', correct: false },
            { text: 'Manchester United', correct: true },
            { text: 'Southhampton', correct: false },
            { text: 'Sheffield United', correct: false }
        ]
    },
    {
        question: 'Which person was not a memeber of Van Halen?',
        answers: [
            { text: 'Sammy Hagar', correct: false },
            { text: 'Lenny Van Halen', correct: true },
            { text: 'Eddie Van Halen', correct: false },
            { text: 'Michael Anthony', correct: false }
        ]
    },
    {
        question: 'How many kilometers from the Earth to the Moon?',
        answers: [
            { text: '384,400 km', correct: true },
            { text: '332,088 km', correct: false },
            { text: '354,400 km', correct: false },
            { text: '403,212 km', correct: false },
        ]
    }
