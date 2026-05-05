// 1. Live Clock Function
function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const clockElement = document.getElementById('live-clock');
    if (clockElement) clockElement.textContent = now.toLocaleDateString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

// 2. Confetti Effect
function celebrate() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1e3a8a', '#ffd700', '#ffffff'] 
    });
}

// 3. Admin Task Manager
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('scpd_admin_tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `<span><strong>Task:</strong> ${task}</span><button class="delete-btn" onclick="deleteTask(${index})">Done</button>`;
        taskList.appendChild(li);
    });
    localStorage.setItem('scpd_admin_tasks', JSON.stringify(tasks));
}

function addTask() {
    const val = taskInput.value.trim();
    if (val) { tasks.push(val); taskInput.value = ''; renderTasks(); }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });
renderTasks();
