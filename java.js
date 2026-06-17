let editTask = null;
const input = document.querySelector("input");
const button1 = document.querySelector("#btn1");
const tl = document.querySelector("#tl");

button1.addEventListener("click", function () {
  const value = input.value;

  if (value.trim() === "") {
    alert("please add task");
    return;
  }
  if (editTask !== null) {
  editTask.textContent = value;
  editTask = null;
  input.value = "";
  button1.textContent = "Submit";
  return;
}

  tl.innerHTML += ` <div class="li">
          <h4>${value}</h4>
          <div class="db">
        <button class="btn edit">edit</button>
        <button class="btn del">delete</button>
          </div>
        </div>`;
  input.value = "";
  
  
tl.addEventListener("click", function (e) {
    if (e.target.classList.contains("del")) {
        e.target.closest(".li").remove();
    }
    if( e.target.classList.contains("edit")){
       editTask= e.target.closest(".li").querySelector("h4");
       input.value = editTask.textContent;
       button1.textContent="update"
    }
});

  console.log(value);
});

