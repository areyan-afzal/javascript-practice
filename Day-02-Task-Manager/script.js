
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const categoryInput = document.querySelector("#categoryInput");
const taskList = document.querySelector("#taskList");
const themeBtn = document.querySelector("#themeBtn");

let taskId = 1;
let editTask = null;

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskTitle = taskInput.value;

  if (taskTitle.trim() === "") {
    alert("Please enter a task");
    return;
  }
  if (editTask !== null) {
  editTask.textContent = taskTitle;

  editTask = null;

  taskInput.value = "";

  return;
}

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  taskCard.setAttribute("data-id", taskId);
  taskCard.setAttribute("data-status", "pending");
  taskCard.setAttribute("data-category", categoryInput.value);

  const title = document.createElement("h3");
  title.append(document.createTextNode(taskTitle));

  const category = document.createElement("p");
  category.textContent = "Category: " + categoryInput.value;

  const buttonBox = document.createElement("div");
  buttonBox.classList.add("button-box");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  buttonBox.append(editBtn, completeBtn, deleteBtn);

 taskCard.append(title, category, buttonBox);
taskList.append(taskCard);

updateCounts();

taskInput.value = "";
taskId++;
});
taskList.addEventListener("click", function (e) {
  const taskCard = e.target.closest(".task-card");

  if (taskCard === null) {
    return;
  }

  if (e.target.classList.contains("delete-btn")) {
    taskCard.remove();
  }
  if (e.target.classList.contains("edit-btn")) {
  const title = taskCard.querySelector("h3");

  taskInput.value = title.textContent;

  editTask = title;
}
});
taskList.addEventListener("click", function (e) {
  const taskCard = e.target.closest(".task-card");

  if (taskCard === null) {
    return;
  }

if (e.target.classList.contains("delete-btn")) {
  taskCard.remove();
  updateCounts();
}

if (e.target.classList.contains("complete-btn")) {
  taskCard.setAttribute("data-status", "completed");
  taskCard.classList.add("completed");

  updateCounts();
}
});
function updateCounts() {
  const allTasks = document.querySelectorAll(".task-card");
  const completedTasks = document.querySelectorAll(".task-card.completed");

  const total = allTasks.length;
  const completed = completedTasks.length;
  const pending = total - completed;

  document.querySelector("#totalCount").textContent = total;
  document.querySelector("#completedCount").textContent = completed;
  document.querySelector("#pendingCount").textContent = pending;
}
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    document.body.setAttribute("data-theme", "light");
    themeBtn.textContent = "🌙";
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeBtn.textContent = "☀";
  }
});