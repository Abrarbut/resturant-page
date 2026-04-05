let tasks = [];
let count = 1;
// Function to Display tasks
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +
    " <button onclick='removeTask(" + i + ")'>x</button></li>";
  }
  document.getElementById("list").innerHTML = html;
}
function addTaskOnEnter(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

// Function to Add a task
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") {
    return alert("Please enter a task.");
  }
  tasks.push(text);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}

// Function to Remove a task
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

// Function to Clear all tasks
function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}

// Function to Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displaysavemessage();
}

// Function to Load tasks
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}
function displaysavemessage() {
  let message = document.getElementById("message");
  message.style.display = "block";
  setTimeout(function() {
    message.style.display = "none";
  }, 3000);
}
// Load and display tasks when page loads
saveTasks();
loadTasks();
displayTasks();


document.getElementById("task").addEventListener("keypress", addTaskOnEnter);

document.getElementById("add").addEventListener("click", addTask);

document.getElementById("clear").addEventListener("click", clearAll);
