// Variables globales
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let userAnswers = [];
let correctAnswers = 0; // Variable para llevar un conteo preciso de respuestas correctas

// Elementos del DOM
const startSection = document.getElementById('inicio');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const answersListElement = document.getElementById('answers-list');
const restartButton = document.getElementById('restart-btn');

// Inicializar la aplicación
function init() {
    // Configurar los botones de selección de cantidad de preguntas
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const questionCount = parseInt(button.getAttribute('data-questions'));
            startQuiz(questionCount);
        });
    });

    // Configurar el botón "Siguiente"
    nextButton.addEventListener('click', handleNextButton);

    // Configurar el botón "Reiniciar"
    restartButton.addEventListener('click', () => {
        showSection(startSection);
        resetQuiz();
    });
}

// Iniciar el quiz con un número específico de preguntas
function startQuiz(questionCount) {
    // Seleccionar preguntas aleatorias
    currentQuestions = getRandomQuestions(questionCount);
    totalQuestions = currentQuestions.length;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0; // Reiniciar contador de respuestas correctas
    userAnswers = Array(totalQuestions).fill(null);

    // Mostrar la sección del quiz
    showSection(quizSection);

    // Mostrar la primera pregunta
    showQuestion();
}

// Mostrar una pregunta específica
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Actualizar el texto de la pregunta
    questionElement.textContent = question.question;
    
    // Limpiar las opciones anteriores
    optionsContainer.innerHTML = '';
    
    // Crear las nuevas opciones
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
        optionElement.setAttribute('data-index', index);
        
        // Añadir evento de clic
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Actualizar la barra de progreso
    updateProgress();
    
    // Desactivar el botón "Siguiente"
    nextButton.disabled = true;
}

// Seleccionar una opción
function selectOption(optionElement, selectedIndex) {
    // Deseleccionar todas las opciones
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
        option.classList.remove('correct');
        option.classList.remove('incorrect');
    });
    
    // Seleccionar la opción actual
    optionElement.classList.add('selected');
    
    // Guardar la respuesta del usuario
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Mostrar si la respuesta es correcta o incorrecta
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const correctIndex = currentQuestion.correctIndex;
    
    if (selectedIndex === correctIndex) {
        optionElement.classList.add('correct');
        correctAnswers++; // Incrementar contador de respuestas correctas
    } else {
        optionElement.classList.add('incorrect');
        // Mostrar la respuesta correcta
        options[correctIndex].classList.add('correct');
    }
    
    // Mostrar explicación
    showExplanation(currentQuestion, selectedIndex === correctIndex);
    
    // Activar el botón "Siguiente"
    nextButton.disabled = false;
}

// Mostrar explicación de la respuesta
function showExplanation(question, isCorrect) {
    // Eliminar explicación anterior si existe
    const oldExplanation = document.querySelector('.explanation-container');
    if (oldExplanation) {
        oldExplanation.remove();
    }
    
    // Crear contenedor de explicación
    const explanationContainer = document.createElement('div');
    explanationContainer.classList.add('explanation-container');
    
    // Título de la explicación
    const explanationTitle = document.createElement('div');
    explanationTitle.classList.add('explanation-title');
    explanationTitle.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
    explanationContainer.appendChild(explanationTitle);
    
    // Contenido de la explicación
    const explanationContent = document.createElement('div');
    explanationContent.classList.add('explanation-content');
    explanationContent.textContent = question.explanation;
    explanationContainer.appendChild(explanationContent);
    
    // Añadir visualización si existe
    if (question.visual) {
        const visualContainer = document.createElement('div');
        visualContainer.innerHTML = question.visual;
        explanationContainer.appendChild(visualContainer);
    }
    
    // Añadir explicación al DOM
    document.getElementById('question-container').appendChild(explanationContainer);
}

// Manejar el botón "Siguiente"
function handleNextButton() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        showResults();
    }
}

// Mostrar los resultados
function showResults() {
    // Mostrar la sección de resultados
    showSection(resultsSection);
    
    // Recalcular el puntaje basado en las respuestas correctas
    score = 0;
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === currentQuestions[index].correctIndex) {
            score++;
        }
    });
    
    // Calcular la nota sobre 20
    const scoreOutOf20 = (score / totalQuestions) * 20;
    const roundedScore = Math.round(scoreOutOf20 * 10) / 10; // Redondear a 1 decimal
    
    // Actualizar el puntaje
    scoreElement.textContent = `${score}/${totalQuestions}`;
    finalScoreElement.textContent = roundedScore;
    
    // Mostrar las respuestas
    showAnswersList();
}

// Mostrar la lista de respuestas
function showAnswersList() {
    // Limpiar la lista anterior
    answersListElement.innerHTML = '';
    
    // Crear elementos para cada pregunta
    currentQuestions.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const correctIndex = question.correctIndex;
        const isCorrect = userAnswerIndex === correctIndex;
        
        // Crear el elemento de respuesta
        const answerItem = document.createElement('div');
        answerItem.classList.add('answer-item');
        
        // Añadir la pregunta
        const questionElement = document.createElement('div');
        questionElement.classList.add('answer-question');
        questionElement.textContent = `${index + 1}. ${question.question}`;
        answerItem.appendChild(questionElement);
        
        // Añadir las opciones
        const optionsElement = document.createElement('div');
        optionsElement.classList.add('answer-options');
        
        question.options.forEach((option, optIndex) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('answer-option');
            
            // Marcar la opción como correcta o incorrecta
            if (optIndex === correctIndex) {
                optionElement.classList.add('correct');
            } else if (userAnswerIndex === optIndex) {
                optionElement.classList.add('incorrect');
            }
            
            // Marcar la opción seleccionada por el usuario
            if (userAnswerIndex === optIndex) {
                optionElement.classList.add('user-selected');
            }
            
            optionElement.textContent = `${String.fromCharCode(97 + optIndex)}) ${option}`;
            optionsElement.appendChild(optionElement);
        });
        
        answerItem.appendChild(optionsElement);
        
        // Añadir estado de la respuesta
        const statusElement = document.createElement('div');
        statusElement.classList.add('answer-status');
        statusElement.classList.add(isCorrect ? 'status-correct' : 'status-incorrect');
        statusElement.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
        answerItem.appendChild(statusElement);
        
        // Añadir explicación
        if (question.explanation) {
            const explanationElement = document.createElement('div');
            explanationElement.classList.add('answer-explanation');
            
            const explanationTitle = document.createElement('div');
            explanationTitle.classList.add('explanation-title');
            explanationTitle.textContent = 'Explicación:';
            explanationElement.appendChild(explanationTitle);
            
            const explanationContent = document.createElement('div');
            explanationContent.classList.add('explanation-content');
            explanationContent.textContent = question.explanation;
            explanationElement.appendChild(explanationContent);
            
            // Añadir visualización si existe
            if (question.visual) {
                const visualContainer = document.createElement('div');
                visualContainer.innerHTML = question.visual;
                explanationElement.appendChild(visualContainer);
            }
            
            answerItem.appendChild(explanationElement);
        }
        
        answersListElement.appendChild(answerItem);
    });
}

// Actualizar la barra de progreso
function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}`;
}

// Mostrar una sección específica
function showSection(section) {
    // Ocultar todas las secciones
    startSection.classList.add('hidden');
    quizSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    
    // Mostrar la sección especificada
    section.classList.remove('hidden');
}

// Reiniciar el quiz
function resetQuiz() {
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = 0;
    userAnswers = [];
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);
