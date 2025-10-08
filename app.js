function simpleEncrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
}

function simpleDecrypt(encoded, key) {
    const text = atob(encoded);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

const ENCRYPTION_KEY = 'NotasAcademicas2025_SecureKey_XYZ789';

const ENCRYPTED_CONFIG = {
    token: 'JisfDwEJXwBfGwseS0RlW1ofCEYdChMZRhgAC1AUXVRJQh9ARkZIAxEfXQteRwoOXwdRUlZDUERKRxpCGhJa',
    username: 'HBABWxxfBQhYGxo=',
    repo: 'HBABWxxfBQhaHRFdEA8DAxc=',
    branch: 'Hg8ZGw==',
    filepath: 'ChkTH1VLHRIOGAMYQ1RYBA8ZHw=='
};

function getGitHubConfig() {
    return {
        token: simpleDecrypt(ENCRYPTED_CONFIG.token, ENCRYPTION_KEY),
        username: simpleDecrypt(ENCRYPTED_CONFIG.username, ENCRYPTION_KEY),
        repo: simpleDecrypt(ENCRYPTED_CONFIG.repo, ENCRYPTION_KEY),
        branch: simpleDecrypt(ENCRYPTED_CONFIG.branch, ENCRYPTION_KEY),
        filepath: simpleDecrypt(ENCRYPTED_CONFIG.filepath, ENCRYPTION_KEY)
    };
}

let subjects = [];
let currentCategories = [];
let isSyncing = false;
let currentSha = null;

async function getFileFromGitHub() {
    try {
        const config = getGitHubConfig();
        const response = await fetch(`https://api.github.com/repos/${config.username}/${config.repo}/contents/${config.filepath}`, {
            headers: {
                'Authorization': `token ${config.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const content = atob(data.content);
            currentSha = data.sha;
            return {
                content: JSON.parse(content),
                sha: data.sha
            };
        }
        return null;
    } catch (error) {
        console.error('Error al cargar desde GitHub:', error);
        return null;
    }
}

async function saveToGitHub(data, sha = null) {
    if (isSyncing) return;
    isSyncing = true;
    
    try {
        const config = getGitHubConfig();
        const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
        
        const body = {
            message: `Actualización de notas - ${new Date().toLocaleString('es-ES')}`,
            content: content,
            branch: config.branch
        };
        
        if (sha || currentSha) {
            body.sha = sha || currentSha;
        }
        
        const response = await fetch(`https://api.github.com/repos/${config.username}/${config.repo}/contents/${config.filepath}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${config.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (response.ok) {
            const result = await response.json();
            currentSha = result.content.sha;
            showNotification('✅ Datos sincronizados con GitHub', 'success');
            return result.content.sha;
        } else {
            const errorText = await response.text();
            console.error('Error al guardar en GitHub:', errorText);
            showNotification('⚠️ Error al sincronizar con GitHub', 'error');
        }
    } catch (error) {
        console.error('Error al guardar en GitHub:', error);
        showNotification('⚠️ Error de conexión con GitHub', 'error');
    } finally {
        isSyncing = false;
    }
}

async function loadSubjects() {
    showNotification('🔄 Cargando datos desde GitHub...', 'info');
    const githubData = await getFileFromGitHub();
    
    if (githubData && githubData.content) {
        subjects = githubData.content;
        renderSubjects();
        showNotification('✅ Datos cargados desde GitHub', 'success');
    } else {
        showNotification('📝 No hay datos previos en GitHub', 'info');
    }
}

async function saveSubjects() {
    const githubData = await getFileFromGitHub();
    const sha = githubData ? githubData.sha : null;
    await saveToGitHub(subjects, sha);
}

// Inicializar con algunas categorías por defecto
function initializeDefaultCategories() {
    currentCategories = [
        { name: 'Exámenes', points: 40 },
        { name: 'Tareas', points: 25 },
        { name: 'Participación', points: 20 },
        { name: 'Proyectos', points: 15 }
    ];
    renderCategories();
    updateTotalPoints();
}

function addCategory() {
    const name = document.getElementById('category-name').value.trim();
    const points = parseInt(document.getElementById('category-points').value);
    
    if (name && points > 0) {
        currentCategories.push({ name, points });
        document.getElementById('category-name').value = '';
        document.getElementById('category-points').value = '';
        renderCategories();
        updateTotalPoints();
    } else {
        alert('Por favor ingresa un nombre válido y puntos mayor a 0');
    }
}

function removeCategory(index) {
    currentCategories.splice(index, 1);
    renderCategories();
    updateTotalPoints();
}

function renderCategories() {
    const container = document.getElementById('categories-list');
    
    if (currentCategories.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #a0aec0; padding: 30px; font-style: italic;">No hay categorías agregadas. Agrega tu primera categoría para comenzar.</p>';
        return;
    }
    
    container.innerHTML = currentCategories.map((category, index) => `
        <div class="category-item">
            <input type="text" value="${category.name}" onchange="updateCategoryName(${index}, this.value)" placeholder="Nombre de la categoría">
            <input type="number" value="${category.points}" onchange="updateCategoryPoints(${index}, this.value)" min="1" max="100" placeholder="Puntos">
            <button type="button" class="btn btn-danger btn-small" onclick="removeCategory(${index})">🗑️ Eliminar</button>
        </div>
    `).join('');
}

function updateCategoryName(index, name) {
    currentCategories[index].name = name;
}

function updateCategoryPoints(index, points) {
    currentCategories[index].points = parseInt(points) || 0;
    updateTotalPoints();
}

function updateTotalPoints() {
    const total = currentCategories.reduce((sum, cat) => sum + cat.points, 0);
    document.getElementById('total-points').textContent = `Total: ${total} puntos`;
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// Inicializar categorías por defecto al cargar
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultCategories();
    loadSubjects();
});

function createSubject() {
    const subjectName = document.getElementById('subject-name').value.trim();
    
    if (!subjectName) {
        alert('Por favor ingresa un nombre para la asignatura');
        return;
    }
    
    if (currentCategories.length === 0) {
        alert('Debes agregar al menos una categoría');
        return;
    }
    
    const totalPoints = currentCategories.reduce((sum, cat) => sum + cat.points, 0);
    if (totalPoints !== 100) {
        const confirmCreate = confirm(`El total de puntos es ${totalPoints}, no 100. ¿Deseas crear la asignatura de todas formas?`);
        if (!confirmCreate) return;
    }
    
    const newSubject = {
        id: Date.now(),
        name: subjectName,
        categories: currentCategories.map(cat => ({
            ...cat,
            grades: []
        })),
        createdAt: new Date().toISOString()
    };
    
    subjects.push(newSubject);
    saveSubjects();
    
    // Limpiar formulario
    document.getElementById('subject-name').value = '';
    currentCategories = [];
    renderCategories();
    updateTotalPoints();
    
    // Cambiar a la pestaña de asignaturas
    switchTab('subjects');
    
    // Mostrar mensaje de éxito
    showNotification('✅ Asignatura creada exitosamente', 'success');
}

function renderSubjects() {
    const container = document.getElementById('subjects-list');
    
    if (subjects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Sin asignaturas registradas</h3>
                <p>Comienza creando tu primera asignatura con categorías personalizadas</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = subjects.map(subject => `
        <div class="subject-card">
            <div class="subject-header">
                <h2 class="subject-name">${subject.name}</h2>
                <div class="total-score" id="total-${subject.id}">
                    Nota Final: ${calculateSubjectAverage(subject).toFixed(2)} / 20
                </div>
            </div>
            
            <div class="categories-grid">
                ${subject.categories.map(category => `
                    <div class="category-card">
                        <div class="category-header">
                            <h3 class="category-title">${category.name}</h3>
                            <div class="category-score">${category.points} pts</div>
                        </div>
                        
                        <div class="grades-section">
                            <div class="grades-list" id="grades-${subject.id}-${category.name}">
                                ${category.grades.length === 0 ? 
                                    '<div class="empty-grades">No hay calificaciones</div>' :
                                    category.grades.map((grade, gradeIndex) => `
                                        <div class="grade-chip">
                                            <span>${grade}</span>
                                            <button class="remove-grade" onclick="removeGrade(${subject.id}, '${category.name}', ${gradeIndex})">×</button>
                                        </div>
                                    `).join('')
                                }
                            </div>
                            
                            <div class="average-display">
                                <div class="average-value">${calculateCategoryAverage(category).toFixed(2)} / 20</div>
                                <div class="points-earned">
                                    ${calculateCategoryPoints(category).toFixed(2)} / ${category.points} puntos
                                </div>
                            </div>
                            
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${(calculateCategoryAverage(category) / 20 * 100)}%"></div>
                            </div>
                            
                            <div class="add-grade-form">
                                <input type="number" 
                                       id="grade-input-${subject.id}-${category.name}" 
                                       placeholder="Nueva calificación (0-20)" 
                                       min="0" 
                                       max="20" 
                                       step="0.1">
                                <button type="button" class="btn btn-small" onclick="addGrade(${subject.id}, '${category.name}')">
                                    ➕ Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div style="text-align: right; margin-top: 20px;">
                <button type="button" class="btn btn-danger" onclick="deleteSubject(${subject.id})">
                    🗑️ Eliminar Asignatura
                </button>
            </div>
        </div>
    `).join('');
}

function addGrade(subjectId, categoryName) {
    const input = document.getElementById(`grade-input-${subjectId}-${categoryName}`);
    const grade = parseFloat(input.value);
    
    if (isNaN(grade) || grade < 0 || grade > 20) {
        alert('Por favor ingresa una calificación válida entre 0 y 20');
        return;
    }
    
    const subject = subjects.find(s => s.id === subjectId);
    const category = subject.categories.find(c => c.name === categoryName);
    
    category.grades.push(grade);
    input.value = '';
    
    saveSubjects();
    renderSubjects();
    showNotification('✅ Calificación agregada', 'success');
}

function removeGrade(subjectId, categoryName, gradeIndex) {
    const subject = subjects.find(s => s.id === subjectId);
    const category = subject.categories.find(c => c.name === categoryName);
    
    category.grades.splice(gradeIndex, 1);
    
    saveSubjects();
    renderSubjects();
    showNotification('🗑️ Calificación eliminada', 'info');
}

function deleteSubject(subjectId) {
    if (confirm('¿Estás seguro de que deseas eliminar esta asignatura? Esta acción no se puede deshacer.')) {
        subjects = subjects.filter(s => s.id !== subjectId);
        saveSubjects();
        renderSubjects();
        showNotification('🗑️ Asignatura eliminada', 'info');
    }
}

function calculateCategoryAverage(category) {
    if (category.grades.length === 0) return 0;
    const sum = category.grades.reduce((total, grade) => total + grade, 0);
    return sum / category.grades.length;
}

function calculateCategoryPoints(category) {
    const average = calculateCategoryAverage(category);
    return (average / 20) * category.points;
}

function calculateSubjectAverage(subject) {
    let totalPoints = 0;
    let earnedPoints = 0;
    
    subject.categories.forEach(category => {
        totalPoints += category.points;
        earnedPoints += calculateCategoryPoints(category);
    });
    
    if (totalPoints === 0) return 0;
    return (earnedPoints / totalPoints) * 20;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 600;
        font-size: 14px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

document.getElementById('subject-form').addEventListener('submit', function(e) {
    e.preventDefault();
    createSubject();
});

document.getElementById('category-name').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addCategory();
    }
});

document.getElementById('category-points').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addCategory();
    }
});