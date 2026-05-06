// 1. Live Clock
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleString('en-PH', { 
        weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
    });
}
setInterval(updateClock, 1000);
updateClock();

// 2. Confetti Celebration
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1e3a8a', '#fbbf24', '#ffffff']
    });
}

// 3. Task Manager Logic
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('scpd_tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span><button class="done-btn" onclick="deleteTask(${index})">Done</button>`;
        taskList.appendChild(li);
    });
    localStorage.setItem('scpd_tasks', JSON.stringify(tasks));
}

function addTask() {
    if (taskInput.value.trim()) {
        tasks.push(taskInput.value.trim());
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
