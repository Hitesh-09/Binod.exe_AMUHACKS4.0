// Navigation logic
function navigateTo(page) {
    window.location.href = page;
}

// Utility function to fetch quiz data
async function fetchQuizData() {
    try {
        const response = await fetch('data/questions.json');
        if (!response.ok) {
            throw new Error('Failed to fetch quiz data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Example global event listener (if needed)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Global script loaded');
});

// Correcting the file content to ensure it is a valid JavaScript file.
// The provided content appears to be an HTML file mistakenly named as script.js.
// Replacing it with the correct JavaScript logic for handling the results screen.

document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name') || 'Player';
    const score = localStorage.getItem('score') || 0;

    document.getElementById('user-name').textContent = name;
    document.getElementById('final-score').textContent = score;

    document.getElementById('retry-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

document.getElementById('start-quiz-btn').addEventListener('click', function() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('quiz-setup-container').style.display = 'flex';
});

document.getElementById('quiz-setup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const questionType = document.getElementById('question-type').value;
    const difficultyLevel = document.getElementById('difficulty-level').value;

    if (!questionType || !difficultyLevel) {
        alert('Please select both question type and difficulty level to start the quiz.');
        return;
    }

    localStorage.setItem('questionType', questionType);
    localStorage.setItem('difficultyLevel', difficultyLevel);

    window.location.href = 'quiz.html';
});