document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('score') || 0;
    const totalQuestions = localStorage.getItem('totalQuestions') || 0;

    // Display the score
    const resultSummary = document.getElementById('result-summary');
    resultSummary.innerHTML = `<h2>Your Score: ${score} / ${totalQuestions}</h2>`;

    // Display feedback based on the score
    const feedback = document.getElementById('feedback');
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
        feedback.textContent = 'Excellent! You got all the answers correct!';
    } else if (percentage >= 75) {
        feedback.textContent = 'Great job! You scored really well.';
    } else if (percentage >= 50) {
        feedback.textContent = 'Good effort! Keep practicing to improve.';
    } else {
        feedback.textContent = 'Don’t worry! Try again to improve your score.';
    }

    // Add functionality to buttons
    document.querySelector("button[onclick='location.href=\'quiz.html\'']").addEventListener('click', () => {
        localStorage.clear();
    });

    document.querySelector("button[onclick='location.href=\'index.html\'']").addEventListener('click', () => {
        localStorage.clear();
    });

    // Display the final score
    document.getElementById('final-score').textContent = score;

    // Add functionality to retry button
    document.getElementById('retry-btn').addEventListener('click', () => {
        localStorage.removeItem('score'); // Clear the score
        localStorage.removeItem('questionType'); // Clear question type
        localStorage.removeItem('difficultyLevel'); // Clear difficulty level
        window.location.href = 'quiz.html'; // Redirect to quiz page
    });
});