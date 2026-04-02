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

let count = 0;



function increment() {
  count++;
  document.getElementById("counter").textContent = count;
}
