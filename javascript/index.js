document.addEventListener("DOMContentLoaded", function(){


  const addButton = document.getElementById("addButton");
  const clearButton = document.getElementById("clearButton");
  const userInput = document.getElementById("userInput");

  addButton.addEventListener("click", function() {
    const taskText = userInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      document.getElementById("taskList").appendChild(taskItem);
      userInput.value = "";
    }
  });

  clearButton.addEventListener("click", function() {
    document.getElementById("taskList").innerHTML = "";
  });






  // const userInput = document.getElementById("nameInput");
// const surnameDisplay = document.getElementById("surnameDisplay");

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     const parts = value.split(" ");
//     this.name = parts[0] || "";
//     this.surname = parts[1] || "";
//   }
// };

// function displaySurname() {
//   surnameDisplay.textContent = user.fullName;
// }

// userInput.addEventListener("input", (event) => {
//   user.fullName = event.target.value;
//   displaySurname();
// });

// document.getElementById("btnPlus").addEventListener("click", increment);
// document.getElementById("btnMinus").addEventListener("click", decrement);
// document.getElementById("btnReset").addEventListener("click", reset);
// document.getElementById("btnSave").addEventListener("click", save);
// document.getElementById("btnLoad").addEventListener("click", load);
// let count = 10;
// const msgEl = document.getElementById("message");

// load();

// function updatecounter() {
//   document.getElementById("display").innerHTML = count;
// }

// function increment() {
//   count++;
//   updatecounter();
// }

// function showMessage(text) {
//   msgEl.innerHTML = text;
//   setTimeout(function () {
//     msgEl.innerHTML = "";
//   },3000);
// }
// function decrement() {

//   count--;
//   if (count < 0) {
//     count = 0;
//   }
//   updatecounter();
// }
// function reset() {
//   count = 10;
//   updatecounter();
// }
// function save() {
//   localStorage.setItem("count", count);
//   showMessage("Saved");
// }

// function load() {
//   let saved = localStorage.getItem("count");
//   if (saved !== null) {
//     count = Number(saved);
//     showMessage("Loaded");
//   }
//   updatecounter();
// }
});