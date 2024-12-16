// DOM Elements
const taskCounter = document.getElementById('taskCounter');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const clearAllBtn = document.getElementById('clearAll');
const todoList = document.getElementById('todoList');

// State
let completedTasks = 0;

// Update counter display
function updateCounter() {
    taskCounter.textContent = `Tasks Completed: ${completedTasks}`;
}

// Create new task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    li.addEventListener('click', () => {
        if (!li.classList.contains('completed')) {
            li.classList.add('completed');
            completedTasks++;
            updateCounter();
        }
    });
    
    return li;
}

// Add new task
function handleAddTask() {
    const text = taskInput.value.trim();
    
    if (!text) {
        alert('Please enter a task!');
        return;
    }
    
    const taskElement = createTaskElement(text);
    todoList.appendChild(taskElement);
    taskInput.value = '';
    taskInput.focus();
}

// Clear all tasks
function handleClearAll() {
    todoList.innerHTML = '';
    completedTasks = 0;
    updateCounter();
}

// Event listeners
addTaskBtn.addEventListener('click', handleAddTask);
clearAllBtn.addEventListener('click', handleClearAll);

// Handle Enter key press
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddTask();
    }
});

// Initialize counter
updateCounter();