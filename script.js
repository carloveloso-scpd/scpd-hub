// 1. Live Clock & Dynamic Greeting
function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const subtitleElement = document.querySelector('.subtitle');
    const now = new Date();
    
    if (clockElement) {
        clockElement.textContent = now.toLocaleString('en-PH', { 
            weekday: 'long', year: 'numeric', month: 'long', 
            day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
        });
    }

    const hours = now.getHours();
    let greeting = "Admin Stuffs | Internal Portal";
    if (hours < 12) greeting = "🌅 Good Morning! | Internal Portal";
    else if (hours < 18) greeting = "☀️ Good Afternoon! | Internal Portal";
    else greeting = "🌙 Good Evening! | Internal Portal";
    
    if (subtitleElement && subtitleElement.textContent !== greeting) {
        subtitleElement.textContent = greeting;
    }
}
setInterval(updateClock, 1000);
updateClock();

// 2. Search Box Engine (Google & Gemini Redirection)
function executeSearch(engine) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.trim();
    if (!query) return; // Do nothing if the box is empty

    if (engine === 'google') {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    } else if (engine === 'gemini') {
        window.open(`https://gemini.google.com/app?q=${encodeURIComponent(query)}`, '_blank');
    }
}

// 3. Confetti Effects
function celebrate() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1e3a8a', '#fbbf24', '#ffffff'] // DepEd Theme
    });
}

function celebrateTaskDone() {
    confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#10b981', '#fbbf24'] // Success Green & Gold Theme
    });
}

// 4. Task Manager Logic
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('scpd_tasks')) || [];

function renderTasks() {
    if (!taskList) return;
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span><button class="done-btn" onclick="deleteTask(${index})">Done</button>`;
        taskList.appendChild(li);
    });
    localStorage.setItem('scpd_tasks', JSON.stringify(tasks));
}

function addTask() {
    if (taskInput && taskInput.value.trim()) {
        tasks.push(taskInput.value.trim());
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    celebrateTaskDone();
}

// 5. Secure Keyboard Listeners (Press Enter to submit)
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeSearch('gemini'); // Defaults to Gemini Search on Enter
            }
        });
    }

    const taskInputEl = document.getElementById('taskInput');
    if (taskInputEl) {
        taskInputEl.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                addTask();
            }
        });
    }
});

renderTasks();
