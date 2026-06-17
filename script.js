let editTask = null;
let input = document.querySelector("#todo-text");
let btn = document.querySelector("#todo-btn");
const taskContainer = document.querySelector("#taskContainer");

btn.addEventListener("click", function () {
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }
  if (editingTask !== null) {
        editingTask.textContent = task;
        editingTask = null;
        input.value = "";
        return;
    }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const p = document.createElement("p");
  p.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  deleteBtn.addEventListener("click", function () {
    taskDiv.remove();
  });

  editBtn.addEventListener("click", function () {
    input.value = p.textContent;
    editingTask = p;
  });
  taskDiv.appendChild(p);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);

  taskContainer.appendChild(taskDiv);

  input.value = "";
});
let editingTask = null;
