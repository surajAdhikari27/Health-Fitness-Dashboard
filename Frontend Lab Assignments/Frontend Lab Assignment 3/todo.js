
const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = [];

try {
    tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
} catch {
    tasks = [];
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            task.completed = checkbox.checked;
            saveTasks();
            displayTasks();
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            saveTasks();
            displayTasks();
        });

        li.append(checkbox, span, deleteButton);
        taskList.appendChild(li);
    });

    const remaining = tasks.filter(function(task) {
        return !task.completed;
    }).length;

    taskCount.textContent =
        `${tasks.length} tasks, ${remaining} remaining`;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    displayTasks();

    form.reset();
    input.focus();
});

displayTasks();
