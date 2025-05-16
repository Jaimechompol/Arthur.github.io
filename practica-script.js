// Variables globales
let currentExercises = [];
let currentExerciseIndex = 0;
let score = 0;
let totalExercises = 0;
let userAnswers = [];
let userAttempts = [];

// Elementos del DOM
const startSection = document.getElementById('inicio');
const practiceSection = document.getElementById('practica');
const resultsSection = document.getElementById('results');
const exerciseTitleElement = document.getElementById('exercise-title');
const exerciseDescriptionElement = document.getElementById('exercise-description');
const exerciseVisualElement = document.getElementById('exercise-visual');
const userAnswerInput = document.getElementById('user-answer');
const hintButton = document.getElementById('hint-btn');
const hintTextElement = document.getElementById('hint-text');
const checkButton = document.getElementById('check-btn');
const nextButton = document.getElementById('next-btn');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackResultElement = document.getElementById('feedback-result');
const feedbackExplanationElement = document.getElementById('feedback-explanation');
const feedbackVisualElement = document.getElementById('feedback-visual');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const answersListElement = document.getElementById('answers-list');
const restartButton = document.getElementById('restart-btn');

// Inicializar la aplicación
function init() {
    // Configurar los botones de selección de cantidad de ejercicios
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const exerciseCount = parseInt(button.getAttribute('data-exercises'));
            startPractice(exerciseCount);
        });
    });

    // Configurar el botón "Verificar"
    checkButton.addEventListener('click', checkAnswer);
    
    // Configurar el botón "Siguiente"
    nextButton.addEventListener('click', handleNextButton);
    
    // Configurar el botón "Pista"
    hintButton.addEventListener('click', showHint);
    
    // Configurar el botón "Reiniciar"
    restartButton.addEventListener('click', () => {
        showSection(startSection);
        resetPractice();
    });
    
    // Configurar evento para el input (Enter para verificar)
    userAnswerInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
}

// Iniciar la práctica con un número específico de ejercicios
function startPractice(exerciseCount) {
    // Seleccionar ejercicios aleatorios
    currentExercises = getRandomExercises(exerciseCount);
    totalExercises = currentExercises.length;
    currentExerciseIndex = 0;
    score = 0;
    userAnswers = Array(totalExercises).fill(null);
    userAttempts = Array(totalExercises).fill(0);

    // Mostrar la sección de práctica
    showSection(practiceSection);

    // Mostrar el primer ejercicio
    showExercise();
}

// Mostrar un ejercicio específico
function showExercise() {
    const exercise = currentExercises[currentExerciseIndex];
    
    // Actualizar el título y descripción del ejercicio
    exerciseTitleElement.textContent = `Ejercicio ${currentExerciseIndex + 1}: ${exercise.title}`;
    exerciseDescriptionElement.textContent = exercise.description;
    
    // Mostrar la visualización del ejercicio
    exerciseVisualElement.innerHTML = exercise.visual;
    
    // Limpiar el input de respuesta
    userAnswerInput.value = '';
    userAnswerInput.focus();
    
    // Ocultar el contenedor de feedback
    feedbackContainer.classList.add('hidden');
    
    // Mostrar el contenedor de respuesta
    document.getElementById('answer-container').classList.remove('hidden');
    
    // Ocultar el texto de pista
    hintTextElement.classList.add('hidden');
    
    // Actualizar la barra de progreso
    updateProgress();
}

// Mostrar pista
function showHint() {
    hintTextElement.textContent = currentExercises[currentExerciseIndex].hint;
    hintTextElement.classList.remove('hidden');
}

// Verificar la respuesta
function checkAnswer() {
    const exercise = currentExercises[currentExerciseIndex];
    const userAnswer = userAnswerInput.value.trim();
    
    // Incrementar el contador de intentos
    userAttempts[currentExerciseIndex]++;
    
    // Validar la respuesta
    const isCorrect = exercise.validateAnswer(userAnswer);
    
    // Guardar la respuesta del usuario
    userAnswers[currentExerciseIndex] = userAnswer;
    
    // Actualizar el puntaje
    if (isCorrect) {
        score++;
    }
    
    // Mostrar feedback
    showFeedback(isCorrect, exercise);
}

// Mostrar feedback
function showFeedback(isCorrect, exercise) {
    // Ocultar el contenedor de respuesta
    document.getElementById('answer-container').classList.add('hidden');
    
    // Mostrar el contenedor de feedback
    feedbackContainer.classList.remove('hidden');
    
    // Actualizar el resultado
    feedbackResultElement.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
    feedbackResultElement.className = 'feedback-result ' + (isCorrect ? 'correct' : 'incorrect');
    
    // Mostrar la explicación
    feedbackExplanationElement.textContent = exercise.explanation;
    
    // Mostrar la visualización de la solución
    feedbackVisualElement.innerHTML = exercise.solutionVisual || '';
}

