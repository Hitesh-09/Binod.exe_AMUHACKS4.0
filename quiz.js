let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

const questions = [
    { question: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid', 'Rome'], correct: 0 },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correct: 1 },
    { question: 'Who wrote Hamlet?', options: ['Shakespeare', 'Dickens', 'Hemingway', 'Austen'], correct: 0 }
];

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const questionData = questions[currentQuestionIndex];

    quizContainer.innerHTML = `
        <h2 class="quiz-question">${questionData.question}</h2>
        <div class="options-container">
            ${questionData.options.map((option, index) => `
                <div onclick="selectOption(${index})">${option}</div>
            `).join('')}
        </div>
        <div id="timer" style="margin-top: 20px; font-size: 1.2rem; color: #1e3c72;"></div>
    `;

    startTimer(30);
}

function selectOption(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer(duration) {
    const timerElement = document.getElementById('timer');
    let timeRemaining = duration;

    timerElement.textContent = `Time Left: ${timeRemaining}s`;

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = `Time Left: ${timeRemaining}s`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            selectOption(-1); // Automatically move to the next question if time runs out
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    localStorage.setItem('score', score);
    window.location.href = 'result.html';
}

window.onload = loadQuestion;