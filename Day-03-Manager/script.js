const taskInput = document.querySelector("#taskInput");
const categoryInput = document.querySelector("#categoryInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");
const themeBtn = document.querySelector("#themeBtn");

let editTask = null;

addBtn.addEventListener("click", function () {
  const task = taskInput.value;
  const category = categoryInput.value;

  if (task.trim() === "") {
    alert("Please enter a task");
    return;
  }

  if (editTask !== null) {
    editTask.textContent = task;

    editTask = null;
    taskInput.value = "";
    addBtn.textContent = "Add Task";

    return;
  }

  taskList.innerHTML += `
    <div class="task-card">
      <div class="task-info">
        <h3>${task}</h3>
        <p>Category: ${category}</p>
      </div>

      <div class="task-actions">
        <button class="edit-btn">Edit</button>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  `;

  taskInput.value = "";
  updateStats();
});

taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest(".task-card").remove();
    updateStats();
  }

  if (e.target.classList.contains("complete-btn")) {
    e.target.closest(".task-card").classList.toggle("completed");
    updateStats();
  }

  if (e.target.classList.contains("edit-btn")) {
    const card = e.target.closest(".task-card");
    const taskTitle = card.querySelector("h3");

    taskInput.value = taskTitle.textContent;
    addBtn.textContent = "Update Task";

    editTask = taskTitle;
  }
});

function updateStats() {
  const allTasks = document.querySelectorAll(".task-card");
  const completed = document.querySelectorAll(".task-card.completed");

  totalTasks.textContent = allTasks.length;
  completedTasks.textContent = completed.length;
  pendingTasks.textContent = allTasks.length - completed.length;
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }
});