// Manejar el botón "Siguiente"
function handleNextButton() {
    currentExerciseIndex++;
    
    if (currentExerciseIndex < totalExercises) {
        showExercise();
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
    currentExercises.forEach((exercise, index) => {
        if (exercise.validateAnswer(userAnswers[index])) {
            score++;
        }
    });
    
    // Calcular la nota sobre 20
    const scoreOutOf20 = (score / totalExercises) * 20;
    const roundedScore = Math.round(scoreOutOf20 * 10) / 10; // Redondear a 1 decimal
    
    // Actualizar el puntaje
    scoreElement.textContent = `${score}/${totalExercises}`;
    finalScoreElement.textContent = roundedScore;
    
    // Mostrar las respuestas
    showAnswersList();
}

// Mostrar la lista de respuestas
function showAnswersList() {
    // Limpiar la lista anterior
    answersListElement.innerHTML = '';
    
    // Crear elementos para cada ejercicio
    currentExercises.forEach((exercise, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = exercise.validateAnswer(userAnswer);
        
        // Crear el elemento de respuesta
        const answerItem = document.createElement('div');
        answerItem.classList.add('answer-item');
        
        // Añadir el título del ejercicio
        const titleElement = document.createElement('div');
        titleElement.classList.add('answer-title');
        titleElement.textContent = `${index + 1}. ${exercise.title}`;
        answerItem.appendChild(titleElement);
        
        // Añadir la descripción del ejercicio
        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('answer-description');
        descriptionElement.textContent = exercise.description;
        answerItem.appendChild(descriptionElement);
        
        // Añadir estado de la respuesta
        const statusElement = document.createElement('div');
        statusElement.classList.add('answer-status');
        statusElement.classList.add(isCorrect ? 'status-correct' : 'status-incorrect');
        statusElement.textContent = isCorrect ? '¡Correcto!' : 'Incorrecto';
        answerItem.appendChild(statusElement);
        
        // Añadir la respuesta del usuario
        const userAnswerElement = document.createElement('div');
        userAnswerElement.classList.add('user-answer');
        userAnswerElement.textContent = `Tu respuesta: ${userAnswer || 'Sin respuesta'}`;
        answerItem.appendChild(userAnswerElement);
        
        // Añadir la respuesta correcta
        const correctAnswerElement = document.createElement('div');
        correctAnswerElement.classList.add('correct-answer');
        correctAnswerElement.textContent = `Respuesta correcta: ${exercise.correctAnswer}`;
        answerItem.appendChild(correctAnswerElement);
        
        // Añadir explicación
        const explanationElement = document.createElement('div');
        explanationElement.classList.add('answer-explanation');
        
        const explanationTitle = document.createElement('div');
        explanationTitle.classList.add('explanation-title');
        explanationTitle.textContent = 'Explicación:';
        explanationElement.appendChild(explanationTitle);
        
        const explanationContent = document.createElement('div');
        explanationContent.classList.add('explanation-content');
        explanationContent.textContent = exercise.explanation;
        explanationElement.appendChild(explanationContent);
        
        // Añadir visualización si existe
        if (exercise.solutionVisual) {
            const visualContainer = document.createElement('div');
            visualContainer.innerHTML = exercise.solutionVisual;
            explanationElement.appendChild(visualContainer);
        }
        
        answerItem.appendChild(explanationElement);
        
        // Añadir número de intentos
        const attemptsElement = document.createElement('div');
        attemptsElement.classList.add('attempts');
        attemptsElement.textContent = `Intentos: ${userAttempts[index]}`;
        answerItem.appendChild(attemptsElement);
        
        answersListElement.appendChild(answerItem);
    });
}

// Actualizar la barra de progreso
function updateProgress() {
    const progressPercentage = ((currentExerciseIndex + 1) / totalExercises) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Ejercicio ${currentExerciseIndex + 1} de ${totalExercises}`;
}

// Mostrar una sección específica
function showSection(section) {
    // Ocultar todas las secciones
    startSection.classList.add('hidden');
    practiceSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    
    // Mostrar la sección especificada
    section.classList.remove('hidden');
}

// Reiniciar la práctica
function resetPractice() {
    currentExercises = [];
    currentExerciseIndex = 0;
    score = 0;
    totalExercises = 0;
    userAnswers = [];
    userAttempts = [];
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);
